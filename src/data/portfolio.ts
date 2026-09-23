import dsuiImage from '@/assets/images/dsui.png';
import modesUiImage from '@/assets/images/modes_ui.png';
import siaDecorImage from '@/assets/images/siadecorprints.png';
import visionboardImage from '@/assets/images/visionboard.png';
import waveOfFlavorsImage from '@/assets/images/wave_of_flavors.png';
import dashboardImage from '@/assets/images/dashboard.png';
import dreamDoorsImage from '@/assets/images/dream_doors.png';
import nordeviAcademyImage from '@/assets/images/nordevi-academy.png';
import omMuktinathDentalHomeImage from '@/assets/images/ommuktinathdentalhome.png';

export const personalInfo = {
  name: "Bikash Ghimire",
  title: "Full Stack Product Engineer",
  tagline: "Enterprise design systems, product development, and AI-augmented engineering",
  bio: "Full Stack Product Engineer with 4+ years of experience building production-ready applications, scalable frontend platforms, and enterprise design systems. Currently owning and architecting the company-wide design system at Datadrivers Oy.",
  location: "Helsinki Metropolitan Area, Finland",
  email: "bikashghimire2610@gmail.com",
  website: "https://bikashghimire.com",
  github: "https://github.com/bikashghimire",
  linkedin: "https://linkedin.com/in/bikashghimire",
  twitter: ""
};

export const experience = [
  {
    id: 1,
    company: "Datadrivers Oy · CAP-GROUP OY",
    position: "Software Engineer / Design System / Product Development",
    duration: "Mar 2025 - Present",
    location: "Helsinki, Finland",
    description: "Datadrivers Oy, part of CAP Group, builds large-scale digital platforms for driver training and logistics. I own and architect the enterprise design system used across multiple SaaS products, while contributing across the stack to modern React applications and legacy PHP-based platforms serving thousands of customers.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Web Components", "Storybook", "NestJS", "PHP", "PostgreSQL", "Azure DevOps", "GitLab", "CI/CD"],
    achievements: [
      "Own and architect the company-wide design system across multiple SaaS products",
      "Established component architecture, theming, accessibility, testing, documentation, and adoption practices",
      "Lead frontend R&D initiatives and author architecture decision records",
      "Drive adoption of agentic AI workflows for prototyping, implementation, testing, and documentation"
    ]
  },
  {
    id: 2,
    company: "Metso",
    position: "Software Engineer - Design System Team",
    duration: "May 2023 - Jan 2025",
    location: "Espoo, Finland",
    description: "Metso is a global industrial technology company operating in more than 50 countries with 17,000+ employees. I helped build and scale enterprise design system libraries used by global product teams, combining reusable UI patterns, accessibility standards, automated testing, and reliable release practices.",
    technologies: ["JavaScript", "TypeScript", "React", "Web Components", "Storybook", "PHP", "Node.js", "Figma", "zeroHeight", "Azure DevOps", "GitLab", "CI/CD", "Maze", "JIRA", "Confluence"],
    achievements: [
      "Developed and released component libraries exceeding 100,000 npm downloads",
      "Contributed to an enterprise design system supporting multiple product teams",
      "Improved quality through automated testing, versioning, branding, and accessibility standards",
      "Collaborated with designers, UX researchers, and engineers across global products"
    ]
  },
  {
    id: 3,
    company: "Nordevi Technologies",
    position: "Developer",
    duration: "Aug 2022 - Mar 2023",
    location: "Helsinki, Finland",
    description: "Delivered Nordevi Health, an EMR application for dental clinics, end to end from design and development to production deployment and CI/CD as the responsible engineer. Also delivered frontend solutions and internal dashboards for international clients in Finland, Oman, and Australia.",
    technologies: ["React", "TypeScript", "Node.js", "SQL", "CI/CD", "Cloud Platforms"],
    achievements: [
      "Delivered an EMR application for dental clinics from design through production",
      "Built full-stack solutions with React, Node.js, SQL, and deployment pipelines",
      "Set up CI/CD workflows and deployment processes to reduce manual release overhead"
    ]
  },
  {
    id: 4,
    company: "Integrify Oy",
    position: "Full Stack Developer",
    duration: "January 2022 - June 2022",
    location: "Helsinki, Finland",
    description: "Completed an intensive full-stack engineering program focused on React, TypeScript, Node.js, REST APIs, databases, testing, and Agile Git-based teamwork.",
    technologies: ["React", "TypeScript", "Node.js", "REST APIs", "Databases", "Testing", "Agile"],
    achievements: [
      "Completed six-month intensive full-stack program",
      "Built practical full-stack applications and APIs",
      "Worked in an Agile, Git-based engineering team"
    ]
  },
  {
    id: 5,
    company: "Centria University R & D",
    position: "Software Developer Intern",
    duration: "July 2021 - December 2021",
    location: "Finland",
    description: "Contributed to web and software projects for internal stakeholders, gaining early production experience across frontend development, APIs, and technical documentation.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "C++", "Arduino", "Raspberry Pi"],
    achievements: [
      "Contributed to internal web and software projects",
      "Built early experience in frontend development, APIs, and documentation"
    ]
  }
];


