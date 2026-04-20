export type CapabilityGroup = {
  title: string;
  status: "Active" | "Deployed" | "Processing" | "Operational";
  items: string[];
};

export type Deployment = {
  name: string;
  status: "Deployed" | "Operational" | "Processing";
  summary: string;
  pipeline: string;
  impact: string;
  link: string;
  image: string;
  featured?: boolean;
};

export const portfolioData = {
  name: "Gnanendra Naidu",
  role: "AI Systems Engineer / Intelligent Systems Operator",
  hero: {
    signal: "Signal Received",
    lead: "Initializing AI systems profile for Gnanendra Naidu.",
    summary:
      "AI & ML enthusiast from India focused on solution-building across deep learning, large language models, and applied system design.",
    statuses: ["Deployment active", "Node operational", "Processing pipeline online"],
    links: {
      resume:
        "https://drive.google.com/file/d/1cvivQp4jxauRiJuqHFA27bQHAhfMZ4Rl/view?usp=sharing",
      github: "https://github.com/gnanendranaidun",
      linkedin: "https://linkedin.com/in/gnanendranaidun",
      twitter: "https://x.com/GnanendraN87881",
      discord: "https://discord.gg/h7TzC7bc",
    },
  },
  overview: {
    title: "System Overview",
    description:
      "Currently pursuing B.E. in Artificial Intelligence & Machine Learning at RV College of Engineering, Bengaluru, while building practical AI systems and exploring emerging technologies.",
    bullets: [
      "Skilled in deep learning, pose estimation, and CNN-based models",
      "Focused on problem-solving with 240+ solved challenges on LeetCode (Global Rank: 438,265)",
      "Currently working on human height estimation using multimodal input",
      "Exploring Quantum Machine Learning and Quantum Cryptography",
      "Brings collaborative leadership and system-first thinking",
    ],
  },
  capabilities: [
    {
      title: "AI Systems",
      status: "Active",
      items: [
        "Deep learning model development",
        "Pose estimation and CNN-based pipelines",
        "Large language model exploration",
      ],
    },
    {
      title: "Backend / Infrastructure",
      status: "Operational",
      items: [
        "Solution-oriented software development",
        "System ecosystem design for applied use cases",
        "Collaborative delivery across project teams",
      ],
    },
    {
      title: "Data & ML",
      status: "Processing",
      items: [
        "Machine learning experimentation and validation",
        "Energy audit estimation and analysis workflows (DataVerse)",
        "Multimodal input research for human height estimation",
      ],
    },
    {
      title: "Tools & Platforms",
      status: "Active",
      items: [
        "LeetCode problem-solving practice (240+ solved)",
        "Ongoing exploration of emerging technologies",
        "Research interest in quantum technologies",
      ],
    },
  ] as CapabilityGroup[],
  deployments: [
    {
      name: "Crescere",
      status: "Deployed",
      summary:
        "Built Crescere as an ecosystem for child health monitoring with Skids.health.",
      pipeline:
        "Signal received from child-health workflows → structured monitoring ecosystem → collaborative delivery through GitHub.",
      impact: "Represents applied, real-world health monitoring system development.",
      link: "https://github.com/gnanendranaidun/Crescere_test.git",
      image: "/images/Screenshot 2025-02-12 at 22.14.09.png",
      featured: true,
    },
    {
      name: "Dynamic Object Recognition",
      status: "Operational",
      summary:
        "Built a dynamic object recognition system that detects objects and triggers commands.",
      pipeline:
        "Visual input stream → object detection process → command output action.",
      impact:
        "Showcases real-time computer vision processing and response behavior.",
      link: "https://github.com/gnanendranaidun/Dynamic-object-recognition",
      image: "/images/object detection.jpeg",
      featured: true,
    },
    {
      name: "Civic Issue Reporting Portal",
      status: "Deployed",
      summary:
        "Designed and developed a civic issue reporting portal as part of design thinking work.",
      pipeline:
        "Citizen issue input → reporting workflow → project collaboration via open repository.",
      impact: "Applies system design to real civic reporting use cases.",
      link: "https://github.com/AnjKal/Pothole_DTL",
      image: "/images/logo copy.png",
    },
    {
      name: "Visible SpectroPhotometer",
      status: "Operational",
      summary:
        "Built a visible spectrophotometer prototype that uses visible light to detect solutions.",
      pipeline:
        "Visible-light sensing → detection process → measurable prototype output.",
      impact: "Demonstrates hardware-linked sensing and analytical prototyping.",
      link: "https://github.com/gnanendranaidun/Visible-Spectrophotometer",
      image: "/images/Screenshot 2025-02-12 at 22.22.52.png",
    },
    {
      name: "Qubit Rotational Explorer",
      status: "Processing",
      summary: "Built an interactive system for visualizing qubit rotational states.",
      pipeline:
        "Quantum-state parameters → rotational state visualization → exploratory interpretation.",
      impact:
        "Supports quantum-focused learning and system-level understanding.",
      link: "https://github.com/gnanendranaidun/qubit_rotational_explorer",
      image: "/images/Qubit project.jpeg",
    },
  ] as Deployment[],
  fieldOperations: [
    {
      title: "Crescere with Skids.health",
      detail:
        "Developed a child health monitoring ecosystem in collaboration with Skids.health.",
      status: "Deployment active",
    },
    {
      title: "Academic AI/ML Operations",
      detail:
        "Pursuing B.E. in Artificial Intelligence & Machine Learning at RV College of Engineering, Bengaluru.",
      status: "Node operational",
    },
    {
      title: "Multimodal Research Track",
      detail:
        "Currently building a human height estimation system using multimodal input.",
      status: "Processing pipeline",
    },
  ],
  logs: [
    {
      event: "Hackathon Winner",
      detail: "Won 3rd place in a national-level coding competition.",
      link: "https://www.linkedin.com/posts/gnanendranaidun_minedhackathon2025-hackathon-ai-activity-7292015024905035777-UTIb?utm_source=share&utm_medium=member_desktop",
    },
    {
      event: "DataVerse, BMSCE College",
      detail:
        "Won 3rd place in a 24-hour machine learning competition (Kaggle) for energy audit estimation and analysis.",
      link: "#",
    },
    {
      event: "LeetCode Rating",
      detail: "Maximum contest rating of 1460+ and top 38% globally.",
      link: "https://leetcode.com/u/gnanuqubit",
    },
  ],
  contact: {
    title: "Transmit Signal",
    message:
      "Open to collaborations, research conversations, and AI system-building opportunities.",
    links: [
      { label: "GitHub", href: "https://github.com/gnanendranaidun" },
      { label: "LinkedIn", href: "https://linkedin.com/in/gnanendranaidun" },
      { label: "Discord", href: "https://discord.com/invite/GnanendraN87881" },
      {
        label: "Resume",
        href: "https://drive.google.com/file/d/1ua4jJmRAIRH3BaQ_9nMdQTA9itwJy3-m/view?usp=sharing",
      },
    ],
  },
};
