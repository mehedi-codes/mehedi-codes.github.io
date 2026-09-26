export type Lang = "en" | "bn";

export type LocalizedString = { en: string; bn: string };

export type LocalizedStringList = { en: string[]; bn: string[] };

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

export type ExpEntry = {
  title: LocalizedString;
  company: LocalizedString;
  period: LocalizedString;
  type: LocalizedString;
  highlights: LocalizedStringList;
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
      en: "May 2025 - Present // 1 Year 5 Months",
      bn: "মে ২০২৫ - বর্তমান // ১ বছর ৫ মাস",
    },
    type: {
      en: "full-time",
      bn: "ফুল-টাইম",
    },
    highlights: {
      en: [
        "Developed a full-stack Officers Information Management System for a Bangladesh defense organization — built backend with Bun, Hono, Prisma, and PostgreSQL, and frontend with Next.js and TypeScript — featuring 30+ modules, deployed and self-managed on a Linux VPS using PM2 and Nginx",
        "Managed hosting infrastructure across Linux VPS (PM2 + Nginx) and Windows Server (IIS) — handled database backups, restored a ransomware-attacked project from backup, and managed Google Workspace email services for clients",
        "Led development of two government case management systems in Bangladesh — one on C#.NET MVC and Razor Pages serving 11 organizations across 50 field offices, and one whose legacy PHP and CodeIgniter frontend I migrated to Tailwind CSS and cleaned up into a minimal, consistent structure",
        "Deployed the Kaspersky EDR management server for one of Bangladesh's largest garments manufacturers, then trained their IT team to enrol endpoints",
        "Built and delivered client websites with Next.js and TypeScript — a portfolio site for a serial entrepreneur (allsharier.com) and a company site for Jenjar International (jenjarint.com) — and migrated the ET Tech and SARSO sites to TypeScript, improving maintainability and type safety",
        "Acted as ET Tech's technical support representative for SARSO, setting up Zoom for the organization's global recruitment sessions and annual GB and TMB standards meetings",
      ],
      bn: [
        "বাংলাদেশের একটি প্রতিরক্ষা সংস্থার জন্য ফুল-স্ট্যাক অফিসার তথ্য ব্যবস্থাপনা সিস্টেম তৈরি করেছি — ব্যাকএন্ডে Bun, Hono, Prisma ও PostgreSQL, ফ্রন্টএন্ডে Next.js ও TypeScript — সিস্টেমটিতে ৩০টিরও বেশি মডিউল রয়েছে, যা PM2 ও Nginx ব্যবহার করে লিনাক্স ভিএসপিতে ডিপ্লয় করেছি ও নিজে পরিচালনা করেছি",
        "লিনাক্স ভিএসপি (PM2 + Nginx) ও উইন্ডোজ সার্ভারে (IIS) হোস্টিং অবকাঠামো পরিচালনা করেছি — ডেটাবেস ব্যাকআপ নেওয়ার কাজ করেছি, র্যানসমওয়্যার আক্রমণের শিকার একটি প্রকল্প ব্যাকআপ থেকে পুনরুদ্ধার করেছি, এবং ক্লায়েন্টদের জন্য গুগল ওয়ার্কস্পেস ইমেইল সেবা পরিচালনা করেছি",
        "বাংলাদেশের দুটি সরকারি কেস ম্যানেজমেন্ট সিস্টেমের উন্নয়নে দায়িত্ব নিয়েছি — C#.NET MVC ও Razor Pages দিয়ে তৈরি একটি সিস্টেম ৫০টি ফিল্ড অফিস জুড়ে ১১টি সংস্থাকে সেবা দেয়, আর আরেকটির পুরোনো PHP ও CodeIgniter ফ্রন্টএন্ড Tailwind CSS-এ মাইগ্রেট করে সরল ও ধারাবাহিক কাঠামোতে রিফ্যাক্টর করেছি",
        "বাংলাদেশের অন্যতম বড় পোশাক শিল্পকারী প্রতিষ্ঠানের জন্য Kaspersky EDR ব্যবস্থাপনা সার্ভার ডিপ্লয় করেছি, এবং তাদের আইটি টিমকে এন্ডপয়েন্ট সংযুক্ত করার বিষয়ে প্রশিক্ষণ দিয়েছি",
        "Next.js ও TypeScript ব্যবহার করে ক্লায়েন্ট ওয়েবসাইট তৈরি ও ডেলিভারি করেছি — একজন সিরিয়াল উদ্যোক্তার পোর্টফোলিও সাইট (allsharier.com) ও জেনজার ইন্টারন্যাশনালের প্রতিষ্ঠান ওয়েবসাইট (jenjarint.com) — এবং ইটি টেক লিমিটেড ও SARSO ওয়েবসাইট TypeScript-এ মাইগ্রেট করে রক্ষণাবেক্ষণযোগ্যতা ও টাইপ সেফটি উন্নত করেছি",
        "SARSO-র জন্য ইটি টেক লিমিটেডের কারিগরি সহায়তা প্রতিনিধি হিসেবে দায়িত্ব পালন করেছি, যার মধ্যে সংস্থার বৈশ্বিক নিয়োগ সেশন ও বার্ষিক GB ও TMB স্ট্যান্ডার্ড সভার জুম ব্যবস্থা করা ছিল",
      ],
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
      en: "May 2024 - Apr 2025 // 1 Year",
      bn: "মে ২০২৪ - এপ্রিল ২০২৫ // ১ বছর",
    },
    type: {
      en: "full-time",
      bn: "ফুল-টাইম",
    },
    highlights: {
      en: [
        "Led frontend development of the Personnel Information Management System (PIMS) for Bangladesh Jute Mills Corporation (BJMC), a government organization under the Ministry of Textiles and Jute — multi-level employee records, search and filters, and multi-format reporting on React and Vite with JWT auth against a NestJS REST API",
        "Redesigned and rebuilt the ET Tech Limited company website (etlimited.net) from scratch based on iterative client feedback, delivering a fully polished production site — integrating WordPress REST API headlessly into React for dynamic blog content",
        "Single-handedly built the SARSO (South Asian Regional Standards Organization) website, a SAARC-affiliated international body — handling client visits, requirement gathering, and end-to-end frontend development with React 19, Vite and Tailwind CSS v4, plus a .NET REST API integration for a planned member portal (sarso.org)",
      ],
      bn: [
        "বস্ত্র ও পাট মন্ত্রণালয়ের অধীনে সরকারি সংস্থা বাংলাদেশ জুট মিলস কর্পোরেশনের (BJMC) কর্মী তথ্য ব্যবস্থাপনা সিস্টেমের (PIMS) ফ্রন্টএন্ড ডেভেলপমেন্টের দায়িত্ব নিয়েছি — বহু স্তরের কর্মীর তথ্য, সার্চ ও ফিল্টার এবং বহু ফরম্যাটে রিপোর্ট তৈরি — React ও Vite দিয়ে JWT অথেন্টিকেশনসহ একটি NestJS REST API ব্যাকএন্ডের সঙ্গে যুক্ত করে",
        "ধাপে ধাপে ক্লায়েন্টের মতামতের ভিত্তিতে ইটি টেক লিমিটেডের প্রতিষ্ঠান ওয়েবসাইট (etlimited.net) সম্পূর্ণ নতুন করে ডিজাইন ও রিবিল্ড করে একটি পরিশীলিত প্রোডাকশন সাইট ডেলিভারি করেছি — ডাইনামিক ব্লগ কনটেন্টের জন্য WordPress REST API হেডলেসভাবে React-এ ইন্টিগ্রেট করেছি",
        "এককভাবে SARSO (South Asian Regional Standards Organization) ওয়েবসাইট তৈরি করেছি, যা সার্ক-অ্যাফিলিয়েটেড একটি আন্তর্জাতিক সংস্থা — ক্লায়েন্ট ভিজিট, রিকোয়ারমেন্ট সংগ্রহ ও React 19, Vite, Tailwind CSS v4 ব্যবহার করে এন্ড-টু-এন্ড ফ্রন্টএন্ড ডেভেলপমেন্ট, সেই সঙ্গে পরিকল্পিত সদস্য পোর্টালের জন্য একটি .NET REST API ইন্টিগ্রেশন (sarso.org)",
      ],
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
      en: "Feb 2024 - Apr 2024 // 3 Month",
      bn: "ফেব্রুয়ারি ২০২৪ - এপ্রিল ২০২৪ // ৩ মাস",
    },
    type: {
      en: "internship",
      bn: "ইন্টার্নশিপ",
    },
    highlights: {
      en: [
        "Built and shipped a Personnel Information Management System (PIMS) dashboard using React (Vite), React Router DOM, and Tailwind CSS",
        "Participated in client visits alongside senior engineers and teammates — gathering requirements, taking notes, and translating them into UI features",
      ],
      bn: [
        "React (Vite), React Router DOM ও Tailwind CSS ব্যবহার করে কর্মী তথ্য ব্যবস্থাপনা সিস্টেমের (PIMS) ড্যাশবোর্ড তৈরি ও ডেলিভারি করেছি",
        "সিনিয়র ইঞ্জিনিয়ার ও সহকর্মীদের সঙ্গে ক্লায়েন্ট ভিজিটে অংশ নিয়েছি — রিকোয়ারমেন্ট সংগ্রহ, নোট নেওয়া এবং সেগুলোকে UI ফিচারে রূপান্তর করা",
      ],
    },
  },
];

