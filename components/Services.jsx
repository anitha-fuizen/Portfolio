import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const serviceData = [
  {
    icon: <GanttChartSquare size={72} />,
    title: "Frontend Development",
    description: [
      {
        heading: "Responsive Design:",
        content: "Crafting visually pleasing interfaces that work well on any device"
      },
      {
        heading: "Technologies:",
        content: "Good at HTML, CSS, JavaScript, and frameworks like React"
      },
      {
        heading: "Performance Optimization:",
        content: "Ensuring fast load times and smooth user experiences."
      },
    ],
  },
  {
    icon: <Blocks size={72} />,
    title: "Backend Development",
    description: [
      {
        heading: "Server-Side Logic:",
        content: "Building scalable server-side applications with Node.js"
      },
      {
        heading: "API Development:",
        content: "Creating RESTful APIs for frontend-backend communication."
      },
      {
        heading: "Database Management:",
        content: "Designing and managing MongoDB and Supabase databases."
      },
    ],
  },
  {
    icon: <Gem size={72} />,
    title: "Full Stack Integration",
    description: [
      {
        heading: "End-to-End Solutions:",
        content: "Integrating frontend and backend for seamless applications."
      },
      {
        heading: "Version Control:",
        content: "Using Git for version control and collaboration."
      },
      {
        heading: "DevOps Practices:",
        content: "Implementing CI/CD pipelines for DevOps."
      },
    ],
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((item, index) => (
            <Card
              className="w-full max-w-[440px] h-auto flex flex-col pt-10 justify-center items-center relative mx-auto"
              key={index}
            >
              <CardHeader className="text-primary absolute -top-[60px]">
                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                  {item.icon}
                </div>
              </CardHeader>
              <CardContent className="text-center mt-4">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription className="text-lg mt-4">
                  {item.description.map((point, index) => (
                    <div key={index}>
                      <span className="font-bold text-start">{point.heading}</span>
                      <span>{point.content}</span>
                    </div>
                  ))}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
