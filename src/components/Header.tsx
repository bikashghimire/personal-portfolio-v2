import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/hooks/useLanguage';
import { personalInfo } from '@/data/portfolio';
import resumePdf from '@/assets/images/ghimire_bikash_cv.pdf';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  const downloadResume = async () => {
    try {
      const response = await fetch(resumePdf);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'ghimire_bikash_cv.pdf';
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch {
      // Fallback to opening the file if download fails
      window.open(resumePdf, '_blank');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Apply styles to body
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position and styles
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isMenuOpen]);

  type NavItem = {
    label: string;
    href: string;
    external?: boolean;
  };

  const navItems: NavItem[] = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.education'), href: '#education' },
    { label: t('nav.projects'), href: '#projects' },
    { label: 'Blog', href: 'https://bikashdev.netlify.app/blog', external: true },
    { label: t('nav.contact'), href: '#contact' }
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.href.startsWith('#')) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
      return;
    }
    const target = item.external ? '_blank' : '_self';
    window.open(item.href, target);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Backdrop overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 dark:bg-white/20 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      <header className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled || isMenuOpen
          ? 'bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800' 
          : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            type="button"
            aria-label="Go to top"
            onClick={() => {
              // Clear hash without reloading and smooth-scroll to top
              if (window.location.hash) {
                history.replaceState(null, '', window.location.pathname + window.location.search);
              }
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
            className="text-xl sm:text-2xl font-bold text-black dark:text-white hover:opacity-80 transition-opacity cursor-pointer"
          >
            {personalInfo.name}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="text-gray-900 dark:text-gray-100 font-medium relative px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-700"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageToggle />
            <ThemeToggle />
            <div className="w-px h-6 bg-black dark:bg-white"></div>
            <Button
              variant="outline"
              onClick={downloadResume}
              className="rounded-full px-4 py-2 border-gray-300 dark:border-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Download Resume
            </Button>
            {[
              { icon: Github, href: personalInfo.github },
              { icon: Linkedin, href: personalInfo.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` }
            ].map((social, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="icon" 
                asChild 
                className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-900 border border-transparent hover:border-gray-300 dark:hover:border-gray-700 rounded-full transition-colors"
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            ))}
          </div>

          {/* Mobile Actions - Fixed spacing and accessibility */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black dark:text-white hover:opacity-70 transition-opacity w-10 h-10 flex items-center justify-center"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Improved spacing and animation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <nav className="py-4 border-t-2 border-black dark:border-white bg-white dark:bg-black">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="text-left text-gray-900 dark:text-gray-100 font-medium py-3 px-4 rounded-md w-full transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-700"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Links - Better spacing */}
              <div className="flex justify-center space-x-4 pt-4 mt-2 border-t-2 border-black dark:border-white">
                {[
                  { icon: Github, href: personalInfo.github, label: 'GitHub' },
                  { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
                ].map((social) => (
                  <Button 
                    key={social.label} 
                    variant="ghost" 
                    size="icon" 
                    asChild 
                    className="text-gray-900 dark:text-gray-100 w-12 h-12 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 border border-transparent hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
                  >
                    <a 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;