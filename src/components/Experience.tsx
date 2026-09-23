import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, CheckCircle, Building } from 'lucide-react';
import { experience } from '@/data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-28 lg:py-36 ink-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div><p className="mono-font text-xs uppercase tracking-[0.24em] text-[#d8f52b] mb-4">03 / The route so far</p><h2 className="display-font text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-[-0.06em]">
              Professional Journey
            </h2></div><p className="text-base sm:text-lg text-[#a9b2bd] max-w-md lg:text-right">
              Five years of growth across diverse companies and challenging projects
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line (centered on md+) */}
             <div className="absolute top-0 bottom-0 w-px bg-[#d8f52b]/40 left-8 md:left-1/2 transform md:-translate-x-1/2"></div>

            <div className="space-y-12 md:space-y-16">
              {experience.map((job, index) => (
                <div key={job.id} className="relative md:grid md:grid-cols-2">
                  {/* Timeline dot (centered on md+) */}
                   <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-[#d8f52b] rounded-full border-2 border-[#14202f]"></div>

                  <div className={`${index % 2 === 0 ? 'md:col-start-1 md:pr-10' : 'md:col-start-2 md:pl-10'} md:pb-0 pb-6`}> 
                   <Card className="border border-[#f5f1e8]/15 bg-[#1c2b3e] shadow-none rounded-none text-[#f5f1e8]">
                    <CardContent className="p-6 lg:p-8">
                      {/* Header with improved layout */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                        <div className="flex-1">
                          {/* Company and position info */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3 mb-3">
                               <div className="p-2 bg-secondary border border-border rounded-md">
                                 <Building className="h-5 w-5 text-muted-foreground" />
                              </div>
                            </div>
                          </div>
                          
                           <h3 className="mono-font text-xs uppercase tracking-[0.16em] text-[#d8f52b] mb-3">{job.position}</h3>
                           <h4 className="display-font text-2xl lg:text-3xl font-bold mb-4">{job.company}</h4>
                          
                          {/* Duration and location */}
                           <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-[#c0c7ce] mb-6">
                            <div className="flex items-center gap-2">
                               <Calendar className="h-4 w-4 text-[#d8f52b]" />
                              <span className="font-medium">{job.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                               <MapPin className="h-4 w-4 text-[#d8f52b]" />
                              <span className="font-medium">{job.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description with improved styling */}
                       <div className="mb-6">
                         <p className="text-[#c0c7ce] leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      {/* Content grid with better spacing */}
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Achievements */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 mb-4">
                             <div className="w-6 h-px bg-[#d8f52b]"></div>
                             <h5 className="font-semibold">Key Achievements</h5>
                          </div>
                          <ul className="space-y-3">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3">
                                 <CheckCircle className="h-4 w-4 text-[#d8f52b] mt-0.5 flex-shrink-0" />
                                 <span className="text-[#c0c7ce] leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 mb-4">
                             <div className="w-6 h-px bg-[#d8f52b]"></div>
                             <h5 className="font-semibold">Technologies</h5>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="outline" 
                                 className="text-xs py-1.5 px-3 bg-transparent border-[#f5f1e8]/25 text-[#c0c7ce]"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
