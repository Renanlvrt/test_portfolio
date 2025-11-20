export interface TimelineEvent {
    date: string;
    title: string;
    organization: string;
    description: string;
    type: "education" | "work" | "project" | "leadership";
}

export const timelineEvents: TimelineEvent[] = [
    {
        date: "Oct 2025 - Present",
        title: "Artificial Heart R&D",
        organization: "Vienna Finals Team",
        description: "Contributing to life-saving TAH systems",
        type: "work",
    },
    {
        date: "Sept 2025 - Present",
        title: "Track & Field Team Captain",
        organization: "Durham University",
        description: "Leading 20 athletes, 20% growth",
        type: "leadership",
    },
    {
        date: "Sept 2025 - Ongoing",
        title: "VR Game Development",
        organization: "IBM Group Project",
        description: "AI-powered immersive learning",
        type: "project",
    },
    {
        date: "July - Sept 2025",
        title: "Robotics Project",
        organization: "Personal",
        description: "Autonomous obstacle avoidance",
        type: "project",
    },
    {
        date: "March 2025 - Present",
        title: "Durjam Executive Committee",
        organization: "Game Dev Society",
        description: "Organizing 200+ events",
        type: "leadership",
    },
    {
        date: "Feb - April 2025",
        title: "Track & Field Web App",
        organization: "Personal Project",
        description: "Full-stack with REST APIs",
        type: "project",
    },
    {
        date: "2024 - 2028",
        title: "MEng Computer Science",
        organization: "Durham University",
        description: "First class honours (79%)",
        type: "education",
    },
    {
        date: "2021 - 2024",
        title: "High School",
        organization: "Louis de Broglie, France",
        description: "Highest honours (Très Bien)",
        type: "education",
    },
];
