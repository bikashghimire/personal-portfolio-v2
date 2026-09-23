import React, { createContext, useEffect, useState, ReactNode } from 'react';

export type Language = 'en' | 'fi';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation strings
const translations = {
  en: {
    // Navigation translations
    'nav.about': 'About',
    'nav.experience': 'Experience', 
    'nav.education': 'Education',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    // Hero translations
    'hero.discoverJourney': 'Discover My Journey',
    'hero.learnMore': 'Learn More',
    'hero.downloadResume': 'Download Resume',
    'hero.resume': 'Resume',
    // About translations
    'about.title': 'About Me',
    'about.subtitle': 'Developer expertise on building scalable, modern UIs using clean architecture and strong design system principles',
    'about.myJourney': 'My Journey',
    'about.description1': 'I\'m a Developer expertise on building scalable, modern UIs using clean architecture and strong design system principles.',
    'about.description2': 'Currently, I work at Datadrivers Oy, where I build reusable component libraries with React and TypeScript, helping teams ship faster and more consistently.',
    'about.description3': 'Previously, at Metso, I contributed to maintaining two major design systems used across multiple product teams in a large-scale enterprise environment.',
    'about.description4': 'I\'m also pursuing a Master\'s in Information Technology at Åbo Akademi University, specializing in Generative AI and Software Engineering.',
    'about.whatIValue': 'What I Value',
    'about.value1': 'Component-Driven Development with React, TypeScript & Storybook',
    'about.value2': 'Focus on UI consistency, accessibility, and design system best practices',
    'about.value3': 'Strong collaboration with design, product, and back-end teams',
    'about.value4': 'Advocate for testing, documentation, and code maintainability',
    'about.value5': 'Always learning and building especially where front-end meets AI and emerging tech',
    'about.quickFacts': 'Quick Facts',
    'about.experience': 'Experience',
    'about.companies': 'Companies',
    'about.projects': 'Projects',
    'about.education': 'Education',
    'about.location': 'Location',
    'about.technicalExpertise': 'Technical Expertise',
    // Contact translations
    'contact.title': 'Ready to bring your ideas to life? Let\'s discuss your next project or just have a conversation',
    'contact.getInTouch': 'Get in Touch',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    // Footer translations
    'footer.description': 'Developer expertise on building scalable, modern UIs using clean architecture and strong design system principles.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.about': 'About',
    'footer.experience': 'Experience',
    'footer.projects': 'Projects',
    'footer.contact': 'Contact',
    'footer.webDevelopment': 'Web Development',
    'footer.frontendDevelopment': 'Frontend Development',
    'footer.backendDevelopment': 'Backend Development',
    'footer.technicalConsulting': 'Technical Consulting',
    'footer.copyright': 'All rights reserved.',
    'footer.madeWith': 'Made with',
    'footer.using': 'using React & Tailwind CSS',
  },
  fi: {
    // Navigation translations
    'nav.about': 'Tietoja',
    'nav.experience': 'Kokemus',
    'nav.education': 'Koulutus', 
    'nav.projects': 'Projektit',
    'nav.contact': 'Yhteystiedot',
    // Hero translations
    'hero.discoverJourney': 'Tutustu Matkaani',
    'hero.learnMore': 'Lue Lisää',
    'hero.downloadResume': 'Lataa CV',
    'hero.resume': 'CV',
    // About translations
    'about.title': 'Tietoja Minusta',
    'about.subtitle': 'Kehittäjä, joka on erikoistunut skaalautuvien, modernien käyttöliittymien rakentamiseen puhtaan arkkitehtuurin ja vahvojen suunnittelujärjestelmien periaatteiden avulla',
    'about.myJourney': 'Matkani',
    'about.description1': 'Olen kehittäjä, joka on erikoistunut skaalautuvien, modernien käyttöliittymien rakentamiseen puhtaan arkkitehtuurin ja vahvojen suunnittelujärjestelmien periaatteiden avulla.',
    'about.description2': 'Tällä hetkellä työskentelen Datadrivers Oy:ssä, jossa rakennan uudelleenkäytettäviä komponenttikirjastoja Reactilla ja TypeScriptillä, auttaen tiimejä toimittamaan nopeammin ja johdonmukaisemmin.',
    'about.description3': 'Aiemmin Metsossa osallistuin kahden suuren suunnittelujärjestelmän ylläpitoon, joita käytetään useissa tuotetiimeissä suuressa yritysympäristössä.',
    'about.description4': 'Opiskelen myös Åbo Akademin yliopistossa tietotekniikan maisterin tutkintoa, erikoistuen generatiiviseen tekoälyyn ja ohjelmistotekniikkaan.',
    'about.whatIValue': 'Mitä Arvostan',
    'about.value1': 'Komponenttipohjainen kehitys Reactilla, TypeScriptillä ja Storybookilla',
    'about.value2': 'Keskittyminen käyttöliittymän johdonmukaisuuteen, saavutettavuuteen ja suunnittelujärjestelmien parhaisiin käytäntöihin',
    'about.value3': 'Vahva yhteistyö suunnittelu-, tuote- ja backend-tiimien kanssa',
    'about.value4': 'Testauksen, dokumentoinnin ja koodin ylläpidettävyyden puolestapuhuja',
    'about.value5': 'Jatkuva oppiminen ja rakentaminen erityisesti siellä, missä frontend kohtaa tekoälyn ja uusien teknologioiden',
    'about.quickFacts': 'Nopeat Tiedot',
    'about.experience': 'Kokemus',
    'about.companies': 'Yritykset',
    'about.projects': 'Projektit',
    'about.education': 'Koulutus',
    'about.location': 'Sijainti',
    'about.technicalExpertise': 'Tekninen Osaaminen',
    // Contact translations
    'contact.title': 'Valmis toteuttamaan ideasi? Keskustellaan seuraavasta projektistasi tai jutellaan vain',
    'contact.getInTouch': 'Ota Yhteyttä',
    'contact.email': 'Sähköposti',
    'contact.phone': 'Puhelin',
    'contact.location': 'Sijainti',
    // Footer translations
    'footer.description': 'Kehittäjä, joka on erikoistunut skaalautuvien, modernien käyttöliittymien rakentamiseen puhtaan arkkitehtuurin ja vahvojen suunnittelujärjestelmien periaatteiden avulla.',
    'footer.quickLinks': 'Pikavalinnat',
    'footer.services': 'Palvelut',
    'footer.about': 'Tietoja',
    'footer.experience': 'Kokemus',
    'footer.projects': 'Projektit',
    'footer.contact': 'Yhteystiedot',
    'footer.webDevelopment': 'Web-kehitys',
    'footer.frontendDevelopment': 'Frontend-kehitys',
    'footer.backendDevelopment': 'Backend-kehitys',
    'footer.technicalConsulting': 'Tekninen konsultointi',
    'footer.copyright': 'Kaikki oikeudet pidätetään.',
    'footer.madeWith': 'Tehty',
    'footer.using': 'käyttäen React & Tailwind CSS',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() =>
    localStorage.getItem('portfolio-language') === 'fi' ? 'fi' : 'en'
  );

  useEffect(() => {
    localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

