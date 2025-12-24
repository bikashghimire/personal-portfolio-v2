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
  title: "Software Developer",
  tagline: "Building exceptional web experiences with modern technologies",
  bio: "Ambitious, Optimistic Web Developer with the skillsets of JavaScript, React, TypeScript, Node JS for modern web development with the ability to work in a fast-changing environment",
  location: "Helsinki, Finland",
  email: "bikashghimire2610@gmail.com",
  website: "",
  github: "https://github.com/bikashghimire",
  linkedin: "https://linkedin.com/in/bikashghimire",
  twitter: ""
};

export const experience = [
  {
    id: 1,
    company: "Datadrivers Oy",
    position: "Software Developer",
    duration: "Mar 2024 - Present",
    location: "Helsinki, Finland",
    description: "Architected an enterprise-grade design system from the ground up, driving UI/UX consistency across multiple product lines and significantly improving development velocity. Spearheaded front-end R&D initiatives by evaluating next-generation frameworks and authoring Architecture Decision Records (ADRs) to guide scalable component library selection. Developed a comprehensive, accessible, and performant component library using TypeScript, React, and Tailwind CSS. Established robust development infrastructure including Storybook documentation, design tokens, and automated testing frameworks. Collaborated cross-functionally with product, design, and backend teams to deliver seamless user experiences for flagship platforms such as Webauto and Fleetskills. Additionally, mentored teams on modern front-end best practices, component-driven development, and CI/CD workflows.",
    technologies: [
      "JavaScript",
      "React",
      "Storybook",
      "TypeScript",
      "Web Components",
      "SASS",
      "Jest",
      "Azure",
      "Azure DevOps",
      "Tailwind CSS",
      "Material UI",
      "Git",
      "CI/CD",
      "shadcn/ui",
      "Next.js",
      "Figma",
    ],
    achievements: [
      "Architected enterprise-grade design system from the ground up",
      "Improved development velocity across multiple product lines",
      "Established robust development infrastructure with Storybook and design tokens",
      "Mentored teams on modern front-end best practices"
    ]
  },
  {
    id: 2,
    company: "Metso",
    position: "Software Developer",
    duration: "May 2023 - Jan 2024",
    location: "Espoo, Finland",
    description: "At Metso, I led the development of scalable design system UI libraries, including a React-based framework and a framework-agnostic web components library, collectively achieving 100,000+ npm downloads. I ensured components were reusable, accessible, and performance-optimized, adhering to WCAG standards and collaborating with cross-functional teams. My work on the design system earned recognition at the Metso Innovation Award 2024 for its impact on UI/UX standardization and scalability. Additionally, I developed AI-driven solutions in Azure using OpenAI Studio, integrated CI/CD workflows, and deployed static web applications.",
    technologies: [
      "JavaScript",
      "React",
      "Storybook",
      "TypeScript",
      "Web Components",
      "SASS",
      "Jest",
      "Azure",
      "Azure OpenAI Studio",
      "CI/CD",
      "Figma",
    ],
    achievements: [
      "Led development of design system UI libraries achieving 100,000+ npm downloads",
      "Earned recognition at Metso Innovation Award 2024",
      "Developed AI-driven solutions in Azure using OpenAI Studio",
      "Ensured components were accessible and performance-optimized per WCAG standards"
    ]
  },
  {
    id: 3,
    company: "Funky Salsa Oy",
    position: "Web Developer",
    duration: "Aug 2022 - Mar 2023",
    location: "Helsinki, Finland",
    description: "Developed an order-handling web application with modern features from scratch using modern features and practices",
    technologies: ["SASS", "JavaScript", "React", "Firebase"],
    achievements: [
      "Built order-handling web application from scratch",
      "Implemented modern web development practices",
      "Delivered production-ready application"
    ]
  },
  {
    id: 4,
    company: "Integrify Oy",
    position: "Full Stack Developer",
    duration: "January 2022 - June 2022",
    location: "Helsinki, Finland",
    description: "Joined through the six-month intensive full-stack program for modern web development with the stacks of React, TypeScript, NodeJS, MongoDB, SQL & PostgreSQL with the role of Full stack developer.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "MongoDB"],
    achievements: [
      "Completed six-month intensive full-stack program",
      "Learned modern web development stacks",
      "Worked with React, TypeScript, NodeJS, MongoDB, SQL & PostgreSQL"
    ]
  },
  {
    id: 5,
    company: "Centria University R & D",
    position: "Software Developer Intern",
    duration: "July 2021 - December 2021",
    location: "Kokkola, Finland",
    description: "During my six-month internship at Centria University of Applied Sciences in Kokkola, I engaged in two significant projects, one in Game Development and the other in Web Development.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "C++",
      "Arduino",
      "Raspberry Pi",
      "Agile Methodology",
    ],
    achievements: [
      "Completed two significant projects in Game Development and Web Development",
      "Gained experience with Arduino and Raspberry Pi",
      "Applied Agile Methodology in real-world projects"
    ]
  }
];


export const education = [
  {
    id: 1,
    institution: "Åbo Akademi University",
    degree: "Masters Degree in Information Technology, Computer Software Engineering",
    duration: "Aug 2023 - Feb 2025",
    location: "Turku, Finland",
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
      "Pursuing advanced studies in software engineering and AI",
      "Focus on modern web technologies and cloud computing"
    ]
  },
  {
    id: 2,
    institution: "Centria University of Applied Sciences",
    degree: "Bachelor's degree in Information Technology, Computer Software Engineering",
    duration: "Aug 2017 - Dec 2021",
    location: "Kokkola, Finland",
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
      "Completed 275 credits (exceeding 240 credit requirement)",
      "Comprehensive foundation in software engineering"
    ]
  }
];

