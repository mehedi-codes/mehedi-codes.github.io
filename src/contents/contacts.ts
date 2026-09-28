import type { LocalizedString } from "./types";

export type ContactEntry = {
  label: LocalizedString;
  username: string;
  href: string;
};

export const contacts: ContactEntry[] = [
  {
    label: { en: "email", bn: "ইমেইল" },
    username: "mehedi.swe@proton.me",
    href: "mailto:mehedi.swe@proton.me",
  },
  {
    label: { en: "github", bn: "গিটহাব" },
    username: "github.com/mehedi-codes",
    href: "https://github.com/mehedi-codes",
  },
  {
    label: { en: "linkedin", bn: "লিংকডইন" },
    username: "linkedin.com/in/mehedi-codes",
    href: "https://linkedin.com/in/mehedi-codes",
  },
];
