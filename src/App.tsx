import { useEffect, useState } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Chatbot from './components/Chatbot';
import SEO from './components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import './App.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [plausibleLoaded, setPlausibleLoaded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Inject Plausible analytics (domain from current host)
  useEffect(() => {
    if (plausibleLoaded) return;
    const script = document.createElement('script');
    script.defer = true;
    script.setAttribute('data-domain', window.location.hostname);
    script.src = 'https://plausible.io/js/script.js';
    script.onload = () => setPlausibleLoaded(true);
    document.head.appendChild(script);
    return () => {
      if (script && script.parentNode) script.parentNode.removeChild(script);
    };
  }, [plausibleLoaded]);

  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <div className="min-h-screen bg-background transition-colors duration-300">
          <SEO />
          <Header />
          <main>
            <Hero />
            <Skills />
            <About />
            <Experience />
            <Education />
            <Certifications />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <Chatbot />
          {showScrollTop && (
            <div className="fixed bottom-6 right-6 z-50">
              <Button
                onClick={handleScrollTop}
                className="h-12 w-12 rounded-full p-0 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 shadow-lg border border-gray-300 dark:border-gray-700"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;