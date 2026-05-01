export const siteContent = {
  brandName: "ATMOSPHERIC AI",
  leadTitle: "Lead Architect",
  leadSubtitle: "Atmospheric Intelligence",
  introBadge: "INTRODUCING ISABELLE",
  heroTitle: "Hi, I'm Isabelle.",
  heroSubtitle: "AI Full Stack Developer & Machine Learning Engineer.",
  heroDescription:
    "I transform complex data into scalable, business-driven digital solutions using modern LLMs and deep learning. Building the next generation of atmospheric intelligence.",
  aboutTitle: "Architecture of Mind",
  aboutDescription:
    "I am a B.Sc. Computer Science student at HIT, specializing in ML pipelines and AI-driven web applications. My approach combines the rigor of computer science with the agility of modern full-stack development.",
  location: "Holon",
  phone: "+972 53-2323919",
  email: "isabelle90098@gmail.com",
  githubProfileUrl: "https://github.com/isabelledey",
  linkedinUrl: "https://www.linkedin.com/in/isabelle90098",
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
    title: "AI & ML",
    icon: "psychology",
    skills: [
      { name: "PyTorch", level: "Expert" },
      { name: "Scikit-Learn", level: "Expert" },
      { name: "Hugging Face", level: "Advanced" },
      { name: "TensorFlow", level: "Mid" },
    ],
  },
  {
    title: "Frontend",
    icon: "data_object",
    skills: [
      { name: "React.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
    ],
  },
  {
    title: "Backend",
    icon: "database",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "MsSQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Mid" },
      { name: "FastAPI", level: "Advanced" },
    ],
  },
  {
    title: "Tools",
    icon: "build",
    skills: [
      { name: "Docker", level: "Mid" },
      { name: "Vercel", level: "Expert" },
      { name: "GitHub Actions", level: "Advanced" },
      { name: "Kubernetes", level: "Basic" },
    ],
  },
];

export const timelineEntries = [
  {
    period: "Dec 2024 - Present",
    role: "AI Web Developer",
    organization: "Freelance Specialist",
    description:
      "Architecting bespoke AI integrations for enterprise clients, focusing on vector database implementation and RAG (Retrieval-Augmented Generation) pipelines.",
    active: true,
  },
  {
    period: "2022 - 2023",
    role: "Digital Forms Developer",
    organization: "Migdal Insurance",
    description:
      "Streamlined insurance application workflows by developing dynamic, data-driven web forms, reducing customer processing time by 40%.",
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
    fallbackSubtitle: "GitHub repository",
    imageName: "nutrisnap-ai.png",
  },
  {
    id: "ai-photo-editor",
    repoPath: "isabelledey/ai-photo-editor",
    repoUrl: "https://github.com/isabelledey/ai-photo-editor",
    fallbackName: "AI Photo Editor",
    fallbackDescription:
      "High-fidelity image enhancement workflows for restoring and editing photos with AI-assisted tooling.",
    fallbackTopics: ["Image Processing", "Full Stack", "AI"],
    fallbackSubtitle: "GitHub repository",
    imageName: "ai-face-enhancer.png",
  },
];
