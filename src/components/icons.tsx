import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    width: 22,
    height: 22,
    "aria-hidden": true,
    ...props,
  };
}

export function IconHome(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5.5 9.5V20a1 1 0 0 0 1 1H10v-5.5h4V21h3.5a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

export function IconHeart(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 20.5S3.8 15.4 3.8 9.8A4.8 4.8 0 0 1 12 6.6a4.8 4.8 0 0 1 8.2 3.2c0 5.6-8.2 10.7-8.2 10.7Z" />
    </svg>
  );
}

export function IconLeaf(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 20c0-8 5.5-14 16-14 0 9-5.2 13.4-11 13.4A5 5 0 0 1 4 20Z" />
      <path d="M9.5 15.5C12 13 14.5 11 17 10" />
    </svg>
  );
}

export function IconPulse(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M3 12h3.5l2-5 3 10 2.5-6 1.7 3H21" />
    </svg>
  );
}

export function IconUsers(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.2 2.7-5.2 6-5.2s6 2 6 5.2" />
      <path d="M16.2 5.4a3.2 3.2 0 0 1 0 5.6M17 14.4c2.4.5 4 2.4 4 5.1" />
    </svg>
  );
}

export function IconShield(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 3 5 6v5.5c0 4.4 3 8 7 9.5 4-1.5 7-5.1 7-9.5V6l-7-3Z" />
      <path d="M12 8.5v4M12 15.6v.1" />
    </svg>
  );
}

export function IconChevron(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function IconPlus(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconCheck(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function IconSpark(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
      <path d="M18.5 16.5 19 18l1.5.5L19 19l-.5 1.5L18 19l-1.5-.5L18 18l.5-1.5Z" />
    </svg>
  );
}

export function IconBook(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M4 5.5A2 2 0 0 1 6 3.5h13v15H6a2 2 0 0 0-2 2v-15Z" />
      <path d="M4 18.5a2 2 0 0 1 2-2h13v4H6a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

export function IconWind(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M3 8h9.5a2.8 2.8 0 1 0-2.8-2.8" />
      <path d="M3 12h13a2.8 2.8 0 1 1-2.8 2.8" />
      <path d="M3 16h6.5" />
    </svg>
  );
}

export function IconDroplet(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M12 3.5c3.4 4 6 6.7 6 9.7a6 6 0 0 1-12 0c0-3 2.6-5.7 6-9.7Z" />
    </svg>
  );
}

export function IconMoon(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M20 14.5A8 8 0 0 1 9.5 4 8.2 8.2 0 1 0 20 14.5Z" />
    </svg>
  );
}

export function IconClipboard(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M9 4.5h6M8.5 4.5H7a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6.5a2 2 0 0 0-2-2h-1.5" />
      <path d="M9 3.5h6v2.2H9zM8.5 11h7M8.5 15h4.5" />
    </svg>
  );
}

export function IconCalendar(p: IconProps) {
  return (
    <svg {...base(p)}>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.2" />
      <path d="M3.5 9.8h17M8.5 3.2v3.4M15.5 3.2v3.4" />
    </svg>
  );
}

export function IconMessage(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M20.5 12.2c0 4-3.8 7.2-8.5 7.2a10 10 0 0 1-2.6-.3L4 21l1.4-3.6A6.9 6.9 0 0 1 3.5 12.2C3.5 8.2 7.3 5 12 5s8.5 3.2 8.5 7.2Z" />
    </svg>
  );
}

export function IconScale(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M5 21h14M12 3v18M12 3 6 9h12L12 3Z" />
      <path d="M4 12.5h5.5M14.5 12.5H20" />
    </svg>
  );
}

export function IconPhone(p: IconProps) {
  return (
    <svg {...base(p)}>
      <path d="M6.2 3.5h2.6l1.5 3.8-2 1.4a11.4 11.4 0 0 0 5.5 5.5l1.4-2 3.8 1.5v2.6a2 2 0 0 1-2.2 2A15.6 15.6 0 0 1 4.2 5.7a2 2 0 0 1 2-2.2Z" />
    </svg>
  );
}

export function IconSettings(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v2.4M12 18.8v2.4M4.3 7.6l2 1.2M17.7 15.2l2 1.2M4.3 16.4l2-1.2M17.7 8.8l2-1.2" />
    </svg>
  );
}

export function IconDots(p: IconProps) {
  return (
    <svg {...base(p)}>
      <circle cx="5.5" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLogo({ width = 24, height = 24, ...rest }: IconProps) {
  // Two-tone mark mirroring the brand badge: a turquoise heart beside a
  // standing figure. The heart uses --primary and the figure uses --ink so
  // both stay legible in light and dark (the figure inverts on dark surfaces).
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      aria-hidden
      {...rest}
    >
      <path
        fill="var(--primary)"
        d="M7.5 16.1S2.5 12.5 2.5 9A2.7 2.7 0 0 1 7.5 7.5 2.7 2.7 0 0 1 12.5 9c0 3.5-5 7.1-5 7.1Z"
      />
      <g fill="var(--ink)">
        <circle cx="17" cy="6.3" r="2.25" />
        <path d="M13.05 12.2a0.95 0.95 0 0 0 1.15 1.48l1.4-.86-1.4-1.62-1.15 1z" />
        <path d="M17 9.05c-1.75 0-3.05 1.35-3.05 3.15v2.4a0.95 0.95 0 0 0 1.9 0v-1.7h0.25v2.2l-0.72 3.35a1 1 0 0 0 1.95.44L17.55 18h.4l.22 1.13a1 1 0 0 0 1.95-.44l-.72-3.35v-2.2h.25v1.7a0.95 0.95 0 0 0 1.9 0v-2.4c0-1.8-1.3-3.15-3.05-3.15z" />
      </g>
    </svg>
  );
}