export const certifications = [
  {
    id: 1,
    name: "Design Systems with Storybook, v2",
    issuer: "Frontend Masters",
    date: "2025",
    credentialId: "AWS-CSA-2023-001",
    image: "https://static.frontendmasters.com/ud/c/496fa182a0/oBHqaLwshU/design-systems-v2.pdf",
    tags: ["Design Systems", "Storybook", "Component Libraries", "Frontend"]
  },
  {
    id: 2,
    name: "100 Days of Code - 2023 Web Development Bootcamp",
    issuer: "Udemy",
    date: "2023",
    credentialId: "GCP-PD-2023-001",
    image:"https://www.udemy.com/certificate/UC-d4a92cc0-4fba-48ac-aa96-fbef4b8e0813/",
    tags: ["Cloud Computing", "GCP", "DevOps", "Backend"]
  },
  {
    id: 3,
    name: "The Complete Web Developer in 2023: Zero to Mastery",
    issuer: "Udemy",
    date: "2022",
    credentialId: "META-RD-2022-001",
    image: "https://www.udemy.com/certificate/UC-af734f50-a38a-41d4-b7ed-bddac593459f/",
    tags: ["React", "JavaScript", "Frontend", "Web Development"]
  },
  {
    id: 4,
    name: "Azure AI services Essentials Training",
    issuer: "LinkedIn Learning",
    date: "2023",
    credentialId: "FCC-JS-2022-001",
    image: "https://www.linkedin.com/learning/certificates/877362e2aaf97edd2ede834e3664986fd3c85bc924e78bb877072853462de9bc",
    tags: ["JavaScript", "Algorithms", "Data Structures", "Programming"]
  },
  {
    id: 5,
    name: "Cert Prep: Scrum Master",
    issuer: "LinkedIn Learning",
    date: "2023",
    credentialId: "MS-TS-2021-001",
    image: "https://www.linkedin.com/learning/certificates/9375f65d0a9dee58925ffda29b7fdf65705d08ea2d20a8c1eec33c6c56c4eb86",
    tags: ["TypeScript", "JavaScript", "Frontend", "Type Safety"]
  },
  {
    id: 6,
    name: "JavaScript Essentials Training",
    issuer: "LinkedIn Learning",
    date: "2023",
    credentialId: "DOCKER-CA-2021-001",
    image: "https://www.linkedin.com/learning/certificates/48f4cede3d93b36cd76a80a19b4aebb3ef7db63615793318ee60ae7c327eb539",
    tags: ["Docker", "Containerization", "DevOps", "Infrastructure"]
  },
  {
    id: 7,
    name: "React.js Essential Training",
    issuer: "LinkedIn Learning",
    date: "2023",
    credentialId: "DOCKER-CA-2021-001",
    image: "https://www.linkedin.com/learning/certificates/58ebc1a0f8a4172b342a864fef2a6c21c1cb144155aa2e16ae00f98943e30b7f",
    tags: ["Docker", "Containerization", "DevOps", "Infrastructure"]
  },
  {
    id: 8,
    name: "Mern Essentials Training",
    issuer: "LinkedIn Learning",
    date: "2022",
    credentialId: "DOCKER-CA-2021-001",
    image: "https://www.linkedin.com/learning/certificates/258a3bbfea4b4c300247bed138075c91f09969625274692e2d5ac1b310bf3656?trk=share_certificate",
    tags: ["Docker", "Containerization", "DevOps", "Infrastructure"]
  },
  {
    id: 9,
    name: "Cultivating a Growth Mindset",
    issuer: "LinkedIn Learning",
    date: "2021",
    credentialId: "DOCKER-CA-2021-001",
    image: "https://www.linkedin.com/learning/certificates/08ea6d2ef2dad81416fbed8f195eefd2a6db123f012d1c804687aac3b60dabc9?trk=share_certificate",
    tags: ["Docker", "Containerization", "DevOps", "Infrastructure"]
  },
  {
    id: 10,
    name: "React Server-Side Rendering",
    issuer: "LinkedIn Learning",
    date: "2022",
    credentialId: "DOCKER-CA-2021-001",
    image: "https://www.linkedin.com/learning/certificates/0018342107376183171d78821d0b01eb7ea19f1ed12de846dd68c58110892e0f?trk=share_certificate",
    tags: ["Docker", "Containerization", "DevOps", "Infrastructure"]
  }

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
    demo: "Maintaing, refining",
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
    github: "https://github.com/bikashghimire/typescript-note-taking-app",
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
    category: "Frontend & Frameworks",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Web Components", "Next JS", "SASS", "Material UI", "SvelteKit"]
  },
  {
    category: "Dev Tools & Design",
    items: ["Storybook", "Git", "CI/CD", "JEST", "Figma"]
  },
  {
    category: "Backend & Server",
    items: ["Node JS", "Express", "Express JS", "PHP"]
  },
  {
    category: "Databases",
    items: ["SQL", "MongoDB"]
  },
  {
    category: "Other Technologies",
    items: ["Redux", "Python"]
  }
];