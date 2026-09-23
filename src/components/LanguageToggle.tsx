import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

type LanguageToggleProps = {
  className?: string;
};

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className }) => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'fi' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className={`text-xs font-medium border-[#d8f52b] bg-transparent hover:bg-[#d8f52b] hover:text-[#14202f] ${className ?? 'text-foreground'}`}
    >
      {language === 'en' ? 'FI' : 'EN'}
    </Button>
  );
};

export default LanguageToggle;
