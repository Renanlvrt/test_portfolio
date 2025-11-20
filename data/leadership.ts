export interface LeadershipExperience {
    title: string;
    organization: string;
    impact: string;
    description: string;
    metrics: Array<{
        label: string;
        value: string;
    }>;
    image: string;
}

export const leadershipExperiences: LeadershipExperience[] = [
    {
        title: "Artificial Heart R&D",
        organization: "40-Member Engineering Team",
        impact: "Potential to save millions of lives globally",
        description:
            "Selected for Vienna Finals. Contributing to critical R&D initiatives including design, prototyping, and testing of Total Artificial Heart systems.",
        metrics: [
            { label: "Team Size", value: "40" },
            { label: "Global Impact", value: "64M+ patients" },
            { label: "Achievement", value: "Vienna Finals" },
        ],
        image: "/Images/heart-team.jpg",
    },
    {
        title: "Track & Field Team Captain",
        organization: "Durham University BUCS",
        impact: "20% growth in team participation",
        description:
            "Leading 20 high-level athletes competing across England. Responsible for training coordination, team morale, recruitment, and competition strategy.",
        metrics: [
            { label: "Athletes Led", value: "20" },
            { label: "Growth", value: "+20%" },
            { label: "Competitions", value: "Multiple" },
        ],
        image: "/Images/track-field.jpg",
    },
    {
        title: "Durjam Executive Committee",
        organization: "Game Development Society",
        impact: "200+ participants in annual hackathon",
        description:
            "Organizing large-scale community events and enhancing student involvement in game development.",
        metrics: [
            { label: "Participants", value: "200+" },
            { label: "Events", value: "Yearly Hackathon" },
            { label: "Impact", value: "Community Growth" },
        ],
        image: "/Images/durjam.jpg",
    },
];
