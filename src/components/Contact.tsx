import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Github, Linkedin, Send, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

// Separate form component that can be remounted
const ContactForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [state, handleSubmit] = useForm('mqawaaob');

  useEffect(() => {
    if (state.succeeded) {
      onSuccess();
    }
  }, [state.succeeded, onSuccess]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-bold uppercase tracking-wide text-foreground">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full h-12 px-4 bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:border-[#b4d500] focus:ring-0 rounded-lg transition-all duration-300 font-medium"
          placeholder="Your name"
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          className="text-red-600 dark:text-red-400 text-sm mt-1"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-bold uppercase tracking-wide text-foreground">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full h-12 px-4 bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:border-[#b4d500] focus:ring-0 rounded-lg transition-all duration-300 font-medium"
          placeholder="your@email.com"
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-600 dark:text-red-400 text-sm mt-1"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-bold uppercase tracking-wide text-foreground">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 bg-background border-2 border-border text-foreground placeholder:text-muted-foreground focus:border-[#b4d500] focus:ring-0 resize-none rounded-lg transition-all duration-300 font-medium"
          placeholder="Tell me about your project..."
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-600 dark:text-red-400 text-sm mt-1"
        />
      </div>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-500 dark:border-red-400 rounded-lg">
          <p className="text-red-700 dark:text-red-300 font-medium text-center">
            Please fix the errors above and try again.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full h-14 bg-primary hover:bg-[#d8f52b] hover:text-[#14202f] border-2 border-primary text-primary-foreground font-black uppercase tracking-wide rounded-xl transition-all duration-300 group relative overflow-hidden shadow-[4px_4px_0px_0px_hsl(var(--primary)/0.25)] hover:shadow-[2px_2px_0px_0px_hsl(var(--primary)/0.25)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {state.submitting ? (
          <>
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

const Contact: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);

  // Reset form after showing success message
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        // Reset the form by changing the key to force re-mount
        setFormKey(prev => prev + 1);
      }, 2500); // Show success message for 2.5 seconds
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleFormSuccess = () => {
    setShowSuccess(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-32 paper-section overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 border border-primary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mb-8 bg-card border-2 border-border rounded-full shadow-[8px_8px_0px_0px_hsl(var(--primary)/0.2)] transition-all duration-300 group">
              <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-foreground group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h2 className="display-font text-4xl sm:text-6xl lg:text-7xl font-black mb-6 text-foreground leading-tight tracking-[-0.06em]">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-[#b4d500] mx-auto mb-6"></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Ready to collaborate? I'd love to hear about your project and discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="border border-border bg-card shadow-none transition-all duration-300 rounded-none">
                <CardContent className="p-8">
                  <h3 className="display-font text-2xl sm:text-3xl font-black mb-8 text-foreground">
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                      { icon: MapPin, label: 'Location', value: personalInfo.location, href: null }
                    ].map((contact) => (
                      <div 
                        key={contact.label} 
                        className="group p-6 border border-border bg-background hover:bg-secondary transition-all duration-300 cursor-pointer rounded-none"
                      >
                        {contact.href ? (
                          <a href={contact.href} className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 border-2 border-border flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 rounded-lg">
                              <contact.icon className="h-6 w-6 text-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                               <p className="text-sm font-semibold uppercase tracking-wide mb-1 text-foreground">
                                {contact.label}
                              </p>
                               <p className="text-base font-medium break-all text-foreground">
                                {contact.value}
                              </p>
                            </div>
                             <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:translate-x-2 transition-all duration-300" />
                          </a>
                        ) : (
                          <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-12 h-12 border-2 border-border flex items-center justify-center rounded-lg">
                              <contact.icon className="h-6 w-6 text-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold uppercase tracking-wide mb-1 text-foreground">
                                {contact.label}
                              </p>
                              <p className="text-base font-medium text-foreground">
                                {contact.value}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border border-border bg-card shadow-none transition-all duration-300 rounded-none">
                <CardContent className="p-8">
                  <h3 className="display-font text-2xl sm:text-3xl font-black mb-8 text-foreground">
                    Follow Me
                  </h3>
                  
                  <div className="flex flex-wrap gap-4">
                    {personalInfo.github && (
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-16 h-16 border border-border bg-background hover:bg-secondary transition-all duration-300 flex items-center justify-center relative overflow-hidden rounded-xl"
                        aria-label="GitHub"
                      >
                        <Github className="h-6 w-6 text-foreground relative z-10" />
                        <div className="absolute inset-0 bg-secondary scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      </a>
                    )}
                    {personalInfo.linkedin && (
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-16 h-16 border border-border bg-background hover:bg-secondary transition-all duration-300 flex items-center justify-center relative overflow-hidden rounded-xl"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-6 w-6 text-foreground relative z-10" />
                        <div className="absolute inset-0 bg-secondary scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border border-border bg-card shadow-none transition-all duration-300 rounded-none">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-border bg-background rounded-xl">
                    <Send className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="display-font text-2xl sm:text-3xl font-black mb-3 text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-muted-foreground font-light">
                    I'll get back to you within 24 hours
                  </p>
                </div>
                
                {showSuccess ? (
                  <div className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-400 rounded-full">
                      <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="display-font text-2xl sm:text-3xl font-black mb-3 text-foreground">
                      Thank You!
                    </h3>
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      Your form has been submitted successfully. I'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <ContactForm key={formKey} onSuccess={handleFormSuccess} />
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
