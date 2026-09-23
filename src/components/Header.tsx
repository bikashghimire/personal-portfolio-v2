import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { useTranslation } from '@/hooks/useTranslation';
import { personalInfo } from '@/data/portfolio';
import resumePdf from '@/assets/images/ghimire_bikash_cv.pdf';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      
      <header style={{ backgroundColor: isScrolled || isMenuOpen ? 'rgba(20, 32, 47, 0.95)' : 'rgba(20, 32, 47, 0.75)' }} className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled || isMenuOpen
          ? 'bg-white border-b border-[#f5f1e8]/15'
          : 'bg-transparent border-b border-[#f5f1e8]/10'
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
            className="display-font text-xl sm:text-2xl font-bold text-[#f5f1e8] hover:text-[#d8f52b] transition-colors cursor-pointer"
          >
            {personalInfo.name}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="mono-font text-[11px] uppercase tracking-[0.12em] text-[#c0c7ce] relative px-3 py-2 rounded-md transition-colors duration-200 hover:text-[#d8f52b] hover:bg-[#d8f52b]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8f52b]"
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
             <Button asChild
               variant="outline"
               className="rounded-none px-4 py-2 border-[#d8f52b] text-[#d8f52b] hover:bg-[#d8f52b] hover:text-[#14202f]"
             >
               <a href={resumePdf} download="ghimire_bikash_cv.pdf">Download Resume</a>
             </Button>
            {[
               { icon: Github, href: personalInfo.github, label: 'GitHub' },
               { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
               { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
            ].map((social, index) => (
              <Button 
                key={index} 
                variant="ghost" 
                size="icon" 
                asChild 
                 className="text-[#f5f1e8] hover:bg-[#d8f52b]/10 hover:text-[#d8f52b] border border-transparent hover:border-[#d8f52b]/40 rounded-full transition-colors"
              >
                <a href={social.href} target={social.href.startsWith('mailto:') ? undefined : '_blank'} rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'} aria-label={social.label}>
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
               className="text-[#f5f1e8] hover:text-[#d8f52b] transition-colors w-10 h-10 flex items-center justify-center"
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
           <nav className="py-4 border-t border-[#f5f1e8]/15 bg-[#14202f]">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                   className="text-left text-[#f5f1e8] font-medium py-3 px-4 rounded-md w-full transition-colors duration-200 hover:bg-[#d8f52b]/10 hover:text-[#d8f52b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8f52b]"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Social Links - Better spacing */}
               <div className="flex justify-center space-x-4 pt-4 mt-2 border-t border-[#f5f1e8]/15">
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
