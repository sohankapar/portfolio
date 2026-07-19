export interface Experience {
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role: "Founder & Developer",
    organization: "Earnez",
    period: "2025 — Present",
    location: "Remote",
    summary:
      "Designed, built, and shipped Earnez end-to-end — a gamified rewards Android app with a working monetization and referral loop.",
    highlights: [
      "Implemented Firebase Authentication and Firestore for secure, real-time user data",
      "Integrated AdMob to power a sustainable rewards economy",
      "Built a referral system and live leaderboard to drive organic growth",
      "Designed the wallet and withdrawal flow from scratch",
    ],
    tags: ["Java", "Firebase", "AdMob", "Android Studio"],
  },
  {
    role: "Campus Contributor",
    organization: "DIT University Coding Club",
    period: "2024 — Present",
    location: "Dehradun, India",
    summary:
      "Active member helping run peer coding sessions and hackathon prep focused on Java, DSA, and Android fundamentals.",
    highlights: [
      "Ran beginner-friendly Java and Android workshops for first-year students",
      "Mentored teammates during 24-hour hackathons on scoping and shipping MVPs",
      "Helped organize internal DSA practice sessions ahead of placement season",
    ],
    tags: ["Java", "Mentorship", "DSA"],
  },
];
