export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  stack: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  comingSoon?: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "earnez",
    title: "Earnez",
    description:
      "A gamified rewards application where users complete quizzes and challenges to earn real wallet balance. Built with Firebase Authentication, AdMob ad integration, a referral engine, and a live leaderboard to keep engagement high.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
    tags: ["Android", "Featured", "Firebase"],
    stack: ["Java", "Firebase Auth", "Firestore", "AdMob", "Android Studio"],
    github: "https://github.com/sohankapar/earnez",
    demo: "#",
    featured: true,
  },
  {
    slug: "coming-soon-ml",
    title: "ML Study Companion",
    description:
      "An upcoming machine learning powered app to help students track study sessions and get personalized topic recommendations. In active development.",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop",
    tags: ["AI/ML", "In Progress"],
    stack: ["Python", "TensorFlow", "React"],
    featured: false,
    comingSoon: true,
  },
  {
    slug: "coming-soon-unity",
    title: "Unity Game Prototype",
    description:
      "A 2D puzzle-platformer prototype exploring physics-based mechanics and procedural level generation, built while learning Unity and C#.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Game Dev", "In Progress"],
    stack: ["Unity", "C#"],
    featured: false,
    comingSoon: true,
  },
];
