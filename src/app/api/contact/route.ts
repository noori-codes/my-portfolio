import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { clientIp, rateLimit } from "@/lib/rate-limit";

type ContactBody = {
  name?: string;
  email?: string;
  message?: string;
  /** Honeypot — must stay empty. */
  company?: string;
};

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  const ip = clientIp(request);
  const limited = rateLimit(`contact:${ip}`, RATE_LIMIT, RATE_WINDOW_MS);
  if (!limited.ok) {
    return NextResponse.json(
      { error: "Too many messages. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSec) },
      },
    );
  }

  let body: ContactBody;

  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Bots that fill every field — pretend success so they don't retry smarter.
  if (String(body.company ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = sanitizeHeader(String(body.name ?? "").trim());
  const email = sanitizeHeader(String(body.email ?? "").trim());
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  if (name.length > 120 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  try {
    const host = requiredEnv("EMAIL_HOST");
    const port = Number(process.env.EMAIL_PORT || 587);
    const user = requiredEnv("EMAIL_USERNAME");
    const pass = requiredEnv("EMAIL_PASSWORD");
    const from = process.env.EMAIL_FROM || user;
    const to = process.env.EMAIL_TO || from;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `${message}\n\n— ${name}\n${email}`,
      html: `
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
        <hr>
        <p><strong>${escapeHtml(name)}</strong><br>${escapeHtml(email)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    return NextResponse.json(
      { error: "Could not send message. Please try again later." },
      { status: 500 },
    );
  }
}
