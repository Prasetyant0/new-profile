import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function About() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-950 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-blue-950 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-5"></div>

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
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 rounded-full"></span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Working on code"
                  className="rounded-lg shadow-xl w-full max-w-md mx-auto"
                />
                <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 opacity-20 blur-sm -z-10"></div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">
                Fullstack Developer & Problem Solver
              </h3>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                With over 5 years of experience in web development, I specialize in creating 
                responsive, user-friendly applications that solve real-world problems. My journey 
                in tech began with a passion for building things that make a difference.
              </p>
              
              <p className="text-blue-100 mb-6 leading-relaxed">
                I thrive in collaborative environments where I can leverage both my technical 
                expertise and creative thinking. My approach combines clean code principles with 
                user-centered design to deliver exceptional digital experiences.
              </p>
              
              <p className="text-blue-100 mb-8 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers. I believe in continuous 
                learning and pushing the boundaries of what's possible with technology.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => {
                    document.querySelector("#skills")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  My Skills
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-blue-400 text-blue-200 hover:bg-blue-800/30"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}