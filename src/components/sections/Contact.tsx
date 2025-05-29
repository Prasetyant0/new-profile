import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, MessageSquare, Globe, Twitter } from "lucide-react";

export function Contact() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/johndoe",
      color: "hover:text-gray-100 hover:bg-gray-800",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://linkedin.com/in/johndoe",
      color: "hover:text-blue-100 hover:bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/johndoe",
      color: "hover:text-blue-100 hover:bg-blue-400",
    },
    {
      name: "Portfolio",
      icon: <Globe className="h-5 w-5" />,
      url: "https://johndoe.dev",
      color: "hover:text-green-100 hover:bg-green-600",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-900 to-blue-950 text-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-900 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
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
              Get In Touch
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 rounded-full"></span>
            </h2>
            <p className="text-blue-200 mt-4 max-w-2xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? 
              I'd love to hear from you! Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="bg-blue-950/60 backdrop-blur-sm rounded-lg p-6 border border-blue-800/50 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-blue-200 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-blue-300">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      required
                      className="bg-blue-900/50 border-blue-700/50 text-blue-100 placeholder:text-blue-400/50"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-blue-300">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-blue-900/50 border-blue-700/50 text-blue-100 placeholder:text-blue-400/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-blue-300">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                    required
                    className="bg-blue-900/50 border-blue-700/50 text-blue-100 placeholder:text-blue-400/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-blue-300">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    required
                    rows={5}
                    className="bg-blue-900/50 border-blue-700/50 text-blue-100 placeholder:text-blue-400/50 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact information */}
            <div className="flex flex-col justify-between">
              <div className="bg-blue-950/60 backdrop-blur-sm rounded-lg p-6 border border-blue-800/50 shadow-lg mb-6">
                <h3 className="text-xl font-semibold mb-6 text-blue-200 flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-blue-300">Email</p>
                      <a
                        href="mailto:john.doe@example.com"
                        className="text-blue-100 hover:text-blue-300 transition-colors"
                      >
                        john.doe@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="h-5 w-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-blue-300">Website</p>
                      <a
                        href="https://johndoe.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-100 hover:text-blue-300 transition-colors"
                      >
                        johndoe.dev
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MessageSquare className="h-5 w-5 text-blue-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-blue-300">Availability</p>
                      <p className="text-blue-100">
                        Open to freelance projects and full-time opportunities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-950/60 backdrop-blur-sm rounded-lg p-6 border border-blue-800/50 shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-blue-200">
                  Connect With Me
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-md bg-blue-900/50 hover:transform hover:-translate-y-1 transition-all duration-300 ${link.color}`}
                      aria-label={link.name}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8">
                  <p className="text-blue-200 mb-3">
                    Prefer to schedule a call?
                  </p>
                  <Button
                    variant="outline"
                    className="border-blue-400 text-blue-200 hover:bg-blue-800/50"
                    onClick={() => window.open("https://calendly.com/johndoe", "_blank")}
                  >
                    Schedule a Meeting
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}