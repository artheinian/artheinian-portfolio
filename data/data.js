export const SKILLS = {
    Languages: [
        { name: "C#" }, { name: "JavaScript" }, { name: "TypeScript" },
        { name: "Python" }, { name: "Dart" }, { name: "Java" },
        { name: "SQL" }, { name: "HTML/CSS" },
    ],
    "Frameworks and Libraries": [
        { name: "React / Next.js" }, { name: "ASP.NET Core" }, { name: "Flutter" },
        { name: "Django" }, { name: "Entity Framework" }, { name: "Node.js" },
        { name: "Blazor" }, { name: "Bootstrap" }, { name: "Tailwind" },
        { name: "Material UI" }, { name: "xUnit" },
    ],
    "Tools & DBs": [
        { name: "Git / GitHub" }, { name: "PostgreSQL" }, { name: "MySQL" },
        { name: "Figma" }, { name: "Postman" }, { name: "Android Studio" },
        { name: "Visual Studio" }, { name: "Visual Studio Code" }, { name: "LINQ" },
        { name: "Apache Tomcat" }, { name: "IntelliJ IDEA" }, { name: "VMWare" },
        { name: "Firebase" },
    ],
    "General": [
        { name: "Customer Service" }, { name: "Communication" }, { name: "Teamwork" },
        { name: "Time Management" }, { name: "Problem Solving" }, { name: "Multitasking" },
        { name: "Adaptability" }, { name: "Working Under Pressure" },
    ],
};

export const PROJECTS = [
    {
        id: "trustbix", title: "TrustBix", tag: "Capstone", year: "Sep–Dec 2025", accent: "#1A99BB",
        tech: ["Python", "Django", "SQLite", "MySQL", "CSS"],
        summary: "AI annotation tool with canvas-based UI",
        description: "Capstone project — an AI training data platform with a fully interactive canvas for labelling camera imagery and measuring annotation quality.",
        bullets: [
            "Contributed to YOLO-based computer vision workflows by improving annotation data quality and supporting model training preparation",
            "Designed a mode-aware annotation toolbar with Cursor, Draw, Move, and Delete functionality, including dynamic resize handles for more precise bounding box editing",
            "Improved training data pipelines to strengthen annotation consistency and help raise model-supporting data quality to approximately 80%",
            "Developed label aggregation utilities that computed snapshot-level health scores, enabling clearer analysis of annotated image datasets"
        ],
        github: null,
        note: "Under NDA - no public source code or internal application screens can be shared",
        preview: "dashboard",
        previewScreens: [
            { label: "Canvas Editor", icon: "🖊️", desc: "Draw & annotate camera frames" },
            { label: "Health Score", icon: "📊", desc: "Annotation quality: 80%" },
        ],
    },
    {
        id: "swipify", title: "Swipify", tag: "Mobile App", year: "Sep 2025", accent: "#1DB954",
        tech: ["Flutter", "Dart", "OAuth2.0", "Spotify API"],
        summary: "Tinder-style Spotify playlist manager",
        description: "A Flutter mobile app letting users swipe through Spotify tracks to manage playlists. Integrated OAuth2.0 authentication with real API scope handling and a responsive swipe UI.",
        bullets: [
            "Built responsive swipe interactions using Flutter gesture detectors",
            "Integrated Spotify Web API with OAuth2.0 for track metadata & playlist CRUD",
            "Respected API rate limits and scope constraints in a real production environment",
        ],
        github: "https://github.com/artheinian/swipify",
        preview: "gallery",
        previewImages: [
            "/images/swipify.png",
            "/images/swipify-home-page.png",
            "/images/swipify-swiping-page.png"
        ]
    },
    {
        id: "pomodoro", title: "Pomodoro Timer", tag: "Hackathon - HackED", year: "Feb 2025", accent: "#FF6B6B",
        tech: ["Next.js", "JavaScript", "Material-UI", "Figma"],
        summary: "Focus timer built in a hackathon sprint",
        description: "Accurate Pomodoro timer with smooth UX, built collaboratively during a hackathon. Designed in Figma, implemented with Next.js and Material-UI, focused on accessibility.",
        bullets: [
            "Implemented precise JavaScript timing loop with pause/resume/reset state",
            "Collaborated via Git with merge conflict resolution under time pressure",
            "Designed and implemented full UI from Figma wireframes to production",
        ],
        github: "https://github.com/u-iDaniel/pomodoro",
        preview: "image",
        previewImage: "/images/pomoai.png",
    },
    {
        id: "cafe-log", title: "Cafe-Log", tag: "Web app", year: "Jan 2026 - Present", accent: "#c4a84c",
        tech: ["Javascript", "Next.JS", "React", "Tailwind", "HTML", "CSS"],
        summary: "Local café  drink tracker ",
        description: "Personal café drink tracking app where users can save and organize drinks they have tried, rate them, write notes, and explore cafés.",
        bullets: [
            "Built a full-stack web application for tracking café drinks, allowing users to log and manage entries with café details, ratings, notes, and categories",
            "Implemented authenticated, user-specific data management with persistent storage so each user can securely manage their own drink entries",
            "Planned scalable feature expansions including café location discovery, map-based navigation, and optional community sharing for reviews and recommendations"
        ],
        github: "https://github.com/artheinian/cafe-log",
        preview: "gallery",
        previewImages: [
            "/images/cafe-login.png",
            "/images/cafe-log-homepage.png"
        ]
    },
];

export const TIMELINE = [
    { year: "Jan 2024", event: "Started DMIT at NAIT", type: "edu" },
    { year: "Feb 2025", event: "Built Pomodoro Timer at Hackathon", type: "project" },
    { year: "Sep 2025", event: "Made Swipify (Flutter + Spotify)", type: "project" },
    { year: "Sep 2025", event: "Began TrustBix Capstone", type: "work" },
    { year: "Dec 2025", event: "Graduated — DMIT Computer Software Development", type: "edu" },
];

export const COURSES = [
    "Web-Application Design", "System Foundations", "Database Management",
    "Front-End Development", "Application Development", "Mobile App Development",
    "Business Systems", "Advanced Communication", "Enterprise Application Development",
    "Project Essentials", "Business Intelligence",
];

export const NAV_ITEMS = ["about", "skills", "experience", "projects", "contact"];
