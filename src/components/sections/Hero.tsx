import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-blue-950 to-blue-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-blue-950/60"></div>

      {/* Animated particles/circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-400/10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite linear`,
            }}
          ></div>
        ))}
      </div>

      <div
        className={`container mx-auto px-4 relative z-10 transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-blue-300 text-xl md:text-2xl font-medium mb-2">
              Hello, I'm
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">John</span>{" "}
              <span className="text-blue-400">Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-100">
              Fullstack Developer
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
              Building innovative web solutions with modern technologies.
              Passionate about creating user-friendly and scalable applications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-200 hover:bg-blue-800/30"
                onClick={() => {
                  document.querySelector("#projects")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                View Projects
              </Button>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-400/30 shadow-xl">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 opacity-30 blur-sm -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-300 hover:text-blue-100 transition-colors"
        aria-label="Scroll down"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </div>
      </a>
    </section>
  );
}