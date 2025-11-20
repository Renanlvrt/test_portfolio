export interface Project {
    id: string;
    title: string;
    tagline: string;
    shortDescription: string;
    fullDescription: string;
    featured: boolean;
    category: "Medical Tech" | "AI/VR" | "Robotics" | "Web Dev" | "Research";
    image: string;
    technologies: string[];
    teamSize: string;
    year: string;
    impact: string;
    links: {
        github?: string;
        live?: string;
        caseStudy?: string;
    };
    gallery: string[];
}

export const projects: Project[] = [
    {
        id: "artificial-heart",
        title: "Artificial Heart R&D",
        tagline: "Vienna Finals Qualifier - Saving Lives Through Engineering",
        shortDescription:
            "Contributing to Total Artificial Heart systems for 64M heart failure patients globally",
        featured: true,
        category: "Medical Tech",
        image: "/Images/artificial-heart.jpg",
        technologies: ["CAD", "Simulation", "Prototyping", "Medical Engineering"],
        teamSize: "40-member team",
        year: "2025",
        impact: "Lives Saved",
        links: {
            caseStudy: "#",
        },
        fullDescription: `**Problem**: Heart failure affects 64 million people globally, with limited treatment options.

**Solution**: As part of a 40-member engineering team, I contributed to the design, prototyping, and testing of Total Artificial Heart (TAH) systems. Our work advanced through multiple phases to qualify for the Vienna Finals hackathon.

**My Role**:
- Participated in critical R&D initiatives
- Supported design and prototyping phases
- Contributed to testing protocols for TAH systems
- Collaborated across multidisciplinary teams (mechanical, electrical, medical)

**Impact**: This technology has the potential to extend the lives of heart failure patients by years, offering hope where traditional treatments fall short.

**Key Achievements**:
- Selected for Vienna Finals from hundreds of teams
- Contributed to prototype iterations
- Collaborated with medical professionals to ensure patient safety`,
        gallery: [],
    },
    {
        id: "vr-ibm",
        title: "VR Game with IBM AI Integration",
        tagline: "Adaptive Learning Through Immersive Technology",
        shortDescription:
            "VR application with IBM Granite AI for personalized educational experiences",
        featured: true,
        category: "AI/VR",
        image: "/Images/vr-game.jpg",
        technologies: ["Unity", "VR", "IBM Granite AI", "C#", "API Integration"],
        teamSize: "5-person team",
        year: "2025",
        impact: "User Engagement",
        links: {
            github: "https://github.com/renan-lavirotte",
        },
        fullDescription: `**Problem**: Traditional learning experiences lack engagement and personalization.

**Solution**: Orchestrated a complex VR application combining design, mechanics, and AI integration to deliver interactive progression and personalized learning pathways.

**Technical Implementation**:
- Integrated IBM Granite AI API for real-time adaptive feedback
- Implemented conditional reasoning to guide players through interactive quizzes
- Integrated 4 IBM SkillsBuild AI modules
- Created skill progression challenges with dynamic difficulty adjustment

**My Role**: Technical lead and AI integration specialist

**Impact**: Created immersive educational experience that adapts to individual learning styles and pace.`,
        gallery: [],
    },
    {
        id: "robotics",
        title: "Autonomous Obstacle-Avoidance Robot",
        tagline: "Self-Navigating System with Real-Time Scanning",
        shortDescription:
            "Python-powered robot with 180° sensor scanning and obstacle avoidance",
        featured: true,
        category: "Robotics",
        image: "/Images/robot.jpg",
        technologies: ["Python", "Servo Motors", "Sensors", "Arduino"],
        teamSize: "Personal Project",
        year: "2025",
        impact: "50+ Tests",
        links: {
            github: "https://github.com/renan-lavirotte",
        },
        fullDescription: `**Problem**: Creating autonomous navigation in unpredictable environments.

**Solution**: Built an autonomous robot capable of obstacle avoidance using sensors and Python, conducting over 50 tests to optimize performance and reliability.

**Technical Details**:
- Integrated servo motor-controlled sensors for real-time scanning
- 180-degree field scanning for environmental awareness
- Improved movement precision through iterative testing
- Implemented decision algorithms for optimal path selection

**Key Learnings**: Sensor calibration, real-time processing, hardware-software integration`,
        gallery: [],
    },
    {
        id: "track-field-app",
        title: "Track & Field Web Application",
        tagline: "Real-Time Athlete Data Platform",
        shortDescription:
            "Full-stack app with RESTful APIs for athlete search and data retrieval",
        featured: false,
        category: "Web Dev",
        image: "/Images/track-app.jpg",
        technologies: ["JavaScript", "REST API", "Node.js", "Testing"],
        teamSize: "Personal Project",
        year: "2025",
        impact: "85% Bug Reduction",
        links: {
            github: "https://github.com/renan-lavirotte",
        },
        fullDescription: `**Problem**: Athletes and coaches lacked easy access to real-time competition data.

**Solution**: Developed a full-stack Track & Field web app with JavaScript and RESTful APIs, enabling advanced athlete/sport search and real-time data retrieval across mobile and laptop devices.

**Technical Implementation**:
- Designed robust GET/POST requests
- Implemented systematic API testing
- Reduced server-side bugs by 85%
- Supported secure user submissions
- Responsive design for mobile and desktop

**Impact**: Used by team members for quick access to athlete statistics and schedules`,
        gallery: [],
    },
    {
        id: "discrete-math",
        title: "Discrete Mathematics Research",
        tagline: "Mathematical Partitions Theorem Proofs",
        shortDescription:
            "Team research on mathematical partitions with published findings",
        featured: false,
        category: "Research",
        image: "/Images/math-research.jpg",
        technologies: ["Mathematical Analysis", "LaTeX", "Research Methods"],
        teamSize: "5 mathematicians",
        year: "2025",
        impact: "10-Page Report",
        links: {},
        fullDescription: `**Problem**: Unproven theorems in mathematical partition theory.

**Solution**: Conducted collaborative research project on mathematical partitions, proving key theorems and deriving new formulas through rigorous analysis.

**Research Process**:
- Literature review of existing partition theory
- Collaborative proof development
- Formula derivation and validation
- Peer review and iteration

**Output**: Produced detailed 10-page report documenting proof strategies and outcomes, illustrating strong research capabilities while adhering to strict timelines.

**Skills Developed**: Research methodology, collaborative problem-solving, technical writing`,
        gallery: [],
    },
];
