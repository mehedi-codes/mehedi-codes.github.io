export type ExpEntry = {
  title: { en: string; bn: string };
  company: string;
  period: { en: string; bn: string };
  tags: { en: string; bn: string };
  description: { en: string; bn: string };
  active?: boolean;
};

export const experience: ExpEntry[] = [
  {
    title: {
      en: "Software Engineer",
      bn: "সফটওয়্যার ইঞ্জিনিয়ার",
    },
    company: "ET Tech Limited",
    period: {
      en: "May 2025 - Present",
      bn: "মে ২০২৫ - বর্তমান",
    },
    tags: {
      en: "full-time / full-stack",
      bn: "ফুল-টাইম / ফুল-স্ট্যাক",
    },
    description: {
      en: "Details coming soon.",
      bn: "বিস্তারিত শীঘ্রই যোগ করা হবে।",
    },
    active: true,
  },
  {
    title: {
      en: "Junior Software Engineer",
      bn: "জুনিয়র সফটওয়্যার ইঞ্জিনিয়ার",
    },
    company: "ET Tech Limited",
    period: {
      en: "May 2024 - Apr 2025",
      bn: "মে ২০২৪ - এপ্রিল ২০২৫",
    },
    tags: {
      en: "full-time",
      bn: "ফুল-টাইম",
    },
    description: {
      en: "Details coming soon.",
      bn: "বিস্তারিত শীঘ্রই যোগ করা হবে।",
    },
  },
  {
    title: {
      en: "Intern Junior Software Engineer",
      bn: "ইন্টার্ন জুনিয়র সফটওয়্যার ইঞ্জিনিয়ার",
    },
    company: "ET Tech Limited",
    period: {
      en: "Feb 2024 - Apr 2024",
      bn: "ফেব্রুয়ারি ২০২৪ - এপ্রিল ২০২৪",
    },
    tags: {
      en: "internship",
      bn: "ইন্টার্নশিপ",
    },
    description: {
      en: "Details coming soon.",
      bn: "বিস্তারিত শীঘ্রই যোগ করা হবে।",
    },
  },
];