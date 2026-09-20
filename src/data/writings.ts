export type WritingEntry = {
  date: { en: string; bn: string };
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  tags: { en: string; bn: string }[];
  image: string;
  url: string;
};

export const writings: WritingEntry[] = [
  {
    date: {
      en: "September 19, 2026",
      bn: "১৯ সেপ্টেম্বর ২০২৬",
    },
    title: {
      en: "Post One",
      bn: "পোস্ট এক",
    },
    description: {
      en: "Short article description coming soon.",
      bn: "সংক্ষিপ্ত লেখার বিবরণ শীঘ্রই যুক্ত হবে।",
    },
    tags: [{ en: "writing", bn: "লেখালিখি" }],
    image: "/placeholder.svg",
    url: "/writing/post-one",
  },
  {
    date: {
      en: "September 12, 2026",
      bn: "১২ সেপ্টেম্বর ২০২৬",
    },
    title: {
      en: "Post Two",
      bn: "পোস্ট দুই",
    },
    description: {
      en: "Short article description coming soon.",
      bn: "সংক্ষিপ্ত লেখার বিবরণ শীঘ্রই যুক্ত হবে।",
    },
    tags: [{ en: "writing", bn: "লেখালিখি" }],
    image: "/placeholder.svg",
    url: "/writing/post-two",
  },
  {
    date: {
      en: "September 5, 2026",
      bn: "৫ সেপ্টেম্বর ২০২৬",
    },
    title: {
      en: "Post Three",
      bn: "পোস্ট তিন",
    },
    description: {
      en: "Short article description coming soon.",
      bn: "সংক্ষিপ্ত লেখার বিবরণ শীঘ্রই যুক্ত হবে।",
    },
    tags: [{ en: "writing", bn: "লেখালিখি" }],
    image: "/placeholder.svg",
    url: "/writing/post-three",
  },
];
