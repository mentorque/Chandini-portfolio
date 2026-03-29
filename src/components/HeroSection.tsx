import { Button } from "@/components/ui/button";
import { ChevronDown, Download } from "lucide-react";
import profileImage from "@/assets/chandiniprofile.jpg";
import heroBackground from "@/assets/hero-background-modern.jpg";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
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
      <div className="container mx-auto px-4 text-center relative z-10 pt-20 pb-16">
        <div className="mb-8 flex justify-center animate-fade-in">
          <img
            src={profileImage}
            alt="Chandini Krishnegowda"
            className="w-52 h-52 md:w-56 md:h-56 rounded-full border-2 border-white/40 shadow-lg object-cover object-center"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold text-white mb-3 tracking-tight animate-fade-in font-space-grotesk">
          Chandini Krishnegowda
        </h1>

        <p className="text-lg md:text-xl text-white/95 mb-6 max-w-2xl mx-auto font-medium animate-slide-up">
          Software Engineer | React | TypeScript | Frontend Specialist
        </p>

        <p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up px-2">
          Building scalable, high-performance web applications with modern JavaScript frameworks and enterprise-level impact.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-3 justify-center mb-12 animate-slide-up"
          style={{ animationDelay: "0.15s" }}
        >
          <Button
            type="button"
            onClick={scrollToProjects}
            size="lg"
            className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-primary-foreground font-medium px-8 py-6 text-base rounded-lg shadow-md transition-all duration-200 hover:scale-[1.02]"
          >
            View Projects
          </Button>
          <Button
            type="button"
            size="lg"
            variant="outline"
            className="border border-white/50 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 font-medium px-8 py-6 text-base rounded-lg transition-all duration-200 hover:scale-[1.02] gap-2"
            asChild
          >
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50" aria-hidden>
        <ChevronDown className="w-7 h-7" />
      </div>
    </section>
  );
};

export default HeroSection;
