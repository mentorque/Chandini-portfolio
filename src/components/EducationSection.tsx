import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { GraduationCap, Calendar } from "lucide-react";
import cert1 from "@/assets/cert1-python-full-stack.png";
import cert2 from "@/assets/cert2-public-speaking.png";
import cert3 from "@/assets/cert3-internship.png";
import cert4 from "@/assets/cert4-training.png";

const EducationSection = () => {
  const [certDialogOpen, setCertDialogOpen] = useState(false);
  const [activeCertIndex, setActiveCertIndex] = useState<number | null>(null);

  const education = [
    {
      institution: "Dublin Business School",
      degree: "Postgraduate Diploma in Business Analytics",
      dates: "April 2024 – April 2025",
      grade: "",
      coursework: [
        "Data Analysis & Visualization",
        "Predictive Analytics & Machine Learning",
        "Business Intelligence",
        "Applied Research Methods",
        "Programming for Data Analytics (Python)",
      ],
    },
    {
      institution: "Coorg Institute of Technology",
      degree: "Bachelor of Engineering (Computer Science)",
      dates: "Aug 2017 – Aug 2021",
      grade: "",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "DBMS",
        "Web Technologies",
        "Software Engineering",
        "Cloud Computing",
        "Artificial Intelligence",
      ],
    }
  ];

  const certifications: Array<{
    title: string;
    issuer: string;
    date: string;
    description?: string;
    image: string;
  }> = [
    {
      title: "Python Full Stack Course (Certificate of Completion)",
      issuer: "Pentagon Space",
      date: "2021-2022",
      description:
        "Successfully completed Python Full Stack Course from Batch No: PS27MAY21PFS#0005 for the year 2021-22.",
      image: cert1,
    },
    {
      title: "Public Speaking Foundations (Certificate of Completion)",
      issuer: "LinkedIn Learning",
      date: "Jan 05, 2022",
      description:
        "Course completed on Jan 05, 2022 at 05:50PM UTC.",
      image: cert2,
    },
    {
      title: "Machine Learning & Artificial Intelligence (Certificate of Internship)",
      issuer: "Inventeron Technologies and Business Solutions LLP",
      date: "",
      description:
        "Completed internship in Machine Learning & Artificial Intelligence.",
      image: cert3,
    },
    {
      title: "Machine Learning (Certificate of Training)",
      issuer: "Internshala Trainings",
      date: "Jun 18, 2020 - Jul 30, 2020",
      description:
        "Successfully completed six weeks online training on Machine Learning (from 18th June, 2020 to 30th July, 2020).",
      image: cert4,
    },
  ];

  const activeCert =
    activeCertIndex !== null ? certifications[activeCertIndex] : null;

  const openCert = (index: number) => {
    setActiveCertIndex(index);
    setCertDialogOpen(true);
  };

  const handleCertDialogChange = (open: boolean) => {
    setCertDialogOpen(open);
    if (!open) {
      setActiveCertIndex(null);
    }
  };

  return (
    <section id="education" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
              Education
            </h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Academic background in business analytics and computer science.
            </p>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-[hsl(var(--primary))]" />
              Degrees
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 border-l-[hsl(var(--primary))]">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold text-foreground mb-2">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-2">
                      <p className="text-base font-medium text-[hsl(var(--primary))]">
                        {edu.institution}
                      </p>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{edu.dates}</span>
                      </div>
                    </div>
                  </CardHeader>
                  {edu.coursework.length > 0 && (
                    <CardContent>
                      <p className="font-semibold text-foreground mb-3">Key Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <Badge
                            key={courseIndex}
                            variant="secondary"
                            className="font-normal text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <div className="text-center mb-14">
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">
                Certifications
              </h3>
              <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
              <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Professional certificates and training credentials.
              </p>
            </div>

            <div className="grid md:grid-cols-1 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="rounded-lg border border-border/70 bg-card shadow-sm hover:shadow-md transition-shadow duration-200 border-l-4 border-l-[hsl(var(--primary))]"
                >
                  <CardHeader className="pb-4 space-y-3">
                    <CardTitle className="text-base font-semibold text-foreground">
                      {cert.title}
                    </CardTitle>
                    <p className="text-sm font-medium text-[hsl(var(--primary))]">
                      {cert.issuer}
                    </p>
                    {cert.date ? (
                      <p className="text-xs text-muted-foreground">{cert.date}</p>
                    ) : null}
                    {cert.description ? (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    ) : null}
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="w-fit border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-primary-foreground"
                      onClick={() => openCert(index)}
                    >
                      View certificate
                    </Button>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <Dialog open={certDialogOpen} onOpenChange={handleCertDialogChange}>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                {activeCert ? (
                  <>
                    <DialogHeader>
                      <DialogTitle>{activeCert.title}</DialogTitle>
                      <DialogDescription>
                        {activeCert.issuer}
                        {activeCert.date ? ` · ${activeCert.date}` : ""}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="rounded-md border bg-muted/30 p-2">
                      <img
                        src={activeCert.image}
                        alt={activeCert.title}
                        className="w-full max-h-[min(70vh,560px)] object-contain mx-auto"
                      />
                    </div>
                  </>
                ) : null}
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;