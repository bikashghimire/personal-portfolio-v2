import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from '@/hooks/useTranslation';
import { skills } from '@/data/portfolio';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
              {t('about.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Story card */}
            <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-sm">
              <CardContent className="p-4 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white">{t('about.myJourney')}</h3>
                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
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
            <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-sm">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white">{t('about.whatIValue')}</h3>
                <div className="space-y-4">
                  {[
                    t('about.value1'),
                    t('about.value2'),
                    t('about.value3'),
                    t('about.value4'),
                    t('about.value5')
                  ].map((value) => (
                    <div key={value} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                      <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills section */}
          <Card className="border-2 border-black dark:border-white bg-white dark:bg-black shadow-sm">
            <CardContent className="p-4 sm:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-black dark:text-white">
                  {t('about.technicalExpertise')}
                </h3>
                <div className="w-12 sm:w-16 h-1 bg-gray-300 dark:bg-gray-700 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800">
                      <div className="mb-4 sm:mb-6">
                        <h4 className="font-bold text-lg sm:text-xl text-black dark:text-white mb-2 sm:mb-3">
                          {skillGroup.category}
                        </h4>
                        <div className="w-8 sm:w-12 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                      </div>
                      
                      <div className="space-y-2 sm:space-y-3">
                        {skillGroup.items.map((skill) => (
                          <div
                            key={skill}
                            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-md sm:rounded-lg p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                          >
                            <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
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
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-black dark:bg-white rounded-lg">
                  <span className="text-white dark:text-black font-semibold text-sm sm:text-base">
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