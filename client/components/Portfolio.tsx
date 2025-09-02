import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: "Portfolio 1",
      year: "2025",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/6e32233424e58bf1bcd1a9a401809a66690d288f?width=746",
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio 2",
      year: "2025",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/171c44c93598f317ad3483d1bfe2798f24a109f8?width=746",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio 3",
      year: "2025",
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/70f0bf17d65ad37eb991351fbfb93449b3c3b83b?width=746",
      link: "#",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Frontend in Action
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These are hands-on projects where I delivered clean, responsive
              user interfaces.
            </p>
          </motion.div>

          {/* Desktop Layout - 3 columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{project.year}</p>
                      </div>

                      <motion.div
                        className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowRight className="w-4 h-4 text-white group-hover:text-purple-400" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile Layout - 1 column */}
          <div className="md:hidden space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                        <p className="text-gray-400">{project.year}</p>
                      </div>

                      <motion.div
                        className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center group-hover:border-purple-500 group-hover:bg-purple-500/20 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ArrowRight className="w-5 h-5 text-white group-hover:text-purple-400" />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
