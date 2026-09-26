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
        "Replace this with one line about a backend or platform system you built or owned, and lead with the outcome.",
        "Replace this with one line about UI or design-system work, and mention how many screens or teams it served.",
        "Replace this with one line about tooling, CI, or releases, and say what got faster as a result.",
        "Replace this with one line about reviews, onboarding, or mentoring, and how many juniors it covered.",
      ],
      bn: [
        "এখানে আপনার তৈরি বা দায়িত্বে থাকা ব্যাকএন্ড বা প্ল্যাটফর্ম সিস্টেমের এক লাইন লিখুন, আর শুরুতে ফলাফলটা দিন।",
        "এখানে ইন্টারফেস বা ডিজাইন সিস্টেমের কাজের এক লাইন লিখুন, আর কতগুলো স্ক্রিন বা টিম ব্যবহার করেছে তা বলুন।",
        "এখানে টুলিং, সিআই বা রিলিজের কাজের এক লাইন লিখুন, আর ফলে কত দ্রুত হয়েছে তা বলুন।",
        "এখানে কোড রিভিউ, অনবোর্ডিং বা মেন্টরিংয়ের এক লাইন লিখুন, আর কতজন জুনিয়রকে ঢুকিয়েছেন তা বলুন।",
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
        "Replace this with one line about the UI work you shipped in this role, and who ended up using it.",
        "Replace this with one line about APIs, data, or integrations you worked on, and the scale involved.",
        "Replace this with one line about reviews or pairing you did here, and what changed as a result.",
      ],
      bn: [
        "এখানে এই পদে ডেলিভারি করা ইন্টারফেস কাজের এক লাইন লিখুন, আর শেষে কারা ব্যবহার করেছে তা বলুন।",
        "এখানে এপিআই, ডেটা বা ইন্টিগ্রেশন নিয়ে কাজের এক লাইন লিখুন, আর সেখানে স্কেল কেমন ছিল তা বলুন।",
        "এখানে রিভিউ বা পেয়ারিংয়ের এক লাইন লিখুন, আর ফলে কী বদলেছিল তা বলুন।",
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
        "Replace this with one line about what you built during this internship and who used it.",
        "Replace this with one line about small tooling or scripts you wrote, and what manual work it removed.",
      ],
      bn: [
        "এখানে এই ইন্টার্নশিপে যা তৈরি করেছেন তার এক লাইন লিখুন, আর কারা ব্যবহার করেছে তা বলুন।",
        "এখানে ছোট টুল বা স্ক্রিপ্টের এক লাইন লিখুন, আর কোন ম্যানুয়াল কাজটি বাদ পড়েছে তা বলুন।",
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
