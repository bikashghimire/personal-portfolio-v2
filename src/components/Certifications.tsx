import React from 'react';
import { certifications } from '@/data/portfolio';

const Certifications: React.FC = () => {
  return (
    <section className="py-24 sm:py-28 lg:py-36 paper-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="display-font text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-[-0.06em] text-foreground">
              Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.id} 
                className="group p-6 bg-card border border-border hover:-translate-y-1 hover:border-[#b4d500] transition-all duration-300 rounded-none"
              >
                <div className="mb-4">
                  <h3 className="display-font text-lg font-semibold text-foreground mb-2 leading-snug">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-medium">{cert.issuer}</span> • {cert.date}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.tags?.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-secondary border border-border text-muted-foreground rounded-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={cert.image} 
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground font-medium rounded-none hover:bg-primary/90 transition-all duration-300 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>View Certificate</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
