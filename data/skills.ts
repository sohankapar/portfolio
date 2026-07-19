export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  category: string;
  icon: "code" | "layout" | "server" | "database" | "wrench";
  skills: Skill[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Programming",
    icon: "code",
    skills: [
      { name: "Java", level: 88 },
      { name: "Python", level: 80 },
      { name: "C", level: 75 },
      { name: "Kotlin", level: 78 },
    ],
  },
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", level: 82 },
      { name: "Next.js", level: 78 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "Firebase", level: 85 },
      { name: "Node.js", level: 70 },
    ],
  },
  {
    category: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", level: 72 },
      { name: "Firestore", level: 84 },
    ],
  },
  {
    category: "Tools",
    icon: "wrench",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 90 },
      { name: "Android Studio", level: 82 },
      { name: "Unity", level: 68 },
    ],
  },
];
