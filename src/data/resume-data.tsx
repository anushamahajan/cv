import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Anusha Mahajan",
  initials: "AM",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  about: "Curious human who builds, breaks, and rebuilds things to create data-driven products that users actually love.",
  summary:
    "I build products because I like seeing ideas turn into things people actually use. From AI automations to scrappy MVPs, I’ve worked on defining KPIs, running experiments, mapping user funnels, setting up analytics, and figuring out why users do what they do. I’ve learned that great products aren’t built through big launches but through small iterations, feature prioritization, feedback loops, quick tests, and endless curiosity. What keeps me going is that mix of data, instinct, and the thrill of making something a little better every single time.",
  avatarUrl: "https://avatars.githubusercontent.com/u/116106599",
  personalWebsiteUrl: "https://anushamahajan.github.io/Portfolio/",
  contact: {
    email: "anushamahajan2304@gmail.com",
    tel: "+91 9873848895",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/anushamahajan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anushamahajan",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Indira Gandhi Delhi Technical University for Women (IGDTUW)",
      degree: "Bachelor of Technology, Mechanical and Automation Engineering",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Hyperleap AI",
      link: "https://hyperleap.ai",
      badges: ["Remote"],
      title: "Product Growth Intern",
      start: "June 2025",
      end: "Present",
      description:
        "Worked on AI agent workflows, automation pipelines, onboarding flows, user funnels, KPI dashboards, and GA setup. Improved reporting efficiency by 70% through automated dashboards and feedback-driven iteration. Managed inbound funnels, PRDs, case studies, and marketing website analytics while experimenting with 10,000+ AI tools across n8n, Zapier, and custom LLM stacks.",
    },
    {
      company: "Prana AI",
      link: "https://prana-ai.com/",
      badges: ["Remote"],
      title: "Product Management Intern",
      start: "March 2025",
      end: "May 2025",
      description:
        "Built a healthtech MVP with a facial wellness scanner that delivers accurate metrics (BP, HbA1c, heart rate) in under a minute. Handled user testing, pilot tracking, feature prioritization, documentation, and third-party integrations. Collaborated cross-functionally to define success KPIs and optimize workflows — improving deployment efficiency by 25%.",
    },
    {
      company: "Defence Research and Development Organisation (DRDO)",
      badges: ["Onsite"],
      title: "Research Intern",
      start: "June 2024",
      end: "August 2024",
      description:
        "Worked on research around the airdropping of ammunition systems, exploring parameters that impact accuracy and efficiency. Conducted detailed root cause analysis to identify process gaps and performance limits. Proposed methods to improve reliability by 25% and reduce material wastage by 30%.",
    },
  ],
  skills: [
    // Core Product Skills
    "Product Management",
    "User Funnels",
    "Feature Prioritization",
    "A/B Testing",
    "Agile Development",
  
    // Analytics & Data
    "Data Analytics",
    "SQL",
    "Python (pandas, numpy, matplotlib)",
    "Google Analytics",
    "Mixpanel",
    "Power BI",
    "Tableau",
    "SPSS",
  
    // Automation & AI
    "Workflow Automation",
    "Prompt Engineering",
    "n8n",
    "Zapier",
    "Airtable",
    "APIs and Integrations",
    "GenAI Tools",
  
    // Design & Web
    "HTML/CSS/Js",
    "Wireframing",

    // Project & Collaboration Tools
    "Jira",
    "Notion",
    "Trello",
    "Confluence",
    "ClickUp",
  
  
  ],
  
  projects: [
    {
      title: "AltHealth",
      techStack: ["Next.js", "MongoDB", "Firebase", "Analytics", "User Funnels"],
      description: "AI tool that scans product labels and explains ingredients with safer alternatives.",
      link: { label: "AltHealth Demo", href: "https://www.youtube.com/shorts/tJ_MSf7aPXQ" },
    },
    {
      title: "QuikPlanr",
      techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
      description: "Turns quick ideas into complete, data-backed product plans within minutes.",
      link: { label: "QuikPlanr GitHub", href: "https://quikplanr.onrender.com/" },
    },
    {
      title: "Virtus",
      techStack: ["Figma", "Generative AI", "Wireframing", "KPI Dashboards"],
      description: "All-in-one platform for managing and strategizing financial planning.",
      link: { label: "Virtus", href: "https://www.figma.com/proto/FawYUhpxipm08O3LsVWlmR/Untitled--Copy-?node-id=3-422&node-type=canvas&t=iIky2zKzPpHKGyxt-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
    },
    {
      title: "AssessAI",
      techStack: ["Figma", "Wireframing", "Prompt Engineering", "ML Mapping"],
      description: "Tracks learning patterns and suggests focus areas to improve student performance.",
      link: { label: "AssessAI", href: "https://www.figma.com/proto/dKyzDFw2tYaDijvl5J1jG2/SIH--Copy-?node-id=2-12291&node-type=canvas&t=aUtIIySN1hUqwfp2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A12291&show-proto-sidebar=1" },
    },
    {
      title: "GenMart",
      techStack: ["Figma", "GenAi", "Prompting"," Personalization Algos"],
      description: "Personalized shopping assistant offering smart, tailored product recommendations.",
      link: { label: "Genmart", href: "https://www.figma.com/design/5VwoVC0K8GrF1dRwIIBC6u/Untitled?node-id=0-1&t=iIJWMfkD8SfzZCbb-1" },
    },
    {
      title: "RapiDoc",
      techStack: ["Next.js", "Supabase", "APIs", "Analytics"],
      description: "Real-time health service tracker showing nearby hospitals and availability.",
      link: { label: "Rapidoc", href: "https://rapidoc.netlify.app/" },
    },
    {
      title: "CB Hospitality",
      techStack: ["Next.js", "TypeScript", "SEO"],
      description: "Portfolio website built to improve engagement and conversions for a culinary brand.",
      link: { href: "https://www.cbhospitality.org/" },
    },
    {
      title: "Fresources",
      techStack: ["Next.js", "MS CLarity", "Google Analytics", "Typescript"],
      description: "Collaborative workspace combining docs, notes, and real-time editing for students.",
      logo: BarepapersLogo,
      link: { href: "https://fresources.tech/" },
    },
    {
      title: "Broward Mobile Notary",
      techStack: ["Next.js", "TypeScript"],
      description: "Responsive brand website improving visibility and user engagement for a service firm.",
      logo: YearProgressLogo,
      link: { href: "https://www.browardexpressnotary.com/" },
    },
  ]
  
  
} as const;
