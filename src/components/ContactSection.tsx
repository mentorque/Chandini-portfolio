import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "0852797116",
      href: "tel:0852797116"
    },
    {
      icon: Mail,
      label: "Email",
      value: "krishnegowdachandini@gmail.com",
      href: "mailto:krishnegowdachandini@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dublin, Ireland",
      href: ""
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "LinkedIn",
      href: "https://www.linkedin.com/in/chandinikrishna/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Get in touch
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Open to roles and collaborations in React, TypeScript, and enterprise SaaS delivery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6 text-center">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="flex-shrink-0">
                        <info.icon className="w-7 h-7 text-[hsl(var(--primary))]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-1">{info.label}</h4>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-muted-foreground hover:text-[hsl(var(--primary))] transition-colors duration-200 text-sm break-words"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;