import { site } from "@/lib/site";

type Props = {
  className?: string;
};

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[1.05rem]">
      <path
        fill="currentColor"
        d="M12 2C6.477 2 2 6.584 2 12.253c0 4.53 2.865 8.367 6.839 9.72.5.094.682-.222.682-.493 0-.243-.01-1.052-.014-1.91-2.782.618-3.369-1.21-3.369-1.21-.455-1.184-1.11-1.5-1.11-1.5-.908-.635.069-.622.069-.622 1.003.072 1.531 1.057 1.531 1.057.892 1.566 2.341 1.114 2.91.852.091-.662.35-1.114.636-1.37-2.22-.259-4.555-1.14-4.555-5.073 0-1.12.39-2.036 1.029-2.754-.103-.26-.447-1.302.098-2.713 0 0 .84-.275 2.75 1.052A9.35 9.35 0 0 1 12 6.844a9.35 9.35 0 0 1 2.504.346c1.909-1.327 2.748-1.052 2.748-1.052.546 1.411.202 2.453.1 2.713.64.718 1.028 1.634 1.028 2.754 0 3.942-2.339 4.811-4.566 5.065.359.317.679.943.679 1.901 0 1.371-.012 2.477-.012 2.814 0 .273.18.592.688.491C19.138 20.617 22 16.78 22 12.253 22 6.584 17.523 2 12 2Z"
      />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-[1.05rem]">
      <path
        fill="currentColor"
        d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14C4.5 20.5 12 20.5 12 20.5s7.5 0 9.38-.56a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"
      />
    </svg>
  );
}

const links = [
  {
    label: "GitHub",
    href: site.contact.github,
    icon: GitHubIcon,
  },
  {
    label: "YouTube",
    href: site.contact.youtube,
    icon: YouTubeIcon,
  },
] as const;

export function SocialIcons({ className = "" }: Props) {
  return (
    <div className={`social-icons ${className}`.trim()}>
      {links.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          aria-label={label}
          title={label}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}
