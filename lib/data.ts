export interface Project {
  slug: string;
  title: string;
  tags: string[];
  image: string;
  shortDescription: string;
  longDescription: string;
  snapshot?: {
    role?: string;
    projectType?: string;
    platform?: string;
    duration?: string;
    tools?: string;
    deliverables?: string;
    client?: string;
    responsibilities?: string;
  };
  overview?: string;
  problemStatement?: {
    text: string;
    points: string[];
  };
  goals?: string[];
  roleDetails?: {
    text: string;
    points: string[];
  };
  targetUsers?: string[];
  keyFeatures?: string[];
  outcome?: string;
  userResearch?: {
    text?: string;
    points?: string[];
  };
  userPainPoints?: { problem: string; solution: string }[];
  userFlow?: string;
  informationArchitecture?: string[];
  wireframes?: string;
  designSystem?: string[];
  accessibility?: string[];
  challenges?: string[];
  designConsiderations?: string[];
  learnings?: string[];
}

export const projects: Project[] = [

  {
    slug: "k-rera-website",
    title: "K-RERA Website Redesign",
    tags: ["Design System", "Data Visualization", "Figma"],
    image: "/krera.webp",
    shortDescription: "Redesigning Kerala's Real Estate Regulatory Portal to improve transparency, accessibility, and ease of use for citizens, homebuyers, promoters, and agents.",
    longDescription: "For this SaaS platform, the challenge was to present a vast amount of complex data in a way that was easily digestible for administrators. I established a comprehensive design system from scratch in Figma and designed intuitive dashboard widgets. This allowed for scalable future development and a significantly improved onboarding experience for new administrators.",
    snapshot: {
      role: "UI/UX Designer",
      projectType: "Government Website Redesign",
      platform: "Website",
      duration: "3 Months",
      tools: "Figma",
      deliverables: "UI Design"
    },
    overview: "The Kerala Real Estate Regulatory Authority (K-RERA) is the official government body responsible for regulating the real estate sector in Kerala. The website serves multiple user groups by providing access to registered projects, agent registrations, complaint filing, legal documents, public search, and regulatory information.\n\nThis redesign project aimed to improve the usability of the portal by simplifying navigation, organizing information more effectively, and creating a modern, accessible interface that helps users complete important tasks with greater ease.",
    problemStatement: {
      text: "The existing website contains a large amount of information and serves diverse audiences, making it difficult for users to quickly locate the services they need.\n\nSome key usability challenges identified during the UX audit included:",
      points: [
        "Dense homepage with competing content.",
        "Complex navigation due to numerous services and documents.",
        "Important actions such as project search and complaint filing are not sufficiently prominent.",
        "Inconsistent visual hierarchy makes scanning difficult.",
        "Limited guidance for first-time users.",
        "The interface could be modernized to improve readability and accessibility."
      ]
    },
    goals: [
      "Simplify navigation across government services.",
      "Improve discoverability of frequently used features.",
      "Create clear task-oriented user journeys.",
      "Enhance accessibility and readability.",
      "Modernize the visual interface while maintaining credibility."
    ],
    roleDetails: {
      text: "As the UI/UX Designer, I was responsible for:",
      points: [
        "Conducting a UX audit of the existing website.",
        "Performing competitive analysis of government service portals.",
        "Restructuring the information architecture.",
        "Designing user flows for key tasks.",
        "Creating wireframes and high-fidelity designs.",
        "Building a consistent design system.",
        "Developing interactive prototypes."
      ]
    },
    targetUsers: [
      "Homebuyers verifying RERA-registered projects.",
      "Property buyers checking project details before purchase.",
      "Promoters registering projects.",
      "Real estate agents managing registrations.",
      "Citizens filing complaints or viewing judgments.",
      "Legal professionals and government stakeholders."
    ],
    keyFeatures: [
      "Public Project Search",
      "Agent Search",
      "Complaint Filing",
      "Project Registration",
      "Login & Registration Portal",
      "Acts, Rules & Regulations",
      "Downloads & Guidelines",
      "Responsive Homepage",
      "Improved Navigation",
      "Accessibility Improvements"
    ],
    outcome: "The redesign presents a cleaner, task-focused experience that makes essential government services easier to discover and navigate. By improving information architecture, visual hierarchy, and accessibility, the concept aims to reduce the effort required for users to search for projects, access regulatory information, and complete common tasks."
  },
  {
    slug: "mvd-website",
    title: "MVD Kids – Road Safety Learning Website",
    tags: ["User Journey", "Interaction Design", "Web"],
    image: "/mvd.webp",
    shortDescription: "Making road safety education engaging through interactive videos, quizzes, and gamified learning for children.",
    longDescription: "The e-commerce platform was suffering from a high cart abandonment rate. Through user testing, we identified several key pain points in the checkout process. By streamlining the flow, introducing clear progress indicators, and enhancing the overall visual hierarchy, we successfully increased the conversion rate by 15%.",
    snapshot: {
      role: "UI/UX Designer",
      projectType: "Educational Website Design",
      platform: "Responsive Web",
      duration: "2 Months",
      tools: "Figma, FigJam",
      client: "Motor Vehicles Department (MVD)",
      responsibilities: "Requirement Analysis, Wireframing, High-Fidelity UI Design",
      deliverables: "Design System, UI Components, High-fidelity UI Design"
    },
    overview: "Road safety education is most effective when introduced at an early age. This project involved designing an interactive educational website for children that makes learning traffic rules engaging through animated videos, quizzes, and game-like activities.\n\nThe goal was to transform traditional educational content into an enjoyable digital experience that encourages children to learn, practice, and remember essential road safety concepts. The interface was designed with bright visuals, simple navigation, and age-appropriate interactions to keep young learners engaged while supporting their educational journey.",
    problemStatement: {
      text: "Teaching traffic rules to children can be difficult when information is presented in a text-heavy or formal way. Young learners often have shorter attention spans and respond better to interactive, visual experiences.\n\nThe challenge was to design a platform that:",
      points: [
        "Makes road safety fun and engaging.",
        "Encourages children to complete learning activities.",
        "Simplifies navigation for young users.",
        "Uses visuals and animations to improve understanding.",
        "Balances educational content with playful interactions."
      ]
    },
    goals: [
      "Create an engaging learning experience for children.",
      "Teach essential traffic rules through interactive content.",
      "Increase engagement using videos, quizzes, and gamification.",
      "Design an intuitive and child-friendly interface.",
      "Encourage continued learning through rewards and progress tracking.",
      "Ensure accessibility with large touch targets, simple language, and clear visual hierarchy."
    ],
    targetUsers: [
      "Children (Primary Users): Learn traffic signs and road safety rules, watch educational videos, play quizzes and games, track learning progress.",
      "Parents: Monitor their child's learning, encourage safe road habits at home.",
      "Teachers: Use the platform as a supplementary educational resource for classroom learning."
    ],
    keyFeatures: [
      "Educational animated videos",
      "Learn traffic signs and road rules",
      "Interactive quiz games",
      "Badges and rewards for completed activities",
      "Learning progress tracker",
      "Child-friendly illustrations and animations",
      "Responsive design for desktop and tablets",
      "Colorful and engaging visual interface"
    ]
  },
  {
    slug: "noble-mobile-app",
    title: "Noble Diagnostics Mobile App",
    tags: ["Accessibility", "Wireframing", "UI Design"],
    image: "/nobleapp.webp",
    shortDescription: "Designing a seamless healthcare experience that enables patients to book diagnostic tests, schedule home sample collection, and access medical reports anytime, anywhere.",
    longDescription: "Accessibility and security were the paramount concerns for this healthcare portal. I focused on designing clear, legible typography and high-contrast UI elements, adhering strictly to WCAG guidelines. The resulting portal provided patients with easy access to their medical records and appointment scheduling, greatly improving patient engagement.",
    snapshot: {
      role: "UI/UX Designer",
      duration: "3 Months",
      tools: "Figma"
    },
    overview: "Noble Diagnostics is a healthcare diagnostic center offering laboratory tests, health check-up packages, home sample collection, and online report access. The goal of the mobile app was to simplify the process of booking diagnostic services while providing patients with a seamless digital healthcare experience.",
    problemStatement: {
      text: "Patients found it difficult to book diagnostic tests, compare health packages, access reports, and schedule home sample collections through traditional methods. The existing experience lacked convenience, resulting in longer waiting times and increased dependency on phone calls.",
      points: []
    },
    goals: [
      "Make test booking simple",
      "Enable home sample collection",
      "Provide quick access to reports",
      "Reduce booking time",
      "Increase trust through clear information",
      "Improve overall patient experience"
    ],
    targetUsers: [
      "Persona 1 - Anjali (28, Software Engineer): Needs to book tests quickly, access digital reports, and make online payments. Pain points include a busy schedule, not wanting to visit the clinic twice, and needing reminders.",
      "Persona 2 - Ravi (58, Retired): Needs home sample collection, an easy-to-read interface, and family member access. Pain points include difficult hospital visits, small text, and confusing navigation."
    ],
    userResearch: {
      text: "Research methods included Competitive Analysis, User Interviews, Online Survey, and Stakeholder Discussion.",
      points: [
        "Users prefer booking within a few steps.",
        "Home sample collection is highly valued.",
        "Easy report access improves satisfaction.",
        "Transparent pricing builds trust.",
        "Appointment reminders reduce missed visits."
      ]
    },
    userPainPoints: [
      { problem: "Difficult booking", solution: "Step-by-step booking flow" },
      { problem: "Long waiting time", solution: "Appointment scheduling" },
      { problem: "No online reports", solution: "Digital report section" },
      { problem: "Hard to compare packages", solution: "Organized package cards" },
      { problem: "No reminders", solution: "Notification system" }
    ],
    userFlow: "Open App → Login → Home → Search Test → Select Test → Choose Lab or Home Collection → Choose Date & Time → Payment → Booking Confirmed",
    informationArchitecture: [
      "Home",
      "├── Tests",
      "├── Packages",
      "├── Doctors",
      "├── Home Collection",
      "├── Reports",
      "├── Notifications",
      "├── Profile",
      "└── Settings"
    ],
    wireframes: "The design evolved from low-fidelity wireframes focusing on layout and flow, to mid-fidelity designs establishing hierarchy, and finally high-fidelity UI prioritizing accessibility and clear visual communication.",
    designSystem: [
      "Typography",
      "Colors",
      "Buttons",
      "Text Fields",
      "Icons",
      "Cards",
      "Badges",
      "Spacing",
      "Grid",
      "Components"
    ],
    keyFeatures: [
      "Home Dashboard: Quick search, Categories, Health packages, Recent bookings",
      "Test Booking: Search tests, Filter options, Lab details",
      "Home Collection: Select address, Preferred time, Instructions",
      "Reports: Download PDF, View previous reports",
      "Notifications: Appointment reminders, Test status, Report ready alerts",
      "Profile: Medical history, Saved family members, Addresses, Payments"
    ],
    accessibility: [
      "High color contrast",
      "Large touch targets",
      "Readable typography",
      "Clear icons",
      "Error validation",
      "Consistent navigation"
    ],
    challenges: [
      "Simplifying healthcare terminology",
      "Designing an easy booking flow",
      "Organizing many diagnostic categories",
      "Balancing detailed information with a clean interface"
    ],
    outcome: "The redesigned mobile experience streamlined the diagnostic booking journey by reducing the number of steps required to schedule appointments, improving access to health reports, and making home sample collection more convenient for users.",
    learnings: [
      "User research is essential for understanding healthcare needs.",
      "Simple navigation increases usability.",
      "Accessibility should be considered from the beginning.",
      "A consistent design system speeds up development and improves the experience."
    ]
  },
  {
    slug: "st-josephs-province",
    title: "St. Joseph Province Website Redesign",
    tags: ["Product Design", "Web App", "UI/UX"],
    image: "/sttly.webp",
    shortDescription: "Redesigning the digital presence of St. Joseph Province to create a modern, engaging, and accessible experience while bringing the client's vision for interactive online devotional experiences to life.",
    longDescription: "End-to-end product design for the Sttly platform, focusing on seamless user interactions and modern aesthetics. The project involved deep user research and iterative design sprints to deliver a polished product.",
    snapshot: {
      role: "UI/UX Designer",
      projectType: "Website Redesign",
      platform: "Responsive Web",
      duration: "3 Months",
      tools: "Figma, FigJam",
      client: "St. Joseph Province, Thalassery",
      responsibilities: "Stakeholder Interview, Requirement Analysis, Wireframing, High-Fidelity UI Design, Interactive Prototyping",
      deliverables: "Responsive Website Design, Design System, UI Components, Interactive Prototype"
    },
    overview: "St. Joseph Province, Thalassery is a Catholic religious organization dedicated to education, healthcare, pastoral ministry, and social service. The website serves as a central platform for visitors to explore the province's mission, ministries, institutions, news, events, and community initiatives.\n\nThe objective of this redesign was to modernize the existing website while improving usability, content organization, and accessibility. Alongside the informational content, the client envisioned incorporating interactive devotional experiences—such as virtual candle lighting, prayer requests, live adoration, and background music—to foster a stronger sense of spiritual connection for visitors.",
    problemStatement: {
      text: "The project involved redesigning an existing website that contained extensive information while also accommodating several interactive features requested by the client.\n\nThe main design challenges included:",
      points: [
        "Organizing a large amount of content into a clear and intuitive structure.",
        "Improving navigation so visitors could easily access ministries, institutions, events, and resources.",
        "Designing interaction flows for devotional features while maintaining a respectful and seamless user experience.",
        "Creating a consistent visual language that reflected the province's identity.",
        "Ensuring the experience remained accessible across desktop, tablet, and mobile devices."
      ]
    },
    goals: [
      "Modernize the overall visual design.",
      "Improve navigation and information hierarchy.",
      "Create a responsive experience across multiple devices.",
      "Present the province's mission and activities in a clear and engaging way.",
      "Design intuitive user journeys for the interactive devotional features requested by the client.",
      "Build a consistent and scalable design system."
    ],
    roleDetails: {
      text: "As the UI/UX Designer, I was responsible for:",
      points: [
        "Conducting stakeholder interviews to understand business goals and project requirements.",
        "Analyzing the existing website structure and identifying opportunities for improvement.",
        "Planning page layouts and user flows.",
        "Creating low-fidelity wireframes.",
        "Designing high-fidelity responsive interfaces.",
        "Designing interaction flows for the client-requested devotional features.",
        "Creating reusable UI components and maintaining design consistency.",
        "Developing interactive prototypes for review and developer handoff."
      ]
    },
    targetUsers: [
      "Visitors: People interested in learning about the province, its mission, ministries, and community initiatives.",
      "Members of the Congregation: Sisters and members seeking updates, publications, events, and internal information.",
      "Families and Benefactors: Individuals looking to connect with the province, participate in devotional activities, or support its initiatives.",
      "Students and Parents: Users seeking information about institutions managed by the province.",
      "Individuals Exploring Religious Vocation: Individuals exploring a vocation to become a Catholic sister or nun by learning about the congregation, its mission, formation, and community life."
    ],
    keyFeatures: [
      "Province Overview",
      "Mission & Vision",
      "Ministries and Institutions",
      "News & Events",
      "Gallery",
      "Publications",
      "Contact Information",
      "Virtual Candle Lighting",
      "Prayer Request Submission",
      "Prayer Card Integration",
      "Live Eucharistic Adoration",
      "Background Music in Selected Sections"
    ],
    designConsiderations: [
      "Clear information hierarchy to help users locate content quickly.",
      "Responsive layouts for seamless browsing across devices.",
      "Consistent typography, spacing, and visual components.",
      "Simple and intuitive navigation.",
      "Calm visual styling that complements the spiritual nature of the website.",
      "Smooth interaction flows for devotional features without distracting from the primary content."
    ],
    outcome: "The redesigned website provides a more organized and visually engaging experience while supporting the client's vision for digital engagement. By combining improved navigation with thoughtfully designed interaction flows for the requested devotional features, the website enables visitors to explore information and participate in online spiritual activities through a unified experience.",
    learnings: [
      "Balancing stakeholder requirements with usability principles.",
      "Designing information-rich websites with clear navigation.",
      "Creating interaction flows for unique digital experiences.",
      "Maintaining consistency across responsive layouts.",
      "Collaborating effectively throughout the design process."
    ]
  },
  {
    slug: "ssits-website",
    title: "SSITS Website",
    tags: ["Web Design", "UI/UX", "Education"],
    image: "/syed.webp",
    shortDescription: "Redesigning the institute's digital presence to create a modern, accessible, and engaging experience for students, parents, educators, and prospective learners.",
    longDescription: "A minimalist and impactful portfolio design created to showcase creative work. The design language emphasizes typography, white space, and subtle micro-interactions to create a premium feel.",
    snapshot: {
      role: "UI/UX Designer",
      projectType: "Educational Website Redesign",
      platform: "Responsive Web",
      duration: "3 Months",
      tools: "Figma, FigJam",
      client: "Sir Syed Institute",
      responsibilities: "Stakeholder Interview, Requirement Analysis, Wireframing, High-Fidelity UI Design, Interactive Prototyping",
      deliverables: "Responsive Website Design"
    },
    overview: "The objective of this redesign was to create a modern, responsive, and user-friendly website that simplifies access to information, improves navigation, and strengthens the institute's digital presence while reflecting its educational values and commitment to learning.",
    problemStatement: {
      text: "The redesign focused on creating a seamless user experience while organizing a wide range of academic and institutional information.\n\nKey challenges included:",
      points: [
        "Organizing Content: Structure academic programs, admissions, departments, and institute information into a clear and intuitive layout.",
        "Improving Navigation: Enable users to quickly find courses, announcements, admissions, and contact information.",
        "Presenting Information Clearly: Showcase educational programs, campus activities, and institute updates in an engaging and easy-to-understand format.",
        "Ensuring Accessibility: Deliver a responsive and accessible experience across desktop, tablet, and mobile devices."
      ]
    },
    goals: [
      "Improve navigation and information architecture.",
      "Simplify access to admissions and academic information.",
      "Highlight courses, facilities, and institute achievements.",
      "Deliver a responsive and accessible user experience across all devices."
    ],
    roleDetails: {
      text: "As the UI/UX Designer, I was responsible for:",
      points: [
        "Organizing content and planning the website structure.",
        "Creating low-fidelity wireframes and responsive layouts.",
        "Designing high-fidelity user interfaces.",
        "Developing reusable UI components and maintaining design consistency."
      ]
    },
    targetUsers: [
      "Prospective Students: Explore courses, admissions, and campus facilities.",
      "Current Students: Access academic information, announcements, and institute resources.",
      "Parents & Guardians: Learn about programs, facilities, and admission procedures.",
      "Faculty & Staff: Share educational content, updates, and institutional information.",
      "Alumni & General Visitors: Explore the institute's mission, achievements, and contact details."
    ],
    keyFeatures: [
      "About the Institute",
      "Academics",
      "Admissions",
      "Departments",
      "Faculty Profiles",
      "Gallery",
      "Student Resources",
      "Contact & Enquiries",
      "Responsive Navigation"
    ],
    outcome: "The redesigned website provides a clean, modern, and intuitive experience that makes it easier for users to discover academic programs, access important information, and stay informed about institute activities. Through improved navigation, organized content, and responsive layouts, the design enhances usability while strengthening the institute's online presence."
  },
  {
    slug: "livable-interiors",
    title: "Livable Interiors",
    tags: ["Web Design", "UI/UX", "Interior Design"],
    image: "/livable.webp",
    shortDescription: "Designing a modern digital platform that showcases interior design services, inspires potential clients, and simplifies project inquiries.",
    longDescription: "A minimalist and impactful portfolio design created to showcase creative work. The design language emphasizes typography, white space, and subtle micro-interactions to create a premium feel.",
    snapshot: {
      role: "UI/UX Designer",
      projectType: "Interior Design Website",
      platform: "Responsive Web",
      duration: "3 Months",
      tools: "Figma",
      client: "Livable Interior",
      responsibilities: "Requirement Analysis, Wireframing, High-Fidelity UI Design",
      deliverables: "Responsive Website Design, Design System, UI Components"
    },
    overview: "Livable Interior is an interior design company specializing in creating functional and aesthetically pleasing residential and commercial spaces. The website serves as a digital portfolio where potential customers can explore the company's services, browse completed projects, and connect with the team for design consultations.\n\nThe objective of this project was to design a modern, visually engaging, and responsive website that effectively showcases the brand's expertise while making it easy for users to discover services, view project portfolios, and submit inquiries.",
    problemStatement: {
      text: "The project focused on creating a visually compelling experience while ensuring users could easily explore the company's services and portfolio.\n\nKey challenges included:",
      points: [
        "Showcasing Projects: Present completed interior projects in a visually engaging and easy-to-browse format.",
        "Organizing Content: Structure services, project categories, and company information into a clear and intuitive layout.",
        "Encouraging Inquiries: Design a seamless user journey that encourages visitors to request consultations or contact the team.",
        "Reflecting Brand Identity: Create a modern and elegant interface that aligns with the company's design philosophy.",
        "Ensuring Accessibility: Deliver a responsive and accessible experience across desktop, tablet, and mobile devices."
      ]
    },
    goals: [
      "Showcase interior design projects through an engaging portfolio.",
      "Improve navigation and information architecture.",
      "Simplify access to services and consultation requests.",
      "Create a consistent and visually appealing design system.",
      "Deliver a responsive experience across multiple devices."
    ],
    roleDetails: {
      text: "As the UI/UX Designer, I was responsible for:",
      points: [
        "Organizing content and planning the website structure.",
        "Creating low-fidelity wireframes.",
        "Designing high-fidelity user interfaces.",
        "Developing reusable UI components and maintaining design consistency."
      ]
    },
    targetUsers: [
      "Homeowners: Individuals looking for interior design solutions for their homes.",
      "Business Owners: Clients seeking interior design services for commercial spaces.",
      "Prospective Clients: Visitors exploring the company's portfolio, services, and design expertise.",
      "Architects & Partners: Professionals interested in collaboration opportunities.",
      "General Visitors: Users learning about the company and its completed projects."
    ],
    keyFeatures: [
      "Home",
      "Services Page"
    ],
    outcome: "The final website delivers a modern and immersive browsing experience that highlights Livable Interior's expertise through a clean visual hierarchy, organized content, and an engaging project showcase. The responsive design enables visitors to explore services, browse completed projects, and connect with the company seamlessly across all devices."
  }
];
