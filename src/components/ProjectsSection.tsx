import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import jAndJImg from "@/assets/j&j.png";
import mentalHealthImg from "@/assets/mh.jpg";

type Project = {
  title: string;
  subtitle?: string;
  highlights: string[];
  stack: string[];
  image: string;
  imageFit?: "cover" | "contain";
  links?: { label: string; href: string }[];
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "AI Interview Prep & Resume Analyzer",
      highlights: [
        "Built a full-stack app with React and Node.js: JWT auth, PDF resume upload and parsing, and Groq LLaMA–powered analysis.",
        "Surfaces match, ATS, and resume scores; generates technical and behavioral (STAR) questions, skill gaps, missing keywords, a 7-day prep roadmap, and recent report history with download.",
        "Deployed the frontend on Vercel and the API on Render (free tier may cold-start on first load).",
      ],
      stack: ["JavaScript" ,"React", "Node.js","Groq", "JWT", "PDF", "Vercel", "Render"],
      image: "/ai-interview-prep-login.png",
      links: [
        { label: "Live app", href: "https://ai-interview-frontend-puce.vercel.app" },
        { label: "GitHub", href: "https://github.com/krishnegowdachandini-tech/interview-ai-yt" },
      ],
    },
    {
      title: "Nutanix Prism DRaaS Dashboard",
      highlights: [
        "Built responsive enterprise dashboards for the Nutanix Prism DRaaS platform using React and TypeScript.",
        "Integrated 8+ REST APIs to display real-time infrastructure and disaster recovery data.",
        "Improved application performance by 35% through modularized code and optimized rendering.",
      ],
      stack: ["React", "TypeScript", "Redux", "REST APIs"],
      image: "/nutanix-tech-partner-logo.png",
      imageFit: "contain",
    },
    {
      title: "Johnson & Johnson + Vodafone Platform",
      highlights: [
        "Developed a multilingual web application for Johnson & Johnson supporting global users with localization features.",
        "Built enterprise dashboards for Vodafone CSM platform including sales, billing, and payment systems.",
        "Implemented Redux state management and reduced UI bugs by ~25% through consistent architecture.",
      ],
      stack: ["React", "TypeScript", "Redux", "i18next", "REST APIs"],
      image: jAndJImg,
      imageFit: "contain",
    },
    {
      title: "Mental Health Prediction System",
      highlights: [
        "Built machine learning models (Logistic Regression, SVM, Random Forest) to predict mental health outcomes.",
        "Achieved 93% precision and 80% recall using feature engineering and data preprocessing techniques.",
      ],
      stack: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
      image: mentalHealthImg,
    },
    {
      title: "Smart Eye for Visually Impaired",
      subtitle: "AI-Based Guidance System · August 2021",
      highlights: [
        "Designed and developed an AI-based portable assistance system to support visually impaired individuals in navigating indoor environments safely. Analyzed real-world user challenges and translated them into functional system requirements for practical usability.",
        "Implemented real-time object detection and image processing for obstacle identification and spatial awareness. Integrated sensors and camera modules to detect object position and environmental changes.",
        "Developed voice-based audio guidance to notify users about obstacles and directional movement. Collaborated on system design, hardware integration, testing, documentation, and final project presentation.",
      ],
      stack: [
        "Python",
        "OpenCV",
        "YOLO",
        "Raspberry Pi",
        "IR Sensors",
        "Ultrasonic Sensors",
        "Pi Camera",
        "Text-to-Speech",
      ],
      image: "/photo-1542647879-d84f68115c67.avif",
      imageFit: "cover",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Projects
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Enterprise UIs, global platforms, ML, and embedded AI systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="rounded-lg border border-border/70 bg-card shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
              >
                <div className="aspect-video overflow-hidden border-b border-border/50 bg-white">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={
                      project.imageFit === "contain"
                        ? "w-full h-full object-contain object-center p-3 sm:p-4"
                        : "w-full h-full object-cover"
                    }
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-foreground leading-snug">
                    {project.title}
                  </CardTitle>
                  {project.subtitle ? (
                    <p className="text-sm font-medium text-[hsl(var(--primary))] mt-1">
                      {project.subtitle}
                    </p>
                  ) : null}
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1 pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                    {project.highlights.map((line) => (
                      <li key={line.slice(0, 48)} className="flex gap-2.5 leading-relaxed">
                        <span className="text-[hsl(var(--primary))] shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-current" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-2">
                      Tech stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="font-normal text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {project.links?.length ? (
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[hsl(var(--primary))] font-medium hover:underline underline-offset-2"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
