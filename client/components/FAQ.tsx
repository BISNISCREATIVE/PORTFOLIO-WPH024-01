import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openFAQ, setOpenFAQ] = useState(0);

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

  const faqs = [
    {
      question: "What technologies do you work with?",
      answer:
        "I mainly work with HTML, CSS, JavaScript, and frameworks like React, Next.js, and Vue. I also have experience using Tailwind CSS, TypeScript, and working with APIs.",
    },
    {
      question: "Do you work on freelance or remote projects?",
      answer:
        "Yes, I'm available for both freelance projects and remote work opportunities. I'm experienced in working with distributed teams and managing projects remotely.",
    },
    {
      question: "Can you convert Figma or Sketch designs into code?",
      answer:
        "Absolutely! I specialize in converting design files from Figma, Sketch, Adobe XD, and other design tools into pixel-perfect, responsive code.",
    },
    {
      question: "Do you collaborate with backend developers or teams?",
      answer:
        "Yes, I have extensive experience working with backend developers and cross-functional teams. I'm comfortable with API integration and collaborative development workflows.",
    },
    {
      question: "Are you available for full-time roles?",
      answer:
        "I'm open to discussing full-time opportunities that align with my skills and interests. Feel free to reach out to discuss potential collaborations.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-black" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Got questions? Here are the answers to the ones we get asked the
              most.
            </p>
          </motion.div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants} className="pb-8">
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  className="flex items-start space-x-4 w-full text-left"
                >
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  )}

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                      {faq.question}
                    </h3>

                    {openFAQ === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-400 text-lg leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
