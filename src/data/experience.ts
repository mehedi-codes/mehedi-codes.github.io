export type ExpEntry = {
  title: { en: string; bn: string };
  company: { en: string; bn: string };
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
    company: {
      en: "ET Tech Limited",
      bn: "ইটি টেক লিমিটেড",
    },
    period: {
      en: "May 2025 - Present । 1 Year 5 Months",
      bn: "মে ২০২৫ - বর্তমান । ১ বছর ৫ মাস",
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
    company: {
      en: "ET Tech Limited",
      bn: "ইটি টেক লিমিটেড",
    },
    period: {
      en: "May 2024 - Apr 2025 । 1 Year",
      bn: "মে ২০২৪ - এপ্রিল ২০২৫ । ১ বছর",
    },
    tags: {
      en: "full-time / front-end",
      bn: "ফুল-টাইম / ফ্রন্ট-এন্ড",
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
    company: {
      en: "ET Tech Limited",
      bn: "ইটি টেক লিমিটেড",
    },
    period: {
      en: "Feb 2024 - Apr 2024 | 3 Month",
      bn: "ফেব্রুয়ারি ২০২৪ - এপ্রিল ২০২৪ | ৩ মাস",
    },
    tags: {
      en: "internship / front-end",
      bn: "ইন্টার্নশিপ / ফ্রন্ট-এন্ড",
    },
    description: {
      en: "Details coming soon.",
      bn: "বিস্তারিত শীঘ্রই যোগ করা হবে।",
    },
  },
];
