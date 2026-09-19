export type Lang = "en" | "bn";

const en = {
  "nav.experience": "experience",
  "nav.work": "work",
  "nav.writing": "writing",
  "nav.contact": "contact",
  "nav.appbar-label": "main navigation",
  "experience.title": "experience",
  "resume.view": "view resume",
  "lang.label": "বাংলা",
  "theme.dark": "dark",
  "theme.light": "light",
  "meta.title": "Mehedi Hasan | Software Engineer",
  "meta.description": "Mehedi Hasan, a Software Engineer from Bangladesh specializing in Full-Stack Web Development.",
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
  "lang.label": "English",
  "theme.dark": "কালো",
  "theme.light": "সাদা",
  "meta.title": "মেহেদী হাসান | সফটওয়্যার ইঞ্জিনিয়ার",
  "meta.description": "মেহেদী হাসান, একজন বাংলাদেশী সফটওয়্যার ইঞ্জিনিয়ার, যিনি ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্টে দক্ষ।",
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
