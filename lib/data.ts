export interface Project {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  shortDescription: string;
  longDescription: string;
}

export const projects: Project[] = [
  {
    slug: "fintech-app-redesign",
    title: "Fintech App Redesign",
    tags: ["UX Research", "UI Design", "Prototyping"],
    image: "/cyber.jpg",
    shortDescription: "A complete overhaul of a mobile banking application focusing on simplifying the transaction flow and improving accessibility.",
    longDescription: "This case study details the process of redesigning a legacy mobile banking application. The goal was to reduce the friction in primary user journeys such as transferring money and checking balances. By conducting extensive user research and iterative prototyping, we managed to increase user satisfaction scores by 40% and reduce the time to complete a transaction by half."
  },
  {
    slug: "K-RERA Website",
    title: "K-RERA Website",
    tags: ["Design System", "Data Visualization", "Figma"],
    image: "/krera.jpg",
    shortDescription: "Redesigning Kerala's Real Estate Regulatory Portal to improve transparency, accessibility, and ease of use for citizens, homebuyers, promoters, and agents.",
    longDescription: "For this SaaS platform, the challenge was to present a vast amount of complex data in a way that was easily digestible for administrators. I established a comprehensive design system from scratch in Figma and designed intuitive dashboard widgets. This allowed for scalable future development and a significantly improved onboarding experience for new administrators."
  },
  {
    slug: "MVD  Website",
    title: "MVD  Website",
    tags: ["User Journey", "Interaction Design", "Web"],
    image: "/mvd.jpg",
    shortDescription: "Making road safety education engaging through interactive videos, quizzes, and gamified learning for children.",
    longDescription: "The e-commerce platform was suffering from a high cart abandonment rate. Through user testing, we identified several key pain points in the checkout process. By streamlining the flow, introducing clear progress indicators, and enhancing the overall visual hierarchy, we successfully increased the conversion rate by 15%."
  },
  {
    slug: "Noble Mobile App",
    title: "Noble Mobile App",
    tags: ["Accessibility", "Wireframing", "UI Design"],
    image: "/nobleapp.jpg",
    shortDescription: "Designing a seamless healthcare experience that enables patients to book diagnostic tests, schedule home sample collection, and access medical reports anytime, anywhere.",
    longDescription: "Accessibility and security were the paramount concerns for this healthcare portal. I focused on designing clear, legible typography and high-contrast UI elements, adhering strictly to WCAG guidelines. The resulting portal provided patients with easy access to their medical records and appointment scheduling, greatly improving patient engagement."
  },
  {
    slug: "ST Josephs Province",
    title: "ST Josephs Province",
    tags: ["Product Design", "Web App", "UI/UX"],
    image: "/sttly.jpg",
    shortDescription: "Redesigning the digital presence of St. Joseph Province to create a modern, engaging, and accessible experience while bringing the client's vision for interactive online devotional experiences to life.",
    longDescription: "End-to-end product design for the Sttly platform, focusing on seamless user interactions and modern aesthetics. The project involved deep user research and iterative design sprints to deliver a polished product."
  },
  {
    slug: "SSITS Website",
    title: "SSITS Website",
    tags: ["Web Design", "Portfolio", "Branding"],
    image: "/syed.jpg",
    shortDescription: "Redesigning the institute's digital presence to create a modern, accessible, and engaging experience for students, parents, educators, and prospective learners.",
    longDescription: "A minimalist and impactful portfolio design created to showcase creative work. The design language emphasizes typography, white space, and subtle micro-interactions to create a premium feel."
  }
];
