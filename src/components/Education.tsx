import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '@/data/portfolio';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 sm:py-28 lg:py-36 paper-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="display-font text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-[-0.06em] text-foreground">
              Education
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <Card key={edu.id} className="overflow-hidden border border-border bg-card shadow-none rounded-none">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex justify-center items-center w-12 h-12 bg-secondary border border-border rounded-full">
                      <GraduationCap className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="display-font text-xl font-semibold text-foreground mb-2">{edu.degree}</h3>
                      <h4 className="text-lg font-medium mb-2 text-foreground">{edu.institution}</h4>
                      <div className="flex flex-col xs:flex-row xs:flex-wrap gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                           <Calendar className="h-4 w-4 text-[#b4d500]" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                           <MapPin className="h-4 w-4 text-[#b4d500]" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 text-foreground">Key Coursework</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs py-1 px-2 bg-secondary border-border text-muted-foreground rounded-none">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3 text-foreground">Achievements</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                         <li key={i} className="flex items-start gap-2 p-3 bg-secondary border border-border">
                           <Award className="h-4 w-4 text-[#b4d500] mt-0.5 flex-shrink-0" />
                           <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
