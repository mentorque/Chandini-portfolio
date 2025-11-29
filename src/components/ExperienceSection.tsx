import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "Delta India",
      location: "Pune, India",
      dates: "Jan 2024 – May 2025",
      responsibilities: [
        "Identified sales gaps across 500K+ records, driving corrective actions that boosted quarterly sales by 60%.",
        "Unified POS, CRM, and marketing data via SQL/Excel, improving data reliability by 90% and enabling €150K cost savings.",
        "Built Python time-series model revealing intent patterns, increasing conversions by 18% and optimizing budget allocation.",
        "Delivered Power BI insights that cut low-ROI spend by 25% and accelerated data-driven decisions across regions."
      ]
    },
    {
      title: "Data Analyst",
      company: "Tibco Software",
      location: "Pune, India",
      dates: "March 2021 – Aug 2022",
      responsibilities: [
        "Improved sales forecasting accuracy by 20% using SQL, Excel, and automated ETL pipelines on 5M+ records.",
        "Built Power BI dashboards with real-time insights across 12 units and 50+ KPIs, speeding decisions by 30%.",
        "Reduced stockouts by 15% by defining requirements and building predictive models for inventory planning.",
        "Improved new-product forecasting by 20% using A/B testing and statistical modeling across 10+ market segments."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-[hsl(var(--primary))] mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Professional experience in data analytics, business intelligence, and data-driven decision making
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-foreground mb-2">
                        {exp.title}
                      </CardTitle>
                      <h4 className="text-lg font-semibold text-[hsl(var(--primary))]">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <Badge variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))]">
                          {exp.dates}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[hsl(var(--primary))] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;