export type ProjectEntry = {
  title: LocalizedString;
  description: LocalizedString;
  tags: LocalizedString[];
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

export type WritingEntry = {
  date: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  tags: LocalizedString[];
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

const en = {
  "nav.experience": "experience",
  "nav.work": "work",
  "nav.writing": "writing",
  "nav.contact": "contact",
  "nav.appbar-label": "main navigation",
  "experience.title": "experience",
  "resume.view": "view resume",
  "work.title": "work",
  "work.view-all": "view all",
  "work.card.live": "live link",
  "work.card.source": "source code",
  "writing.title": "writing",
  "writing.view-all": "view all",
  "contact.title": "contact",
  "contact.heading": "Let's work together",
  "contact.bio":
    "I'm currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you! ",
  "lang.label": "বাংলা",
  "theme.dark": "dark",
  "theme.light": "light",
  "meta.title": "Mehedi Hasan | Software Engineer",
  "meta.description": "Mehedi Hasan, a Software Engineer from Bangladesh specializing in Full-Stack Web Development.",
  "work.meta.title": "Work | Mehedi Hasan",
  "writing.meta.title": "Writing | Mehedi Hasan",
  "meta.404-title": "404 - page not found",
  logo: "mehedi_hasan",
  "hero.title": "Mehedi Hasan",
  "hero.designation": "Software Engineer",
  "hero.biodata":
    "Full Stack Software Engineer, building production grade web applications with TypeScript across the stack. Shipped real world systems for government organizations, international bodies, and private clients. Started as a solo frontend developer, grew into a full stack engineer, and also spent time as an assistant project manager. Cares about clean code, strong fundamentals, and choosing the right tool for the right job.",
  "hero.primary-btn": "see my work",
  "hero.secondary-btn": "get in touch",
  "notfound.code": "404",
  "notfound.title": "page not found",
  "notfound.message": "The page you're looking for doesn't exist or has moved.",
  "notfound.cta": "back home",
} as const;

export type TranslationKey = keyof typeof en;

const bn: Record<TranslationKey, string> = {
  "nav.experience": "অভিজ্ঞতা",
  "nav.work": "কাজ",
  "nav.writing": "লেখালিখি",
  "nav.contact": "যোগাযোগ",
  "nav.appbar-label": "মূল নেভিগেশন",
  "experience.title": "অভিজ্ঞতা",
  "resume.view": "রিজিউমি দেখুন",
  "work.title": "কাজ",
  "work.view-all": "সব দেখুন",
  "work.card.live": "লাইভ লিংক",
  "work.card.source": "সোর্স কোড",
  "writing.title": "লেখালিখি",
  "writing.view-all": "সব দেখুন",
  "contact.title": "যোগাযোগ",
  "contact.heading": "আসুন একসাথে কাজ করি",
  "contact.bio":
    "আমি বর্তমানে নতুন সুযোগের জন্য উন্মুক্ত। আপনার প্রশ্ন থাকুক বা শুধু হ্যালো বলতে চান, আমি যত তাড়াতাড়ি পারি উত্তর দেওয়ার চেষ্টা করব!",
  "lang.label": "English",
  "theme.dark": "কালো",
  "theme.light": "সাদা",
  "meta.title": "মেহেদী হাসান | সফটওয়্যার ইঞ্জিনিয়ার",
  "meta.description": "মেহেদী হাসান, একজন বাংলাদেশী সফটওয়্যার ইঞ্জিনিয়ার, যিনি ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্টে দক্ষ।",
  "work.meta.title": "কাজ | মেহেদী হাসান",
  "writing.meta.title": "লেখালিখি | মেহেদী হাসান",
  "meta.404-title": "৪০৪ - পৃষ্ঠা পাওয়া যায়নি",
  logo: "মেহেদী_হাসান",
  "hero.title": "মেহেদী হাসান",
  "hero.designation": "সফটওয়্যার ইঞ্জিনিয়ার",
  "hero.biodata":
    "একজন ফুল স্ট্যাক সফটওয়্যার ইঞ্জিনিয়ার, যিনি টাইপস্ক্রিপ্ট দিয়ে প্রোডাকশন মানের ওয়েব অ্যাপ্লিকেশন তৈরি করেন। সরকারি প্রতিষ্ঠান, আন্তর্জাতিক সংস্থা এবং বেসরকারি ক্লায়েন্টদের জন্য বাস্তব সিস্টেম তৈরি ও চালু করেছেন। স্বতন্ত্র ফ্রন্টএন্ড ডেভেলপার হিসেবে শুরু করে ফুল স্ট্যাক ইঞ্জিনিয়ারে পরিণত হয়েছেন, পাশাপাশি কিছু সময় সহকারী প্রজেক্ট ম্যানেজার হিসেবেও কাজ করেছেন। পরিষ্কার কোড, মজবুত মৌলিক জ্ঞান এবং সঠিক কাজের জন্যে সঠিক টুল বেছে নেওয়াকে গুরুত্ব দেন।",
  "hero.primary-btn": "আমার কাজ দেখুন",
  "hero.secondary-btn": "যোগাযোগ করুন",
  "notfound.code": "৪০৪",
  "notfound.title": "পৃষ্ঠা পাওয়া যায়নি",
  "notfound.message": "আপনি যে পৃষ্ঠাটি খুঁজছেন তা বিদ্যমান নেই বা সরিয়ে দেওয়া হয়েছে।",
  "notfound.cta": "মুল পৃষ্ঠায় ফিরুন",
};

export const locale = {
  en,
  bn,
} satisfies Record<Lang, Record<TranslationKey, string>>;
