import { personalInfo, experience, education, certifications, projects, skills } from '@/data/portfolio';

interface ChatResponse {
  text: string;
}

const allTechnologies = [
  ...new Set([
    ...skills.flatMap(s => s.items),
    ...experience.flatMap(e => e.technologies),
    ...projects.flatMap(p => p.technologies),
  ])
].map(t => t.toLowerCase());

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

function matchesAny(input: string, keywords: string[]): boolean {
  const n = normalize(input);
  return keywords.some(k => n.includes(k));
}

function getGreeting(): string {
  const greetings = [
    `Hi! I'm Bikash's portfolio assistant. I can tell you about his skills, experience, projects, education, and more. What would you like to know?`,
    `Hello! Welcome to Bikash Ghimire's portfolio. Ask me anything about his work, skills, or background!`,
    `Hey there! I know everything about Bikash's portfolio. What are you curious about?`,
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function getSkillsResponse(): string {
  const formatted = skills
    .map(s => `**${s.category}:** ${s.items.join(', ')}`)
    .join('\n\n');
  return `Here are Bikash's skills:\n\n${formatted}`;
}

function getExperienceResponse(): string {
  const formatted = experience
    .map(e => `**${e.position}** at ${e.company} (${e.duration}, ${e.location})\n${e.description.slice(0, 150)}...`)
    .join('\n\n');
  return `Bikash has ${experience.length} professional roles:\n\n${formatted}`;
}

function getSpecificExperience(input: string): string | null {
  const n = normalize(input);
  const match = experience.find(e =>
    n.includes(normalize(e.company)) || n.includes(normalize(e.position))
  );
  if (!match) return null;
  const achievements = match.achievements.map(a => `• ${a}`).join('\n');
  const techs = match.technologies.join(', ');
  return `**${match.position}** at ${match.company}\n📅 ${match.duration} | 📍 ${match.location}\n\n${match.description}\n\n**Key Achievements:**\n${achievements}\n\n**Technologies:** ${techs}`;
}

function getEducationResponse(): string {
  const formatted = education
    .map(e => `**${e.degree}**\n${e.institution} (${e.duration}, ${e.location})\nCoursework: ${e.coursework.slice(0, 5).join(', ')}...`)
    .join('\n\n');
  return `Bikash's education:\n\n${formatted}`;
}

function getProjectsResponse(): string {
  const featured = projects.filter(p => p.featured);
  const formatted = featured
    .slice(0, 6)
    .map(p => `**${p.title}** — ${p.description.slice(0, 80)}... [${p.technologies.join(', ')}]`)
    .join('\n\n');
  return `Bikash has ${projects.length} projects (${featured.length} featured). Here are some highlights:\n\n${formatted}\n\nAsk me about a specific project for more details!`;
}

function getSpecificProject(input: string): string | null {
  const n = normalize(input);
  const match = projects.find(p => n.includes(normalize(p.title)));
  if (!match) return null;
  const links = [];
  if (match.github) links.push(`[GitHub](${match.github})`);
  if (match.demo && match.demo !== '') links.push(`[Live Demo](${match.demo})`);
  return `**${match.title}**\n\n${match.description}\n\n**Technologies:** ${match.technologies.join(', ')}\n\n${links.join(' | ')}`;
}

function getCertificationsResponse(): string {
  const formatted = certifications
    .map(c => `• **${c.name}** — ${c.issuer} (${c.date})`)
    .join('\n');
  return `Bikash holds ${certifications.length} certifications:\n\n${formatted}`;
}

function getContactResponse(): string {
  return `You can reach Bikash at:\n\n📧 **Email:** ${personalInfo.email}\n📍 **Location:** ${personalInfo.location}\n🔗 **GitHub:** ${personalInfo.github}\n🔗 **LinkedIn:** ${personalInfo.linkedin}\n\nOr use the contact form on this site!`;
}

function getAboutResponse(): string {
  return `**${personalInfo.name}** — ${personalInfo.title}\n\n${personalInfo.bio}\n\n📍 Based in ${personalInfo.location}\n\nBikash currently works at ${experience[0].company} as a ${experience[0].position}. He holds a Master's degree from ${education[0].institution} and a Bachelor's from ${education[1].institution}.\n\nHe has worked with ${experience.length} companies and built ${projects.length} projects.`;
}

function getLocationResponse(): string {
  return `Bikash is based in **${personalInfo.location}**. He has worked at companies in Helsinki, Espoo, Kokkola, and Turku across Finland.`;
}

function getTechResponse(input: string): string | null {
  const n = normalize(input);
  const matchedTech = allTechnologies.find(t => n.includes(t));
  if (!matchedTech) return null;

  const relatedExperience = experience.filter(e =>
    e.technologies.some(t => normalize(t) === matchedTech)
  );
  const relatedProjects = projects.filter(p =>
    p.technologies.some(t => normalize(t) === matchedTech)
  );

  let response = `Bikash has experience with **${matchedTech}**!\n\n`;
  if (relatedExperience.length > 0) {
    response += `**Used professionally at:** ${relatedExperience.map(e => e.company).join(', ')}\n\n`;
  }
  if (relatedProjects.length > 0) {
    response += `**Projects using it:** ${relatedProjects.map(p => p.title).join(', ')}`;
  }
  return response;
}

function getCurrentRoleResponse(): string {
  const current = experience[0];
  return `Bikash currently works as **${current.position}** at **${current.company}** (${current.duration}, ${current.location}).\n\n${current.description}\n\n**Technologies:** ${current.technologies.join(', ')}`;
}

const suggestedQuestions = [
  "What are Bikash's skills?",
  "Tell me about his experience",
  "What projects has he built?",
  "What's his education?",
  "How can I contact him?",
];

export function getSuggestedQuestions(): string[] {
  return suggestedQuestions;
}

export function processMessage(input: string): ChatResponse {
  const n = normalize(input);

  // Greetings
  if (matchesAny(n, ['hello', 'hi', 'hey', 'howdy', 'greetings', 'good morning', 'good afternoon', 'good evening', 'sup', 'what\'s up'])) {
    return { text: getGreeting() };
  }

  // Thank you
  if (matchesAny(n, ['thank', 'thanks', 'thx', 'appreciate'])) {
    return { text: "You're welcome! Feel free to ask anything else about Bikash's portfolio." };
  }

  // Current role
  if (matchesAny(n, ['current role', 'current job', 'currently work', 'what does he do now', 'where does he work', 'present role', 'current position'])) {
    return { text: getCurrentRoleResponse() };
  }

  // Specific company/experience
  const specificExp = getSpecificExperience(n);
  if (specificExp) {
    return { text: specificExp };
  }

  // Specific project
  const specificProj = getSpecificProject(n);
  if (specificProj) {
    return { text: specificProj };
  }

  // Skills
  if (matchesAny(n, ['skill', 'technologies', 'tech stack', 'what can he do', 'what does he know', 'programming language', 'framework', 'tools'])) {
    return { text: getSkillsResponse() };
  }

  // Experience
  if (matchesAny(n, ['experience', 'work history', 'career', 'job', 'employment', 'worked', 'professional'])) {
    return { text: getExperienceResponse() };
  }

  // Education
  if (matchesAny(n, ['education', 'university', 'degree', 'study', 'academic', 'school', 'college', 'masters', 'bachelor'])) {
    return { text: getEducationResponse() };
  }

  // Projects
  if (matchesAny(n, ['project', 'portfolio', 'built', 'created', 'developed', 'showcase', 'work sample'])) {
    return { text: getProjectsResponse() };
  }

  // Certifications
  if (matchesAny(n, ['certification', 'certificate', 'certified', 'credential', 'course'])) {
    return { text: getCertificationsResponse() };
  }

  // Contact
  if (matchesAny(n, ['contact', 'reach', 'email', 'hire', 'connect', 'get in touch', 'linkedin', 'github'])) {
    return { text: getContactResponse() };
  }

  // About / Who
  if (matchesAny(n, ['who is', 'about', 'tell me about', 'introduce', 'summary', 'overview', 'background', 'bio'])) {
    return { text: getAboutResponse() };
  }

  // Location
  if (matchesAny(n, ['location', 'where', 'based', 'live', 'city', 'country', 'finland', 'helsinki'])) {
    return { text: getLocationResponse() };
  }

  // Technology-specific
  const techResponse = getTechResponse(n);
  if (techResponse) {
    return { text: techResponse };
  }

  // Design system
  if (matchesAny(n, ['design system', 'component library', 'storybook', 'ui library'])) {
    return { text: `Bikash specializes in **Design Systems**! At Metso, he led the development of UI libraries achieving 100,000+ npm downloads and earned the Metso Innovation Award 2024. He currently architects enterprise-grade design systems at Datadrivers Oy. His expertise includes React, Web Components, Storybook, and Tailwind CSS.` };
  }

  // Achievements / awards
  if (matchesAny(n, ['achievement', 'award', 'accomplishment', 'recognition'])) {
    return { text: `Notable achievements:\n\n• **Metso Innovation Award 2024** for UI/UX standardization and scalability\n• Design system libraries with **100,000+ npm downloads**\n• Architected enterprise-grade design systems from the ground up\n• Built ${projects.length} projects across various domains\n• Holds ${certifications.length} professional certifications\n• Master's degree from Åbo Akademi University` };
  }

  // Fallback
  return {
    text: `I'm not sure I understand that question. I can help you with:\n\n• **Skills & Technologies** — What Bikash knows\n• **Experience** — His work history\n• **Projects** — What he's built\n• **Education** — His academic background\n• **Certifications** — Professional credentials\n• **Contact** — How to reach him\n\nTry asking something like "${suggestedQuestions[Math.floor(Math.random() * suggestedQuestions.length)]}"`
  };
}
