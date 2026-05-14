export const site = {
  name: "hello savvy",
  domain: "hellosavvy.com",
  email: "hello@hellosavvy.com",
  bookUrl: "/book",
  calUsername: process.env.NEXT_PUBLIC_CAL_USERNAME ?? "",
  social: {
    bluesky: "https://bsky.app/profile/hellosavvy.com",
    github: "https://github.com/hellosavvy",
  },
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
] as const;
