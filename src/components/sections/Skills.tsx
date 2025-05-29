import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "database" | "tools";
  icon: string;
};

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "🌐" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "📜" },
  { name: "React", level: 90, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", level: 85, category: "frontend", icon: "🔷" },
  { name: "Next.js", level: 80, category: "frontend", icon: "⏭️" },
  { name: "Tailwind CSS", level: 85, category: "frontend", icon: "🎨" },
  
  // Backend
  { name: "Node.js", level: 85, category: "backend", icon: "🟢" },
  { name: "Express", level: 80, category: "backend", icon: "🚂" },
  { name: "Python", level: 75, category: "backend", icon: "🐍" },
  { name: "Java", level: 70, category: "backend", icon: "☕" },
  { name: "GraphQL", level: 75, category: "backend", icon: "📊" },
  
  // Database
  { name: "MongoDB", level: 85, category: "database", icon: "🍃" },
  { name: "PostgreSQL", level: 80, category: "database", icon: "🐘" },
  { name: "MySQL", level: 75, category: "database", icon: "🐬" },
  { name: "Redis", level: 70, category: "database", icon: "🔴" },
  
  // Tools
  { name: "Git", level: 90, category: "tools", icon: "📝" },
  { name: "Docker", level: 75, category: "tools", icon: "🐳" },
  { name: "AWS", level: 70, category: "tools", icon: "☁️" },
  { name: "CI/CD", level: 75, category: "tools", icon: "🔄" },
  { name: "Jest", level: 80, category: "tools", icon: "🃏" },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [visibleSkills, setVisibleSkills] = useState<Skill[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (activeCategory === "all") {
      setVisibleSkills(skills);
    } else {
      setVisibleSkills(
        skills.filter((skill) => skill.category === activeCategory)
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

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const categories = [
    { id: "all", name: "All Skills" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "database", name: "Database" },
    { id: "tools", name: "Tools & DevOps" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-blue-800 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-950 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
      
      {/* Animated patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/5"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 30 + 20}s infinite linear`,
            }}
          ></div>
        ))}
      </div>

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
              Technical Skills
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 rounded-full"></span>
            </h2>
            <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
              As a Fullstack Developer, I've developed expertise across various technologies.
              Here's a breakdown of my technical competencies:
            </p>
          </div>

          {/* Skill category filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-4 py-2 rounded-full transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-blue-800/40 text-blue-200 hover:bg-blue-700/50 hover:text-white"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={`bg-blue-950/60 backdrop-blur-sm rounded-lg p-6 border border-blue-800/50 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden relative group`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-blue-200">
                    {skill.name}
                  </h3>
                </div>
                
                <div className="h-2 bg-blue-900/70 rounded-full mb-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-400 group-hover:to-blue-200"
                    style={{ width: `${skill.level}%`, transitionDelay: "200ms" }}
                  ></div>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-blue-300">Proficiency</span>
                  <span className="text-blue-200 font-medium">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}