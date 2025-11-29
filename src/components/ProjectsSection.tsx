import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projectPrimates from "@/assets/project-primates.jpg";
import projectMolecular from "@/assets/project-molecular.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Amazon Sales Dashboard on Power BI",
      description: "Built an interactive Power BI dashboard with robust data modelling, DAX measures, and drill-through visuals to analyse sales, profit, delivery performance, and key KPIs (e.g., YoY sales, profit trends, payment modes) across regions, categories, and customer segments.",
      image: projectPrimates,
      technologies: ["Power BI", "DAX query", "CSV", "Data Visualization", "KPI Analysis"]
    },
    {
      title: "American Express Credit card fraud detection",
      description: "Built a multi-model classification architecture to overcome severe data sparsity and class imbalance (0.172% fraud rate), implementing and tuning various boosting algorithms (XGBoost, CatBoost, LightGBM).",
      image: projectMolecular,
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "XGBoost", "CatBoost", "LightGBM"]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Key projects showcasing expertise in data analytics, business intelligence, and machine learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-[hsl(var(--skill-bg))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-white transition-colors duration-200"
                      >
                        {tech}
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

export default ProjectsSection;
