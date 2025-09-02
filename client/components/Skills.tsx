import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const technologies = [
    {
      name: "HTML",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/7ac9fed87be881a851460324abfb2158e14a38cf?width=105",
    },
    {
      name: "CSS",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/5553716fae9560e17be7bccb6a0f4c86dfba3fef?width=90",
    },
    {
      name: "Javascript",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/ac2c2bb728c545295e8be33747d1ad13c53bb402?width=132",
    },
    {
      name: "Typescript",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/a3d59155bfdc7c10ba7284f8552a99b9980942e6?width=108",
    },
    {
      name: "Sequalize",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/8399b93b3d268edae35f3e4e3d5ccf12ada9717c?width=126",
    },
    {
      name: "Mongo DB",
      icon: "https://api.builder.io/api/v1/image/assets/TEMP/11fea46f55867f5b60a3aa5ce8814d70a13ddb51?width=120",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Experienced in Web & App Development
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              I create user-focused websites that look good, work well, and feel
              right.
            </p>
          </motion.div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
            {/* Technology Grid */}
            <div className="grid grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square"
                >
                  <Card className="h-full bg-gray-900/50 transition-all duration-300">
                    <CardContent className="flex flex-col items-center justify-center h-full p-4 text-center">
                      <div className="w-16 h-16 mb-4 flex items-center justify-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-white font-medium text-sm">
                        {tech.name}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quote Card */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border border-gray-800 bg-gradient-to-br from-purple-900/50 to-purple-600/30 relative overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0 opacity-20">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/dc6f867d0620833f413f3b1bfc8ccc83f13d19e4?width=2880"
                    alt="background"
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[400px]">
                  <div>
                    <blockquote className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                      "Programming is the art of telling another human what you
                      want the computer to do."
                    </blockquote>
                    <cite className="text-white/80 text-lg">
                      — Donald Knuth
                    </cite>
                  </div>

                  <Button className="w-full bg-white text-black hover:bg-white/90 mt-8">
                    Let's Build Something
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Quote Card - Mobile */}
            <motion.div variants={itemVariants} className="mb-8">
              <Card className="border border-gray-800 bg-gradient-to-br from-purple-900/50 to-purple-600/30 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/dc6f867d0620833f413f3b1bfc8ccc83f13d19e4?width=2880"
                    alt="background"
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="relative z-10 p-6 text-center">
                  <blockquote className="text-xl font-bold text-white mb-4 leading-tight">
                    "Programming is the art of telling another human what you
                    want the computer to do."
                  </blockquote>
                  <cite className="text-white/80 text-base">
                    — Donald Knuth
                  </cite>

                  <Button className="w-full bg-white text-black hover:bg-white/90 mt-6">
                    Let's Build Something
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Technology Grid - Mobile */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square"
                >
                  <Card className="h-full border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300">
                    <CardContent className="flex flex-col items-center justify-center h-full p-4 text-center">
                      <div className="w-12 h-12 mb-2 flex items-center justify-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-white font-medium text-xs">
                        {tech.name}
                      </h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
