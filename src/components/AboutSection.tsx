import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Linkedin, GraduationCap, Calendar, Globe, Award } from "lucide-react";

const AboutSection = () => {
  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Dublin, Ireland" },
    { icon: GraduationCap, label: "Education", value: "Postgraduate Diploma in Business Analytics" },
    { icon: Calendar, label: "Experience", value: "2+ years" },
    { icon: Globe, label: "Specialization", value: "React, TypeScript, REST APIs, SaaS Applications" },
  ];

  const contactInfo = [
    { icon: Phone, value: "0852797116" },
    { icon: Mail, value: "krishnegowdachandini@gmail.com" },
    { icon: MapPin, value: "Dublin, Ireland" },
    { icon: Linkedin, value: "LinkedIn", href: "https://www.linkedin.com/in/chandinikrishna/" },
  ];

  return (
    <section id="about" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Professional summary
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content - Takes 2/3 of the space */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold text-foreground mb-5">
                Overview
              </h3>
              
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Software Developer with 2+ years of experience building scalable SaaS applications and enterprise dashboards using React, TypeScript, and JavaScript. Experienced in high-performance UI components, REST API integrations, and cloud-connected web apps—including the Nutanix Prism Desktop as a Service (DaaS) surface—shipping performance-focused work in Agile teams.
              </p>

              {/* Contact Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 hover:bg-white transition-colors duration-200">
                    <contact.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                    {contact.href ? (
                      <a href={contact.href} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-[hsl(var(--primary))] transition-colors">
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-foreground font-medium">{contact.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts Sidebar - Takes 1/3 of the space */}
            <div className="lg:col-span-1">
              <Card className="rounded-lg border border-border/70 bg-card shadow-sm">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-foreground mb-6 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />
                    Quick Facts
                  </h4>
                  <div className="space-y-6">
                    {quickFacts.map((fact, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                        <div className="flex-shrink-0 mt-1">
                          <fact.icon className="w-5 h-5 text-[hsl(var(--primary))]" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground text-sm uppercase tracking-wide">
                            {fact.label}:
                          </p>
                          <p className="text-muted-foreground mt-1 font-medium">{fact.value}</p>
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