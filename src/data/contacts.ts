export type ContactEntry = {
  label: { en: string; bn: string };
  username: string;
  href: string;
};

export const contacts: ContactEntry[] = [
  {
    label: { en: "email", bn: "ইমেইল" },
    username: "hello@mehedi.dev",
    href: "mailto:hello@mehedi.dev",
  },
  {
    label: { en: "github", bn: "গিটহাব" },
    username: "@mehedi-codes",
    href: "https://github.com/mehedi-codes",
  },
  {
    label: { en: "linkedin", bn: "লিংকডইন" },
    username: "in/placeholder",
    href: "https://linkedin.com/in/placeholder",
  },
];