export const education = [
  {
    id: 1,
    institution: "Åbo Akademi University",
    degree: "MSc, Information Technology (Software Engineering)",
    duration: "2023 - April 2026",
    location: "Finland",
    coursework: [
      "Artificial Intelligence",
      "Software Quality",
      "Machine Learning",
      "Web Technologies",
      "System Safety",
      "Project Course",
      "Autonomic Software and System",
      "Tools for Reliable Software Construction",
      "Cloud Computing",
      "Code Optimisation",
      "Research Method in Computer Science and Engineering",
      "Data Science",
      "Software Construction",
      "Analytics for Industrial Internet",
    ],
    achievements: [
      "Advanced studies in software engineering, AI, and reliable software construction",
      "Focus on modern web technologies, cloud computing, and data science"
    ]
  },
  {
    id: 2,
    institution: "Centria University of Applied Sciences",
    degree: "BEng, Information Technology (Software Engineering)",
    duration: "2017 - 2021",
    location: "Finland",
    coursework: [
      "Extent of Studies : 240 Cr.",
      "Completed Studies : 275 Cr.",
      "Software Engineering, Mathematics, Physics and Chemistry",
      "Algorithm and Data Structure",
      "Modeling Techniques, Object-Oriented Programming & Modelling",
      "Mobile Software Development I & II",
      "Embedded Software",
      "Software Project",
      "Agile Methodology",
      "Android Programming",
      "C, C++, Java, JavaScript, HTML, CSS, SQL, C#(ASP.NET)",
      "IP Networks, CCNA1, Security, Routing and Switching essentials",
      "Netbeans, Microsoft Visual Studio",
      "Project Management",
    ],
    achievements: [
      "Completed a Bachelor of Engineering in software engineering",
      "Built a broad foundation across software construction, networks, embedded systems, and project work"
    ]
  }
];

export const certifications = [
  { id: 1, name: "Design Systems with Storybook v2", issuer: "Frontend Masters", date: "2025", credentialId: "", image: "#", tags: ["Design Systems", "Storybook", "Component Libraries"] },
  { id: 2, name: "React: Server-Side Rendering", issuer: "Professional Certification", date: "", credentialId: "", image: "#", tags: ["React", "SSR", "Frontend"] },
  { id: 3, name: "React: Creating and Hosting a Full-Stack Site", issuer: "Professional Certification", date: "", credentialId: "", image: "#", tags: ["React", "Full Stack", "Deployment"] },
  { id: 4, name: "Build REST APIs with FastAPI", issuer: "Professional Certification", date: "", credentialId: "", image: "#", tags: ["REST APIs", "FastAPI", "Backend"] },
  { id: 5, name: "Test Automation Foundations", issuer: "Professional Certification", date: "", credentialId: "", image: "#", tags: ["Testing", "Automation", "Quality"] },
  { id: 6, name: "AWS Cloud Practitioner Training", issuer: "Integrify", date: "", credentialId: "", image: "#", tags: ["AWS", "Cloud", "Infrastructure"] }
];

