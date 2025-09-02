import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skill", href: "#skills" },
    { name: "Projects", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-md"
          : "bg-gradient-to-r from-purple-900/20 to-purple-600/20 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <motion.svg
              className="w-11 h-11 text-white"
              viewBox="0 0 126 126"
              fill="currentColor"
              animate={{ rotate: [0, 360, 0, -360, 0] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
            >
              <path d="M63 126C61.176 66.3151 59.6849 64.8333 0 63C59.6849 61.176 61.1669 59.6849 63 0C64.8239 59.6849 66.3151 61.1669 126 63C66.3151 64.8333 64.8333 66.2968 63 126Z" />
            </motion.svg>
            <span className="text-xl font-bold text-white">Punjung</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-white/80 transition-colors duration-200 font-medium py-2 px-2"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              className="hidden md:block bg-white text-black hover:bg-white/90 px-6 py-2"
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get in Touch
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 bg-white/10 backdrop-blur-sm rounded-lg px-4"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-3 text-white hover:text-white/80 transition-colors duration-200"
              >
                {item.name}
              </motion.button>
            ))}
            <div className="mt-2 pt-2">
              <Button
                className="w-full bg-white text-black hover:bg-white/90"
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Get in Touch
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
