import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Front-End Technologies",
      skills: [
        "Angular",
        "React.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Sass",
        "Responsive Web Design",
      ],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Redux", "RxJS", "React Router", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "UI / UX Development",
      skills: ["Reusable UI Components", "Cross-Browser Compatibility", "Accessibility (WCAG)", "Semantic HTML"],
    },
    {
      title: "API Integration",
      skills: ["REST APIs", "GraphQL", "Axios", "JSON"],
    },
    {
      title: "Testing",
      skills: ["Jest", "React Testing Library", "Cypress"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "GitHub", "CircleCI", "CI/CD Pipelines", "Jira", "Confluence", "Visual Studio Code"],
    },
    {
      title: "Cloud Platforms",
      skills: ["AWS (S3, Lambda)"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Technical skills
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Front-end development, APIs, testing, delivery tooling, and cloud-connected apps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="rounded-lg border border-border/70 bg-[hsl(var(--skill-bg))] shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="rounded-lg border-0 bg-[hsl(var(--primary))] px-3.5 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-[hsl(var(--primary))]/90"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default SkillsSection;