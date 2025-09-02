import { motion, useInView } from "framer-motion";
// Custom CSS for glow effect
const glowStyle = {
  transition: "text-shadow 0.4s",
};

const glowHoverStyle = {
  textShadow:
    "0 0 8px #a855f7, 0 0 16px #a855f7, 0 0 32px #a855f7, 0 0 64px #a855f7",
};
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

const GRAIN_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNScgaGVpZ2h0PSc1JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxyZWN0IHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsMC4yKScvPjxyZWN0IHg9JzMnIHk9JzInIHdpZHRoPScxJyBoZWlnaHQ9JzEnIGZpbGw9J3JnYmEoMjU1LDI1NSwyNTUsMC4xKScvPjwvc3ZnPg==";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
      },
    },
  };

  const benefits = [
    "React Expert",
    "Pixel Perfect",
    "TypeScript Proficiency",
    "Clean, Maintainable Code",
    "Performance Optimization",
    "Responsive Website",
    "UI Design Proficiency (Figma)",
  ];

  const Sparkle = () => (
    <svg
      className="w-4 h-4 text-purple-200 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)]"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l2.2 6.4L21 11l-6.8 2.6L12 20l-2.2-6.4L3 11l6.8-2.6L12 2z" />
    </svg>
  );

  return (
    <section id="about" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-white">
              Choose Wisely, Get Quality Results
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Make the right choice for interfaces that are fast, reliable, and
              visually sharp.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* With Me Column */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border border-white/10 overflow-hidden relative rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                {/* background gradient (matches reference) */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "radial-gradient(60% 55% at 50% 50%, rgba(147,51,234,0.55) 0%, rgba(147,51,234,0.35) 35%, rgba(17,24,39,0.6) 100%), radial-gradient(45% 40% at 85% 35%, rgba(236,72,153,0.35) 0%, transparent 70%), radial-gradient(55% 50% at 15% 0%, rgba(255,255,255,0.12) 0%, transparent 60%)",
                    }}
                  />
                  {/* vignette */}
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(120%_120%_at_50%_0%,rgba(0,0,0,0.25)_0%,transparent_40%)]" />
                  {/* subtle grain */}
                  <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay rounded-2xl"
                    style={{
                      backgroundImage: `url("${GRAIN_DATA_URL}")`,
                      backgroundSize: "5px 5px",
                    }}
                  />
                </div>

                <CardContent className="relative z-10 p-5 md:p-6 lg:p-7">
                  <h3 className="text-2xl font-bold text-white mb-5">
                    With Me
                  </h3>

                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        style={{
                          width: "100%",
                          minHeight: 48,
                          backgroundColor: "rgba(124,58,237,0.12)",
                          borderRadius: 12,
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          padding: "12px 16px",
                          marginBottom: 12,
                          position: "relative",
                          overflow: "hidden",
                        }}
                        className="group select-none will-change-transform hover:-translate-y-0.5 transition-transform duration-200"
                      >
                        <div className="relative z-10 w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                          <Sparkle />
                        </div>
                        <span
                          className="relative z-10 text-white text-sm md:text-base block benefit-glow"
                          style={glowStyle}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.textShadow =
                              glowHoverStyle.textShadow)
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.textShadow = "")
                          }
                        >
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Other Column */}
            <motion.div variants={itemVariants}>
              <Card className="h-full border border-white/10 bg-black/70">
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Other</h3>

                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: 16 }}
                        animate={
                          isInView
                            ? { opacity: 1, x: 0 }
                            : { opacity: 0, x: 16 }
                        }
                        transition={{ delay: 0.2 + index * 0.06 }}
                        className="flex items-center gap-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors px-4 py-3"
                      >
                        <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center">
                          <X className="w-4 h-4 text-red-500" />
                        </div>
                        <span className="text-gray-400 text-sm md:text-base">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
