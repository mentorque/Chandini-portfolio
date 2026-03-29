import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Linkedin, GraduationCap, Calendar, Globe, Award } from "lucide-react";

const AboutSection = () => {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Dublin, Ireland" },
    { icon: GraduationCap, label: "Education", value: "Postgraduate Diploma in Business Analytics" },
    { icon: Calendar, label: "Experience", value: "2+ years" },
    { icon: Globe, label: "Focus", value: "React, TypeScript, enterprise frontend" },
  ];

  const contactInfo = [
    { icon: Mail, value: "krishnegowdachandini@gmail.com", href: "mailto:krishnegowdachandini@gmail.com" },
    { icon: MapPin, value: "Dublin, Ireland", href: "" },
    { icon: Linkedin, value: "LinkedIn", href: "https://www.linkedin.com/in/chandinikrishna/" },
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              About
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5 text-base text-muted-foreground leading-relaxed">
              <p>
                Software Engineer with 2+ years of experience developing scalable enterprise web applications using React, TypeScript, and modern frontend technologies.
              </p>
              <p>
                Engineered platforms for Nutanix (DRaaS) and Johnson &amp; Johnson, delivering performance improvements, real-time data solutions, and user-focused interfaces.
              </p>
              <p>
                Passionate about building clean, maintainable code and optimizing user experience through data-driven decisions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-card border border-border/60 shadow-sm hover:border-[hsl(var(--primary))]/30 transition-colors duration-200"
                  >
                    <contact.icon className="w-5 h-5 text-[hsl(var(--primary))] shrink-0" />
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-[hsl(var(--primary))] transition-colors text-sm break-all"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium text-sm">{contact.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />
                    Quick facts
                  </h4>
                  <div className="space-y-6">
                    {quickFacts.map((fact, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 pb-4 border-b border-border last:border-0 last:pb-0"
                      >
                        <div className="flex-shrink-0 mt-1">
                          <fact.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground text-sm uppercase tracking-wide">
                            {fact.label}
                          </p>
                          <p className="text-muted-foreground mt-1 font-medium text-sm">{fact.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
