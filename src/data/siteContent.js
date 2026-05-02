export const siteContent = {
  brandName: "Isabelle Deychev",
  /** 
  leadTitle: "Lead Architect",
  leadSubtitle: "Atmospheric Intelligence", **/
  introBadge: "WELCOME TO MY PORTFOLIO",
  heroTitle: "Hi, I'm Isabelle.",
  heroSubtitle: "AI Full Stack Developer & Machine Learning Engineer.",
  heroDescription:
    "B.Sc. Computer Science student at HIT specializing in architecting end-to-end Machine Learning pipelines and AI-driven web applications.",
  aboutTitle: "About Me",
  aboutDescription:
    "I have a strong foundation in data-oriented development and SQL from Migdal Technologies. Currently, I am mastering Neural Network architectures and deep learning frameworks to build complex predictive models.",
  location: "Holon",
  phone: "+972 53-2323919",
  email: "isabelle.deychev@gmail.com",
  githubProfileUrl: "https://github.com/isabelledey",
  linkedinUrl: "https://www.linkedin.com/in/isabelle-deychev",
  aboutStats: [
    { label: "AI Deployments", value: "15+" },
    { label: "ML Class Performant", value: "Top 5%" },
  ],
};

export const navigationLinks = [
  { href: "#intro", label: "Intro", icon: "dashboard" },
  { href: "#expertise", label: "Expertise", icon: "psychology" },
  { href: "#artifacts", label: "Artifacts", icon: "deployed_code" },
  { href: "#timeline", label: "Timeline", icon: "timeline" },
];

export const socialLinks = [
  {
    href: `mailto:${siteContent.email}`,
    label: "Email",
    icon: "alternate_email",
  },
  {
    href: siteContent.githubProfileUrl,
    label: "GitHub",
    icon: "hub",
    external: true,
  },
  {
    href: siteContent.linkedinUrl,
    label: "LinkedIn",
    icon: "public",
    external: true,
  },
];

export const skillsSections = [
  {
    title: "Deep Learning",
    icon: "psychology",
    skills: [
      { name: "PyTorch", level: "Advanced" },
      { name: "Neural Networks", level: "Advanced" },
      { name: "Deep Machine Learning", level: "Advanced" },
      { name: "TensorFlow", level: "Mid" },
    ],
  },
  {
    title: "Frontend",
    icon: "data_object",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
    ],
  },
  {
    title: "Backend",
    icon: "database",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "MsSQL", level: "Expert" },
      { name: "PostgreSQL", level: "Expert" },
      { name: "Restful APIs", level: "Expert" },
    ],
  },
  {
    title: "Programming Languages",
    icon: "data_object",
    skills: [
      { name: "JavaScript", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Python", level: "Expert" },
      { name: "C", level: "Advanced" },
      { name: "C++", level: "Advanced" },
      { name: "C#", level: "Advanced" },
      { name: "Java", level: "Advanced" },
    ],
  },
  {
    title: "Tools",
    icon: "build",
    skills: [
      { name: "Docker", level: "Mid" },
      { name: "Vercel", level: "Expert" },
      { name: "GitHub Actions", level: "Advanced" },
    ],
  },
];

export const timelineEntries = [
  {
    period: "Jan 2025 - Present",
    role: "AI Web Developer",
    organization: "Freelance Specialist",
    description:
      "Mastering Neural Network architectures and PyTorch to build complex predictive models; engineered end-to-end data pipelines for Kaggle datasets.",
    active: true,
  },
  {
    period: "Feb 2023 - Nov 2024 (1 year 10 months)",
    role: "Digital Forms Developer",
    organization: "Migdal Insurances",
    description:
      "Architected complex digital data collection systems and optimized SQL queries to analyze large datasets while implementing rigorous server-side validation.",
    active: false,
  },
];

export const featuredProjectDefinitions = [
  {
    id: "ai-nutrisnap",
    repoPath: "isabelledey/AI-NutriSnap",
    repoUrl: "https://github.com/isabelledey/AI-NutriSnap",
    fallbackName: "NutriSnap AI",
    fallbackDescription:
      "An intelligent nutritional platform utilizing next-generation AI and computer vision to process food imagery for real-time size estimation and caloric analysis. The application features a persistent history-tracking engine and delivers personalized meal recommendations based on individual user profiles.",
    fallbackTopics: ["Generative AI", "React", "Computer Vision"],
    imageName: "nutrisnap-ai.png",
    imageAlt: "NutriSnap AI preview",
    placeholderClassName: "from-[#25153f] via-[#3f2070] to-[#120d1f]",
  },
  {
    id: "ai-photo-editor",
    repoPath: "isabelledey/ai-photo-editor",
    repoUrl: "https://github.com/isabelledey/ai-photo-editor",
    fallbackName: "AI Photo Editor",
    fallbackDescription:
      "An advanced AI-driven image processing suite designed for high-fidelity photo restoration and enhancement. The platform leverages generative AI models to perform complex pixel-level adjustments, including intelligent noise reduction, detail reconstruction, and automated aesthetic editing, providing professional-grade restoration workflows through an intuitive interface.",
    fallbackTopics: ["Image Processing", "Full Stack", "AI"],
    imageName: "ai-face-enhancer.png",
    imageAlt: "AI Photo Editor preview",
    placeholderClassName: "from-[#120d1f] via-[#4d2c85] to-[#1c1830]",
  },
  {
    id: "it-burns-when-ip",
    repoPath: "isabelledey/it-burns-when-ip",
    repoUrl: "https://github.com/isabelledey/it-burns-when-ip",
    fallbackName: "It Burns When IP",
    fallbackDescription:
      "A computer networks project focused on creating multiple real-time chat environments using HTTP requests. Optimized for low-latency message delivery and scalable network protocols.",
    fallbackTopics: ["Computer Networks", "socket.io", "HTTP"],
    imageName: "it-burns-when-ip.png",
    imageAlt: "It Burns When IP preview",
    placeholderClassName: "from-[#120d1f] via-[#4d2c85] to-[#1c1830]",
  },
  {
    id: "firebase-auth-tracker",
    repoPath: "isabelledey/firebase-auth-tracker",
    repoUrl: "https://github.com/isabelledey/firebase-auth-tracker",
    fallbackName: "Firebase Auth Tracker",
    fallbackDescription:
      "A secure implementation for tracking anonymous sign-in counts using Firebase, optimized for seamless user onboarding and data persistence.",
    fallbackTopics: ["Firebase", "Authentication", "Backend", "Angular"],
    imageName: "firebase-auth-tracker.png",
    imageAlt: "Firebase Auth Tracker preview",
    placeholderClassName: "from-[#120d1f] via-[#4d2c85] to-[#1c1830]",
  },
];
