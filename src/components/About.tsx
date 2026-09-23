import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { skills } from '@/data/portfolio';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-24 sm:py-28 lg:py-36 paper-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div><p className="section-kicker mb-4">02 / The operator behind the output</p><h2 className="display-font text-4xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.06em] text-foreground">
              {t('about.title')}
            </h2></div><p className="text-base sm:text-lg text-muted-foreground max-w-md lg:text-right">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Story card */}
            <Card className="border border-border bg-card shadow-none rounded-none">
              <CardContent className="p-4 lg:p-10">
                <h3 className="display-font text-2xl sm:text-3xl font-bold mb-8 text-foreground">{t('about.myJourney')}</h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    {t('about.description1')}
                  </p>
                  <p className="text-lg">
                    {t('about.description2')}
                  </p>
                  <p className="text-lg">
                    {t('about.description3')}
                  </p>
                  <p className="text-lg">
                    {t('about.description4')}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What I Value card */}
            <Card className="border-0 bg-[#d8f52b] text-[#14202f] shadow-none rounded-none">
              <CardContent className="p-8 lg:p-10">
                <h3 className="display-font text-2xl sm:text-3xl font-bold mb-8">{t('about.whatIValue')}</h3>
                <div className="space-y-4">
                  {[
                    t('about.value1'),
                    t('about.value2'),
                    t('about.value3'),
                    t('about.value4'),
                    t('about.value5')
                  ].map((value) => (
                    <div key={value} className="flex items-start gap-3 p-4 border-t border-[#14202f]/20">
                      <div className="w-2 h-2 bg-[#14202f] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills section */}
          <Card className="border border-border bg-card shadow-none rounded-none">
            <CardContent className="p-4 sm:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="display-font text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">
                  {t('about.technicalExpertise')}
                </h3>
                <div className="w-12 sm:w-16 h-1 bg-border mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <div className="bg-secondary/50 p-4 sm:p-6 border border-border">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="display-font font-bold text-lg sm:text-xl text-foreground mb-2 sm:mb-3">
                          {skillGroup.category}
                        </h4>
                        <div className="w-8 sm:w-12 h-1 bg-border rounded-full"></div>
                      </div>
                      
                      <div className="space-y-2 sm:space-y-3">
                        {skillGroup.items.map((skill) => (
                          <div
                            key={skill}
                            className="bg-background border border-border p-2 sm:p-3 hover:border-[#d8f52b] transition-colors duration-200"
                          >
                              <span className="text-muted-foreground font-medium text-sm sm:text-base">
                              {skill}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Skills summary */}
              <div className="mt-8 sm:mt-12 text-center">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-primary rounded-lg">
                  <span className="text-primary-foreground font-semibold text-sm sm:text-base">
                    {skills.reduce((total, group) => total + group.items.length, 0)}+ Technologies
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
