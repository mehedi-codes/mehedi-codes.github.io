export type ProjectEntry = {
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  tags: { en: string; bn: string }[];
  image: string;
  url: string;
  live: string;
  source: string;
};

export const projects: ProjectEntry[] = [
  {
    title: {
      en: "Project One",
      bn: "প্রকল্প এক",
    },
    description: {
      en: "Short description coming soon.",
      bn: "সংক্ষিপ্ত বিবরণ শীঘ্রই যুক্ত হবে।",
    },
    tags: [
      { en: "typescript", bn: "টাইপস্ক্রিপ্ট" },
      { en: "full-stack", bn: "ফুল-স্ট্যাক" },
    ],
    image: "/placeholder.svg",
    url: "example.com/project-one",
    live: "https://example.com/project-one",
    source: "https://github.com/example/project-one",
  },
  {
    title: {
      en: "Project Two",
      bn: "প্রকল্প দুই",
    },
    description: {
      en: "Short description coming soon.",
      bn: "সংক্ষিপ্ত বিবরণ শীঘ্রই যুক্ত হবে।",
    },
    tags: [
      { en: "react", bn: "রিঅ্যাক্ট" },
      { en: "frontend", bn: "ফ্রন্ট-এন্ড" },
    ],
    image: "/placeholder.svg",
    url: "example.com/project-two",
    live: "https://example.com/project-two",
    source: "https://github.com/example/project-two",
  },
  {
    title: {
      en: "Project Three",
      bn: "প্রকল্প তিন",
    },
    description: {
      en: "Short description coming soon.",
      bn: "সংক্ষিপ্ত বিবরণ শীঘ্রই যুক্ত হবে।",
    },
    tags: [
      { en: "nodejs", bn: "নোডজেএস" },
      { en: "backend", bn: "ব্যাক-এন্ড" },
    ],
    image: "/placeholder.svg",
    url: "example.com/project-three",
    live: "https://example.com/project-three",
    source: "https://github.com/example/project-three",
  },
];