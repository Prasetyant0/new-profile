import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-10 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-blue-400">Dev</span>Profile
            </h3>
            <p className="text-blue-200 mb-4 max-w-xs">
              Building innovative web solutions with a focus on user experience and performance.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:john.doe@example.com"
                className="text-blue-300 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home"
                  className="text-blue-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#home")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about"
                  className="text-blue-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#about")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills"
                  className="text-blue-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#skills")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#projects"
                  className="text-blue-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-blue-300 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-200">Contact</h3>
            <address className="not-italic text-blue-300">
              <p>San Francisco, CA</p>
              <p>United States</p>
              <p className="mt-2">
                <a 
                  href="mailto:john.doe@example.com" 
                  className="hover:text-white transition-colors"
                >
                  john.doe@example.com
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-blue-900/50 text-center text-blue-400 text-sm">
          <p>© {currentYear} John Doe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}