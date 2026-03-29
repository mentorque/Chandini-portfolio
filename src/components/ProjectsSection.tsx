import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import jAndJImg from "@/assets/j&j.png";
import vodafoneImg from "@/assets/v.png";
import mentalHealthImg from "@/assets/mh.jpg";

type Project = {
  title: string;
  description: string;
  metrics: string[];
  stack: string[];
  image: string;
  /** `contain` shows the full image (zoomed out); default is cover */
  imageFit?: "cover" | "contain";
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "MyConcerta — multilingual site migration",
      description:
        "Led front-end delivery for a Johnson & Johnson patient-facing React experience with locale-specific content and role-aware navigation. Shipped a Google Maps–backed “find a treatment centre” flow using device location plus secure REST services. Introduced route- and component-level lazy loading with Jest and React Testing Library so teams could gate releases with automated UI checks.",
      metrics: [
        "15+ REST & vendor integrations",
        "Multi-market, role-based UX",
        "Lazy-loaded routes & Jest / RTL for core flows",
      ],
      stack: [
        "React",
        "JavaScript",
        "Jest",
        "React Testing Library",
        "Google Maps API",
        "REST",
      ],
      image: jAndJImg,
      imageFit: "contain",
    },
    {
      title: "Vodafone — client services platform",
      description:
        "Built sales, billing, and payment dashboards in React and TypeScript with Redux for predictable data flow across high-traffic modules. Partnered with backend and QA to harden releases through unit automation and UI consistency on Bootstrap-backed layouts—reducing regressions on payment and subscription workflows.",
      metrics: [
        "20+ internal REST integrations",
        "CSR- and partner-facing workflows at scale",
        "Up to 35% faster dashboard loads (splitting + lazy loading)",
      ],
      stack: [
        "React",
        "TypeScript",
        "Redux",
        "Bootstrap",
        "HTML5",
        "CSS",
        "REST",
      ],
      image: vodafoneImg,
    },
    {
      title: "Physical activity & mental health — ML study",
      description:
        "End-to-end analysis pipeline from cleaning lifestyle signals to training and comparing Logistic Regression, SVM, and Random Forest models. Applied scaling, feature construction, and SMOTE to address imbalance, then interpreted models to highlight sleep, screen time, and work hours as strong predictors of reported distress.",
      metrics: [
        "93% precision on hold-out evaluation",
        "80% recall on the positive class",
        "3 model families benchmarked + tuned",
      ],
      stack: [
        "Python",
        "scikit-learn",
        "pandas",
        "NumPy",
        "SMOTE",
        "Jupyter",
      ],
      image: mentalHealthImg,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Projects
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Selected work across enterprise React, API-heavy UIs, and applied machine learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col"
              >
                <div className="aspect-video overflow-hidden border-b border-border/50 bg-muted/30">
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
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1 pt-0">
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {project.metrics.map((m) => (
                      <li key={m} className="flex gap-2">
                        <span className="text-[hsl(var(--primary))] shrink-0 mt-1.5 w-1 h-1 rounded-full bg-current" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-foreground/70 mb-2">
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
