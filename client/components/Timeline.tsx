import { motion, useInView } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

interface TimelineItem {
  period: string;
  company: "airbnb" | "coinbase" | "webflow" | string;
  points: string[];
  highlight?: boolean;
  logoSrc?: string;
}

const items: TimelineItem[] = [
  {
    period: "2025 - Present",
    company: "airbnb",
    highlight: true,
    logoSrc: "/images/logos/airbnb.png",
    points: [
      "Develop responsive and user-friendly web interfaces using modern technologies",
      "Collaborate with UI/UX designers to turn design into high-quality implementations",
      "Optimize web applications for maximum speed and scalability",
      "Ensure cross-browser and cross-platform compatibility",
      "Implement reusable code and component libraries for future use",
    ],
  },
  {
    period: "2024 - 2025",
    company: "coinbase",
    logoSrc: "/images/logos/coinbase.png",
    points: [
      "Develop responsive and user-friendly web interfaces using modern frontend technologies.",
      "Collaborate with UI/UX designers to turn design mockups into functional components.",
      "Optimize web applications for maximum speed and scalability.",
      "Ensure cross-browser and cross-platform compatibility.",
      "Implement reusable code and component libraries for future use.",
    ],
  },
  {
    period: "2023 - 2024",
    company: "webflow",
    logoSrc: "/images/logos/webflow.png",
    points: [
      "Develop responsive and user-friendly web interfaces using modern frontend technologies.",
      "Collaborate with UI/UX designers to turn design mockups into functional components.",
      "Optimize web applications for maximum speed and scalability.",
      "Ensure cross-browser and cross-platform compatibility.",
      "Implement reusable code and component libraries for future use.",
    ],
  },
];

function CompanyLogo({
  company,
  logoSrc,
}: {
  company: TimelineItem["company"];
  logoSrc?: string;
}) {
  const styles: Record<string, string> = {
    airbnb: "text-[#FF385C]",
    coinbase: "text-[#0052FF]",
    webflow: "text-[#2E6BFF]",
  };
  const label = company.charAt(0).toUpperCase() + company.slice(1);

  return (
    <div className="flex items-center gap-3">
      {logoSrc ? (
        <img src={logoSrc} alt={label} className="h-10 object-contain" />
      ) : (
        <span
          className={`font-extrabold text-3xl ${styles[company] ?? "text-white"}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

export function Timeline() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        const progress = Math.max(
          0,
          Math.min(
            1,
            (scrollTop + windowHeight - elementTop) /
              (elementHeight + windowHeight),
          ),
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  } as const;

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  } as const;

  const SparkleBullet = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className="text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]"
    >
      <path
        fill="currentColor"
        d="M12 2l2.2 6.4L21 11l-6.8 2.6L12 20l-2.2-6.4L3 11l6.8-2.6L12 2z"
      />
    </svg>
  );

  return (
    <section className="py-20 bg-[#0e0e13]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white drop-shadow-lg">
              Years of Building, Learning, and Shipping
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Each role has sharpened my ability to build better digital
              experiences, faster.
            </p>
          </motion.div>

          {/* Timeline with left spine */}
          <div className="relative">
            {/* Static spine line (bold, pink) */}
            <div className="absolute left-8 top-0 bottom-0 w-2 bg-gradient-to-b from-pink-500/80 via-pink-400/60 to-pink-600/0 rounded-full" />

            {/* Animated glowing pink line (bold, animated glow) */}
            <div className="absolute left-8 top-0 bottom-0 w-2 overflow-hidden pointer-events-none rounded-full">
              <motion.div
                className="w-full h-full bg-gradient-to-b from-pink-400 via-pink-500 to-pink-400 opacity-90 rounded-full"
                style={{
                  transform: `translateY(${scrollProgress * 100}%)`,
                  boxShadow:
                    "0 0 32px 8px rgba(236,72,153,0.7), 0 0 64px 16px rgba(236,72,153,0.3)",
                  filter: `blur(${2 + Math.abs(Math.sin(scrollProgress * Math.PI)) * 2}px)`,
                }}
                animate={{
                  boxShadow: [
                    "0 0 32px 8px rgba(236,72,153,0.7), 0 0 64px 16px rgba(236,72,153,0.3)",
                    "0 0 48px 16px rgba(236,72,153,0.9), 0 0 80px 24px rgba(236,72,153,0.4)",
                    "0 0 32px 8px rgba(236,72,153,0.7), 0 0 64px 16px rgba(236,72,153,0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <div className="space-y-10">
              {items.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  className="relative pl-20"
                >
                  {/* Timeline node - glowing purple circle */}
                  <div className="absolute left-4 top-8 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_12px_4px_rgba(168,85,247,0.5)]" />

                  {/* Card */}
                  <div className="relative rounded-2xl bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden border border-white/10">
                    {/* Top gradient highlight for first card */}
                    {exp.highlight && (
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-r from-purple-600/20 via-purple-400/10 to-transparent" />
                    )}

                    <div className="grid md:grid-cols-[220px_1px_1fr]">
                      {/* Left column with period and logo */}
                      <div className="p-8 flex flex-col gap-4 bg-gradient-to-b from-white/10 to-transparent">
                        <div className="text-gray-200 text-lg font-semibold tracking-wide">
                          {exp.period}
                        </div>
                        <CompanyLogo
                          company={exp.company}
                          logoSrc={exp.logoSrc}
                        />
                      </div>

                      {/* Vertical divider */}
                      <div className="hidden md:block w-px bg-gradient-to-b from-purple-400/30 to-transparent" />

                      {/* Right column with bullet points */}
                      <div className="p-8">
                        <ul className="space-y-4 text-gray-100 text-base leading-relaxed">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex gap-3 items-start">
                              <span className="mt-1 flex-shrink-0">
                                <SparkleBullet />
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Timeline;
