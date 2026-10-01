# IMX Portfolio

Personal portfolio for **Imran Noori (IMX)** — full-stack developer and computer instructor.

**Live:** [noori.qzz.io](https://noori.qzz.io)

Built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

## Features

- Cinematic home: hero, intro, flagship projects, stack, contact CTA
- Work archive with featured / secondary / earlier hierarchy
- Case studies with problem → approach → outcome, decisions, and stack notes
- About editorial layout with portrait and timeline
- Contact form via SMTP (`nodemailer`)
- SEO: metadata, Open Graph, sitemap, robots, JSON-LD

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Content

Edit copy, projects, skills, and links in [`src/lib/site.ts`](src/lib/site.ts).

| Asset | Path |
|---|---|
| Profile photo | `public/images/my-photo.jpg` |
| Logo | `public/images/logo-transparent.png` |
| OG share image | `public/images/og-card.jpg` |
| Project screenshots | `public/images/linkhub.png`, `public/images/imx-os.png` |

When adding a project, set `slug`, `github`, optional `live` / `image` / `caseStudy`, and `featured` / include in `secondarySlugs` as needed. It will show on `/work` and `/work/[slug]`.

## Contact form (SMTP)

Create a `.env.local` (or set vars on your host):

```bash
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USERNAME=your@email.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=your@email.com   # optional, defaults to EMAIL_USERNAME
```

The API route is `POST /api/contact`.

## Project structure

```
src/
  app/           # App Router pages + contact API
  components/    # UI (Hero, FeaturedWork, BrowserFrame, …)
  lib/site.ts    # Site content & project data
public/images/   # Photos, logos, screenshots
```

## Deploy

Deploy on [Vercel](https://vercel.com) — connect the repo, add the SMTP env vars, and ship.

## Links

- Portfolio: [noori.qzz.io](https://noori.qzz.io)
- GitHub: [noori-codes](https://github.com/noori-codes)
- YouTube: [@techwithimx](https://www.youtube.com/@techwithimx)
