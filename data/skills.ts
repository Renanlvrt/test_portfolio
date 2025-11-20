export interface Skill {
    name: string;
    level: number; // 0-100
    icon?: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: [
            { name: "JavaScript", level: 95 },
            { name: "Python", level: 95 },
            { name: "SQL", level: 85 },
            { name: "C", level: 80 },
            { name: "Assembly", level: 70 },
        ],
    },
    {
        title: "Frameworks & Tools",
        skills: [
            { name: "React / Next.js", level: 90 },
            { name: "Unity / VR", level: 85 },
            { name: "IBM Granite AI", level: 80 },
            { name: "Git / GitHub", level: 90 },
            { name: "RESTful APIs", level: 88 },
        ],
    },
    {
        title: "Domains",
        skills: [
            { name: "Artificial Intelligence", level: 85 },
            { name: "Virtual Reality", level: 82 },
            { name: "Robotics & Hardware", level: 80 },
            { name: "Full-Stack Development", level: 90 },
            { name: "Medical Technology", level: 75 },
        ],
    },
];

export const certifications = [
    {
        title: "First Class Honours",
        organization: "Durham University",
        year: "2024-Present",
    },
    {
        title: "Vienna Finals Qualifier",
        organization: "Artificial Heart Hackathon",
        year: "2025",
    },
    {
        title: "Highest Honours (Très Bien)",
        organization: "French Baccalaureate",
        year: "2024",
    },
    {
        title: "Team Captain",
        organization: "Track & Field",
        year: "2025-Present",
    },
];