export const publications = [
  "AI-Driven Design Systems: Enhancing Efficiency, Consistency, and Collaboration with Azure OpenAI: A Case Study of Modes (Metso Design System)"
];

export const projects = [

  {
    id: 1,
    title: "DSUI",
    description:"DSUI is a React-based component library that was created using the designs, styling and tokens from the Metso Design System",
    technologies: ["React", "TypeScript", "SCSS", "Storybook"],
    image: dsuiImage,
    github: "https://github.com/Metso/dsui",
    demo: "https://modes-react.mogroup.com/?path=/story/overview-introduction--page",
    featured: true
  },
  {
    id: 2,
    title: "Mode UI",
    description: "Modes UI is a web component library that can be used with any framework. It is built with Lit and TypeScript. It includes a wide variety of different components, ranging from data visualization using Chart.js, to a rich text editor using TipTap. The library is used internally across most digital projects at Metso.",
    technologies: ["Lit", "Web Components", "TypeScript", "Chart.js"],
    image: modesUiImage,
    github: "https://github.com/Metso/modes-ui",
    demo: "https://modes-web.metso.com/",
    featured: true
  },
  {
    id: 3,
    title: "Sia Decor Prints",
    description: "I developed a full fuctional ecommerce store for Sia Decor Prints using Wordpress and WooCommerce.",
    technologies: ["Wordpress", "WooCommerce", "Stripe"],
    image: siaDecorImage,
    github: "https://github.com/bikashghimire/sia-decor-prints",
    demo: "https://siadecorprints.com.au/",
    featured: true
  },

  {
    id: 4,
    title: "VisionBoard",
    description: "I developed a latent dashboard interface leveraging Next.js, TypeScript, and Shadcn/UI.",
    technologies: ["Next.Js", "TypeScript", "Shadcn/UI"],
    image: visionboardImage,
    github: "https://github.com/bikashghimire/visionboard-shadcn",
    demo: "https://visionboard-shadcn.vercel.app/",
    featured: true
  },
  {
      id: 5,
    title: "Wave of Flavors",
    description: "A website for a restaurant in Helsinki, Finland. It is built with React, TypeScript, and Tailwind CSS.",
    technologies: ["React.Js", "TypeScript", "Shadcn/UI"],
    image: waveOfFlavorsImage,
    github: "https://github.com/bikashghimire/wave-of-flavors",
    demo: "https://www.waveofflavors.fi/",
    featured: true
  },
  {
      id: 6,
    title: "Dashboard",
    description: "I developed a dashboard interface leveraging Next.js, TypeScript, and Shadcn/UI.",
    technologies: ["Next.Js", "TypeScript", "Shadcn/UI"],
    image: dashboardImage,
    github: "https://github.com/bikashghimire/bikashpress-ui",
    demo: "https://bikashpress-ui.vercel.app/",
    featured: true
  },
  {
    id: 7,
    title: "Dreamdoors Oman",
    description: "Dream Doors is based in Muscat and specializes in high-quality ACP exterior doors and a full range of interior doors (WPC, PVC, full-fiber). We combine precision manufacturing, premium materials and expert installation to make your dream villa both luxurious and secure.",
    technologies: ["React.Js", "TypeScript", "Tailwind CSS"],
    image: dreamDoorsImage,
    github: "https://github.com/bikashghimire/dream-doors-oman",
    demo: "https://dream-doors-oman.vercel.app/",
    featured: true
  },
  {
      id: 8,
    title: "Bikash Dev Blog",
    description: "I sometimes write stuffs about Front-End development, Design System.",
    technologies: ["Nunjucks", "JavaScript", "CSS"],
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bikashghimire/bikashdev-blog",
    demo: "https://bikashdev.netlify.app/about/",
    featured: false
  },
  {
    id: 9,
    title: "Tapana Oy Website",
    description: "I developed a dashboard interface leveraging Next.js, TypeScript, and Shadcn/UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bikashghimire/tapana-oy",
    demo: "https://santo-one.vercel.app/",
    featured: false
  },
  {
        id: 10,
    title: "Nordevi Tech",
    description: "Nordevi Tech is a tech company that provides services to businesses and individuals.",
    technologies: ["TypeScript", "CSS", "JavaScript"],
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bikashghimire/nordevi-tech",
    demo: "https://www.nordevi.tech/",
    featured: true
  },
  {
    id: 11,
    title: "Expense Calculator",
    description: "A react app helps with tracking everyday finances! You going to love it.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bikashghimire/Expense-Calculater",
    demo: "https://expensescalculator1.netlify.app/",
    featured: false
  },
  {
    id: 12,
    title: "Serverless React",
    description: "It displays list of countries with their detail information gets data from api",
    technologies: ["React", "JavaScript", "ExpressJS"],
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bikashghimire/react-aws",
    demo: "",
    featured: false
  },
  {
    id: 13,
    title: "Ecommerce",
    description: "Fully functioning ecommerce application",
    technologies: ["SASS", "JavaScript", "EJS"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bikashghimire/ecommerce-application",
    demo: "",
    featured: false
  },
  {
    id: 14,
    title: "Sherpa Food & Bar Website",
    description: "A website for a restaurant in Helsinki",
    technologies: ["BootStrap", "HTML", "CSS"],
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bikashghimire/sherpa-food-and-bar-dev-team",
    demo: "https://bikashghimire.github.io/sherpa-food-and-bar-dev-team/",
    featured: false
  },
  {
    id: 15,
    title: "SvelteKit Notebook",
    description: "A NoteBook app based on Sveltekit",
    technologies: ["Sveltekit", "Firebase", "TypeScript"],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bikashghimire/sveltekit-crud-fullstack",
    demo: "https://mynotebookapps.netlify.app/",
    featured: false
  },
  {
    id: 16,
    title: "Nordevi Academy",
    description: "A Coding Bootcamp for students to learn coding and get job opportunities.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: nordeviAcademyImage,
    github: "https://github.com/bikashghimire/nordevi-academy",
    demo: "https://nordevi-academy.vercel.app/",
    featured: true
  },
  {
    id: 17,
    title: "NordDesign",
    description: "A Design System consultancy company.",
    technologies: ["React", "Next.js", "Shadcn/UI", "TypeScript", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bikashghimire/norddesign",
    demo: "https://github.com/bikashghimire/design-system-consultancy",
    featured: true
  },
  {
    id: 18,
    title: "React Quiz App",
    description: "A quiz app built with React, TypeScript, and Tailwind CSS.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/bikashghimire/react-quiz-app",
    demo: "https://custom-react-quiz-app.vercel.app/",
    featured: false
  },
  {
    id: 19,
    title: "Om Muktinath Dental Home",
    description: "A website for a dental clinic in Nepal.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: omMuktinathDentalHomeImage,
    github:"https://github.com/bikashghimire/muktinath-dental-clinic-website",
    demo: "https://www.ommuktinathdentalhome.com/",
    featured: true
  }
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "JavaScript", "Web Components", "Storybook", "Tailwind CSS", "Next.js", "HTML", "CSS", "Accessibility (WCAG)", "Design Tokens"]
  },
  {
    category: "Backend",
    items: ["NestJS", "Node.js", "PHP", "REST APIs", "Authentication & Permissions", "PostgreSQL", "MySQL"]
  },
  {
    category: "DevOps & Tools",
    items: ["Azure DevOps", "GitHub", "GitLab", "CI/CD", "Automated Testing", "Figma", "zeroHeight", "JIRA", "Confluence"]
  },
  {
    category: "AI Engineering",
    items: ["Agentic Coding Workflows", "Claude Code", "OpenCode", "GitHub Copilot", "Figma MCP", "Azure OpenAI"]
  }
];
