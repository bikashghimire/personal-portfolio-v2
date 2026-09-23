import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Download, ArrowUpRight, Radio, Sparkles } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { personalInfo } from '@/data/portfolio';
import resumePdf from '@/assets/images/ghimire_bikash_cv.pdf';

const ACCENT = 'bg-[#d8f52b] text-[#14202f] hover:bg-[#e6ff5e]';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    let animationFrame = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(216, 245, 43, ${particle.opacity})`;
        ctx.fill();
      });
      if (!prefersReducedMotion) animationFrame = requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-[#14202f] text-[#f5f1e8] grid-glow">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-25"
      />
      <div className="container mx-auto relative z-10 max-w-7xl pt-28 pb-16">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-20 items-end">
          <div>
            <div className="flex items-center gap-3 mb-8 animate-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#d8f52b]/40 bg-[#d8f52b]/10 px-3 py-1.5 mono-font text-xs uppercase tracking-[0.16em] text-[#d8f52b]"><Radio className="h-3 w-3" /> Open to work</span>
              <span className="mono-font text-xs text-[#a9b2bd]">{personalInfo.location}</span>
            </div>
            <div className="mb-8 animate-slide-up">
              <p className="mono-font text-sm text-[#d8f52b] mb-5">01 / SOFTWARE DEVELOPER</p>
              <h1 className="display-font text-[clamp(4rem,11vw,10rem)] font-bold leading-[0.84] tracking-[-0.08em] text-[#f5f1e8]">
                <span className="sr-only">Bikash Ghimire</span><span aria-hidden="true">Bikash<br /><span className="text-[#d8f52b]">Ghimire.</span></span>
              </h1>
              <span className="sr-only">Software Developer</span>
            </div>
            <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-[#c0c7ce] mb-10 leading-relaxed animate-fade-in delay-300">
              <span className="sr-only">{personalInfo.tagline}</span><span aria-hidden="true">{personalInfo.tagline}. <span className="text-[#f5f1e8]">I turn complex product problems into clear, durable interfaces.</span></span>
            </p>
            <div className="flex flex-col xs:flex-row gap-4 items-start animate-scale-in delay-500">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className={`group w-full xs:w-auto px-7 py-6 text-base font-bold rounded-none transition-all duration-300 ${ACCENT}`}
          >
            <span className="hidden sm:inline group-hover:translate-x-1 transition-transform duration-300">
              {t('hero.discoverJourney')}
            </span>
            <span className="sm:hidden group-hover:translate-x-1 transition-transform duration-300">
              {t('hero.learnMore')}
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="group w-full xs:w-auto px-7 py-6 text-base font-bold rounded-none border border-[#f5f1e8]/30 bg-transparent text-[#f5f1e8] hover:bg-[#f5f1e8] hover:text-[#14202f] transition-all duration-300"
          >
            <a href={resumePdf} download="ghimire_bikash_cv.pdf">
              <Download className="h-5 w-5 mr-3" />
              <span className="hidden sm:inline">{t('hero.downloadResume')}</span>
              <span className="sm:hidden">{t('hero.resume')}</span>
            </a>
          </Button>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in delay-500">
            <div className="border border-[#f5f1e8]/20 bg-[#1c2b3e]/80 p-5 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-[#f5f1e8]/15 pb-4 mb-5">
                <span className="mono-font text-xs text-[#a9b2bd]">CURRENT SIGNAL</span>
                <Sparkles className="h-4 w-4 text-[#d8f52b]" />
              </div>
              <div className="space-y-5">
                <div><p className="mono-font text-[10px] uppercase text-[#a9b2bd] mb-1">Focus</p><p className="display-font text-xl">Design systems</p></div>
                <div><p className="mono-font text-[10px] uppercase text-[#a9b2bd] mb-1">Stack</p><p className="display-font text-xl">React / TypeScript</p></div>
                <div><p className="mono-font text-[10px] uppercase text-[#a9b2bd] mb-1">Next move</p><p className="display-font text-xl text-[#d8f52b]">Build something useful</p></div>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-[#f5f1e8]/15 pt-4 mono-font text-[10px] uppercase text-[#a9b2bd]"><span>Helsinki, FI</span><ArrowUpRight className="h-4 w-4 text-[#d8f52b]" /></div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-20 mono-font text-xs uppercase tracking-[0.18em] text-[#a9b2bd] animate-bounce delay-1000">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="group rounded-full text-[#d8f52b] hover:bg-[#d8f52b]/10 w-10 h-10"
          >
            <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
          <span>Scroll to explore the archive</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
