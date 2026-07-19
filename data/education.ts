export const EDUCATION = {
  institution: "DIT University",
  degree: "Bachelor of Technology",
  field: "Computer Science Engineering",
  specialization: ["AI", "Machine Learning", "Robotics"],
  graduation: "2027",
  location: "Dehradun, Uttarakhand, India",
};

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
  logoInitials: string;
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Database Management Essentials",
    issuer: "coursera( University of Colorado System )",
    date: "2025",
    url: "https://coursera.org/share/346ff25849bd79bf0d1010c6691ea160",
    logoInitials: "DME",
  },
  {
    title: "Linux Fundamentals",
    issuer: "coursera( LearnQuest )",
    date: "2025",
    url: "https://coursera.org/share/87d19bc2c8e2c8e2e8c1dce2e06a4f81",
    logoInitials: "LF",
  }
];
