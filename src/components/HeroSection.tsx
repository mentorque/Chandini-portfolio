import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin } from "lucide-react";
// Profile image - Update this path when you upload Prasad Katore's profile image
const prasadProfile = "/lovable-uploads/f858798f-d2d0-4dab-a9a1-a46c04b5abdd.png";
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
        backgroundImage: `linear-gradient(135deg, rgba(220, 25, 6, 0.9), rgba(250, 84, 20, 0.8)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background video */}
<div className="absolute inset-0">
  <video
    autoPlay
    loop
    muted
    playsInline
    poster={heroBackground}     // fallback image while video loads
    className="w-full h-full object-cover"
  >
    <source
      src="https://videos.pexels.com/video-files/1722882/1722882-uhd_2560_1440_25fps.mp4"
      type="video/mp4"
    />
  </video>
  {/* Optional dark overlay for readability */}
  <div className="absolute inset-0 bg-black/50" />
</div>

      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8 animate-scale-in flex justify-center">
          <img
            src={prasadProfile}
            alt="Prasad Katore"
            className="w-56 h-56 rounded-full border-4 border-white shadow-glow object-cover object-center animate-float"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight animate-fade-in">
          Prasad Katore
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed animate-slide-up">
          Data Analyst with 3+ years of experience in building dashboards, automating data workflows, and analyzing large datasets
        </p>
        
        <div className="flex items-center justify-center space-x-2 text-white/80 mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
          <MapPin className="w-5 h-5 text-accent animate-glow" />
          <span className="text-lg">Dublin, Ireland</span>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up" style={{animationDelay: '0.4s'}}>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-primary hover:shadow-glow text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-elegant hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </Button>
          <Button 
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            className="border-2 border-white bg-white/10 backdrop-blur text-white hover:bg-white hover:text-[hsl(var(--hero-bg))] font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white animate-glow" />
      </div>
    </section>
  );
};

export default HeroSection;
