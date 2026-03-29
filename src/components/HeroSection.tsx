import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin } from "lucide-react";
import profileImage from "@/assets/chandiniprofile.jpg";
import heroBackground from "@/assets/hero-background-modern.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const section = document.querySelector("#contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const section = document.querySelector("#about");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(180deg, hsl(220 28% 12% / 0.92) 0%, hsl(220 25% 8% / 0.94) 100%), url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 flex justify-center animate-fade-in">
          <img
            src={profileImage}
            alt="Chandini Krishnegowda"
            className="w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-white/40 shadow-lg object-cover object-center"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-4 tracking-tight animate-fade-in">
          Chandini Krishnegowda
        </h1>

        <p className="text-lg md:text-xl text-white/85 mb-4 max-w-2xl mx-auto leading-relaxed animate-slide-up font-normal">
          Software Developer with 2+ years of experience building scalable SaaS applications and enterprise dashboards using React, TypeScript, and JavaScript.
        </p>

        <div
          className="flex items-center justify-center gap-2 text-white/75 mb-10 animate-slide-up"
          style={{ animationDelay: "0.15s" }}
        >
          <MapPin className="w-4 h-4 shrink-0 opacity-90" />
          <span className="text-base font-normal">Dublin, Ireland</span>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-3 justify-center mb-12 animate-slide-up"
          style={{ animationDelay: "0.25s" }}
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-primary-foreground font-medium px-8 py-6 text-base rounded-lg shadow-md transition-colors duration-200"
          >
            Get in touch
          </Button>
          <Button
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            className="border border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-medium px-8 py-6 text-base rounded-lg transition-colors duration-200"
          >
            Learn more
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50">
        <ChevronDown className="w-7 h-7" aria-hidden />
      </div>
    </section>
  );
};

export default HeroSection;
