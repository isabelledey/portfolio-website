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
      "Next-gen AI nutrition app leveraging computer vision for instant calorie tracking.",
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
      "High-fidelity image enhancement workflows for restoring and editing photos with AI-assisted tooling.",
    fallbackTopics: ["Image Processing", "Full Stack", "AI"],
    imageName: "ai-face-enhancer.png",
    imageAlt: "AI Photo Editor preview",
    placeholderClassName: "from-[#120d1f] via-[#4d2c85] to-[#1c1830]",
  },
];
