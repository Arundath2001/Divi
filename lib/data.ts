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
    image: "/mobile-banking-app.png",
    shortDescription: "A complete overhaul of a mobile banking application focusing on simplifying the transaction flow and improving accessibility.",
    longDescription: "This case study details the process of redesigning a legacy mobile banking application. The goal was to reduce the friction in primary user journeys such as transferring money and checking balances. By conducting extensive user research and iterative prototyping, we managed to increase user satisfaction scores by 40% and reduce the time to complete a transaction by half."
  },
  {
    slug: "saas-admin-dashboard",
    title: "SaaS Admin Dashboard",
    tags: ["Design System", "Data Visualization", "Figma"],
    image: "/modern-dashboard-analytics.jpg",
    shortDescription: "Creating a robust design system and intuitive data visualization for a complex B2B SaaS platform.",
    longDescription: "For this SaaS platform, the challenge was to present a vast amount of complex data in a way that was easily digestible for administrators. I established a comprehensive design system from scratch in Figma and designed intuitive dashboard widgets. This allowed for scalable future development and a significantly improved onboarding experience for new administrators."
  },
  {
    slug: "e-commerce-experience",
    title: "E-Commerce Experience",
    tags: ["User Journey", "Interaction Design", "Web"],
    image: "/modern-ecommerce-website.png",
    shortDescription: "Redesigning the shopping cart and checkout experience to reduce drop-off rates and increase conversions.",
    longDescription: "The e-commerce platform was suffering from a high cart abandonment rate. Through user testing, we identified several key pain points in the checkout process. By streamlining the flow, introducing clear progress indicators, and enhancing the overall visual hierarchy, we successfully increased the conversion rate by 15%."
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Portal",
    tags: ["Accessibility", "Wireframing", "UI Design"],
    image: "/placeholder.svg",
    shortDescription: "Designing an accessible and secure patient portal for a regional healthcare provider.",
    longDescription: "Accessibility and security were the paramount concerns for this healthcare portal. I focused on designing clear, legible typography and high-contrast UI elements, adhering strictly to WCAG guidelines. The resulting portal provided patients with easy access to their medical records and appointment scheduling, greatly improving patient engagement."
  },
];
