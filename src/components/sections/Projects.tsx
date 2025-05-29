import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, X } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: "web" | "mobile" | "design";
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  detailedDescription: string;
  challenges: string;
  solutions: string;
  outcomes: string;
};

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with cart, payments, and admin dashboard.",
    thumbnail: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    detailedDescription: "This e-commerce platform was built to provide small businesses with an affordable way to sell products online. It features a responsive design, product categorization, search functionality, shopping cart, secure payment processing, and an admin dashboard for inventory management.",
    challenges: "The main challenges included implementing a secure payment system, optimizing database queries for product searches, and ensuring a responsive design across all devices.",
    solutions: "I implemented Stripe for secure payments, created indexed MongoDB queries for faster search results, and used a mobile-first design approach with CSS Grid and Flexbox for responsive layouts.",
    outcomes: "The platform resulted in a 40% increase in online sales for client businesses and reduced cart abandonment by 25% through an optimized checkout process."
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative task tracking application with real-time updates and team features.",
    thumbnail: "https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "Firebase", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    detailedDescription: "This task management application helps teams collaborate effectively by providing real-time updates on task status, deadlines, and assignments. It includes features like task categorization, priority levels, deadline notifications, and team communication tools.",
    challenges: "Real-time synchronization across multiple users was a significant challenge, as well as managing complex state with multiple task relationships and dependencies.",
    solutions: "I utilized Firebase Realtime Database for instant data synchronization and implemented a custom state management solution with React Context API and reducers for handling complex state interactions.",
    outcomes: "Teams reported a 30% increase in productivity after implementing this solution, with improved accountability and clearer communication around task ownership."
  },
  {
    id: "3",
    title: "Fitness Tracking Mobile App",
    description: "A cross-platform mobile application for tracking workouts and nutrition.",
    thumbnail: "https://images.pexels.com/photos/2729899/pexels-photo-2729899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "mobile",
    technologies: ["React Native", "GraphQL", "Node.js", "MongoDB"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    detailedDescription: "This fitness tracking app allows users to log workouts, track nutrition, set goals, and visualize progress over time. It includes features like custom workout creation, exercise libraries, nutritional database integration, and progress analytics.",
    challenges: "The main challenges were optimizing performance on older devices, implementing accurate analytics for various fitness metrics, and creating an intuitive UI for complex data entry.",
    solutions: "I implemented lazy loading for app components, created custom algorithms for fitness calculations, and conducted extensive user testing to refine the UI/UX for optimal usability.",
    outcomes: "The app achieved a 4.8/5 star rating on app stores with users particularly praising the intuitive interface and comprehensive tracking capabilities."
  },
  {
    id: "4",
    title: "Financial Dashboard",
    description: "An interactive dashboard for visualizing financial data and transactions.",
    thumbnail: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    detailedDescription: "This financial dashboard provides users with comprehensive visualization of personal or business finances. It includes features for expense tracking, income monitoring, budget planning, financial forecasting, and transaction categorization.",
    challenges: "Creating meaningful data visualizations that communicate financial insights effectively and ensuring data security for sensitive financial information were the main challenges.",
    solutions: "I utilized D3.js for custom interactive charts and implemented bank-level encryption for data storage and transmission. The interface was designed to highlight actionable insights based on financial data patterns.",
    outcomes: "Users reported making better financial decisions with the dashboard, with an average 15% improvement in budget adherence after three months of use."
  },
  {
    id: "5",
    title: "Portfolio Website Template",
    description: "A customizable portfolio template for creative professionals.",
    thumbnail: "https://images.pexels.com/photos/5799091/pexels-photo-5799091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "design",
    technologies: ["HTML/CSS", "JavaScript", "GSAP", "Figma"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    detailedDescription: "This portfolio template was designed to help creative professionals showcase their work effectively online. It features a modular design system, customizable color schemes, project showcase layouts, contact forms, and smooth animations.",
    challenges: "Creating a template that was both visually impressive and customizable enough for different creative fields while maintaining performance was challenging.",
    solutions: "I implemented a component-based architecture for easy customization, optimized animations using GSAP for performance, and created comprehensive documentation for non-technical users.",
    outcomes: "The template has been used by over 200 creative professionals, with many reporting increased client inquiries after implementing the portfolio."
  },
  {
    id: "6",
    title: "AI-Powered Content Generator",
    description: "A tool that leverages AI to generate marketing content and social media posts.",
    thumbnail: "https://images.pexels.com/photos/7693212/pexels-photo-7693212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "web",
    technologies: ["React", "Python", "TensorFlow", "Flask", "OpenAI API"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    detailedDescription: "This content generation tool helps marketers create social media posts, email newsletters, and blog content using AI. It features customizable templates, tone adjustments, SEO optimization suggestions, and a content calendar.",
    challenges: "Integrating multiple AI models for different content types and ensuring generated content matched brand voice and quality standards were significant challenges.",
    solutions: "I created a hybrid approach combining pre-trained language models with custom fine-tuning options and implemented a feedback loop system that improves content generation based on user editing patterns.",
    outcomes: "Marketing teams using this tool reported a 60% reduction in content creation time while maintaining or improving engagement metrics."
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (activeCategory === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(
        projects.filter((project) => project.category === activeCategory)
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-800 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-800 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              Featured Projects
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 rounded-full"></span>
            </h2>
            <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
              Explore some of my recent work across web development, mobile apps, and design projects.
            </p>
          </div>

          {/* Project category filters */}
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="bg-blue-900/50 backdrop-blur-sm">
                <TabsTrigger
                  value="all"
                  onClick={() => setActiveCategory("all")}
                  className="data-[state=active]:bg-blue-700"
                >
                  All Projects
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  onClick={() => setActiveCategory("web")}
                  className="data-[state=active]:bg-blue-700"
                >
                  Web Apps
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  onClick={() => setActiveCategory("mobile")}
                  className="data-[state=active]:bg-blue-700"
                >
                  Mobile
                </TabsTrigger>
                <TabsTrigger
                  value="design"
                  onClick={() => setActiveCategory("design")}
                  className="data-[state=active]:bg-blue-700"
                >
                  Design
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Project cards grid */}
            <TabsContent value={activeCategory} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="bg-blue-950/60 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-800/50 hover:border-blue-400/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl group"
                    style={{
                      opacity: 0,
                      animation: `fadeInUp 0.5s ease-out forwards ${index * 0.1}s`,
                    }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="bg-blue-800/70 text-blue-200 border-blue-600/50">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="bg-blue-800/70 text-blue-200 border-blue-600/50">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-blue-200 mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex justify-between items-center">
                        <Button
                          variant="ghost"
                          className="text-blue-300 hover:text-blue-100 hover:bg-blue-800/50 p-0"
                          onClick={() => setSelectedProject(project)}
                        >
                          View Details
                        </Button>
                        <div className="flex gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-blue-100 transition-colors"
                          >
                            <Github size={20} />
                          </a>
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-300 hover:text-blue-100 transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="bg-blue-950 border-blue-800 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <div className="absolute top-4 right-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedProject(null)}
                  className="text-blue-300 hover:text-white hover:bg-blue-800/50"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-blue-200">
                  {selectedProject.title}
                </DialogTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} className="bg-blue-800 text-blue-200 border-blue-600/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </DialogHeader>

              <div className="relative h-64 mt-4 rounded-md overflow-hidden">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <DialogDescription className="text-blue-100 mt-4">
                <h4 className="text-lg font-semibold text-blue-200 mb-2">Project Overview</h4>
                <p className="mb-4">{selectedProject.detailedDescription}</p>

                <h4 className="text-lg font-semibold text-blue-200 mb-2">Challenges</h4>
                <p className="mb-4">{selectedProject.challenges}</p>

                <h4 className="text-lg font-semibold text-blue-200 mb-2">Solutions</h4>
                <p className="mb-4">{selectedProject.solutions}</p>

                <h4 className="text-lg font-semibold text-blue-200 mb-2">Outcomes</h4>
                <p className="mb-4">{selectedProject.outcomes}</p>
              </DialogDescription>

              <div className="flex justify-between mt-6">
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-200 hover:bg-blue-800/50"
                  onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
