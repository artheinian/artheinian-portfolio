export const SKILLS = {
    Languages: [
        { name: "C#", level: 90 }, { name: "JavaScript", level: 88 }, { name: "TypeScript", level: 80 },
        { name: "Python", level: 78 }, { name: "Dart", level: 82 }, { name: "Java", level: 72 },
        { name: "SQL", level: 85 }, { name: "HTML/CSS", level: 92 },
    ],
    Frameworks: [
        { name: "React / Next.js", level: 88 }, { name: "ASP.NET Core", level: 85 }, { name: "Flutter", level: 83 },
        { name: "Django", level: 75 }, { name: "Entity Framework", level: 80 }, { name: "Node.js", level: 76 },
    ],
    "Tools & DBs": [
        { name: "Git / GitHub", level: 92 }, { name: "PostgreSQL", level: 82 }, { name: "MySQL", level: 84 },
        { name: "Figma", level: 78 }, { name: "Postman", level: 85 }, { name: "Android Studio", level: 70 },
    ],
};

export const PROJECTS = [
    {
        id: "trustbix", title: "TrustBix", tag: "Capstone", year: "Sep–Dec 2025", accent: "#1A99BB",
        tech: ["Python", "Django", "SQLite", "MySQL", "CSS"],
        summary: "AI annotation tool with canvas-based UI",
        description: "Capstone project — an AI training data platform with a fully interactive canvas for labelling camera imagery and measuring annotation quality.",
        bullets: [
            "Designed mode-aware toolbar: Cursor / Draw / Move / Delete with dynamic resize handles",
            "Contributed to training data pipelines improving AI annotation accuracy to ~80%",
            "Built label aggregation utilities producing snapshot-level health scores",
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
        github: "https://github.com/artheinian",
        preview: "phone",
        previewScreens: [
            { label: "Now Playing", icon: "🎵", desc: "Swipe left to skip, right to save" },
            { label: "My Playlist", icon: "📋", desc: "3 tracks saved" },
        ],
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
        id: "cafe-log", title: "Cafe-Log", tag: "Web app", year: "Jan-Present 2026", accent: "#c4a84c",
        tech: ["Javascript", "Next.JS", "React", "Tailwind", "HTML", "CSS"],
        summary: "Local café  drink tracker ",
        description: "Personal café drink tracking app where users can save and organize drinks they have tried, rate them, write notes, and explore cafés.",
        bullets: [
            "Built a drink logging system where users can save drink name, café name, rating, visit date, and personal notes",
            "Designed filtering and sorting features so users can quickly browse entries by date, rating, or café",
            "Planned optional local café discovery and review-sharing features to expand the app beyond personal trackin",
        ],
        github: "https://github.com/artheinian/cafe-log",
        preview: "dashboard",
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
    "Project Essentials",
];

export const NAV_ITEMS = ["about", "skills", "experience", "projects", "contact"];
