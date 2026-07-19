export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  current?: boolean;
}

export const TIMELINE: TimelineItem[] = [
  {
    year: "2023",
    title: "Joined DIT University",
    description:
      "Started my B.Tech in Computer Science Engineering, diving into data structures, algorithms, and the fundamentals of programming.",
  },
  {
    year: "2024",
    title: "Started Android Development",
    description:
      "Picked up Java and Android Studio, building my first apps and learning how mobile products are designed, tested, and shipped.",
  },
  {
    year: "2025",
    title: "Built Earnez",
    description:
      "Designed and developed Earnez, a gamified rewards app with Firebase auth, AdMob monetization, referrals, and a live leaderboard.",
  },
  {
    year: "2026",
    title: "Deepening AI, DSA & Unity",
    description:
      "Currently sharpening my Java DSA fundamentals while exploring machine learning and building interactive experiences in Unity.",
    current: true,
  },
  {
    year: "2027",
    title: "Graduation",
    description:
      "Set to graduate with a B.Tech in Computer Science Engineering, specializing in AI, Machine Learning, and Robotics.",
  },
];
