import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check, X, Mail } from "lucide-react";
import React from "react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailed, setShowFailed] = useState(false);

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

  const popupVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const contactData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        setShowFailed(true);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setShowFailed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeSuccess = () => setShowSuccess(false);
  const closeFailed = () => setShowFailed(false);

  // Handle escape key
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (showSuccess) closeSuccess();
      if (showFailed) closeFailed();
    }
  };

  // Add keyboard event listener
  React.useEffect(() => {
    if (showSuccess || showFailed) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showSuccess, showFailed]);

  // Auto-hide success pop-up after 5 seconds
  React.useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        closeSuccess();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  return (
    <>
      {/* Success Pop-up */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popupVariants}
            onClick={closeSuccess}
            role="dialog"
            aria-labelledby="success-title"
            aria-describedby="success-description"
          >
            <motion.div
              className="bg-black rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full mx-4 relative"
              variants={popupVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
                  >
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Success Message */}
              <motion.div
                className="text-center mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <h3 id="success-title" className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Message Sent Successfully!
                </h3>
                <p id="success-description" className="text-gray-300 text-base sm:text-lg">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <Button
                  onClick={closeSuccess}
                  className="w-full bg-white text-black hover:bg-gray-100 font-semibold py-3 rounded-xl text-base sm:text-lg"
                >
                  Back to Home
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Failed Pop-up */}
      <AnimatePresence>
        {showFailed && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popupVariants}
            onClick={closeFailed}
            role="dialog"
            aria-labelledby="failed-title"
            aria-describedby="failed-description"
          >
            <motion.div
              className="bg-black rounded-2xl p-6 sm:p-8 max-w-sm sm:max-w-md w-full mx-4 relative"
              variants={popupVariants}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Failed Icon */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                >
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-400 rounded-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gray-600 rounded-full flex items-center justify-center"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.4, duration: 0.3, ease: "easeOut" }}
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Failed Message */}
              <motion.div
                className="text-center mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <h3 id="failed-title" className="text-xl sm:text-2xl font-bold text-white mb-3">
                  Send Failed
                </h3>
                <p id="failed-description" className="text-gray-300 text-base sm:text-lg">
                  Something broke along the way. Let's try resending it.
                </p>
              </motion.div>

              {/* Action Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                <Button
                  onClick={closeFailed}
                  className="w-full bg-white text-gray-800 hover:bg-gray-100 font-semibold py-3 rounded-xl text-base sm:text-lg"
                >
                  Try Again
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="contact" className="py-20 bg-black" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-7xl mx-auto"
          >
            <div className="bg-gradient-to-r from-purple-900/50 via-purple-700/30 to-purple-500/20 rounded-2xl overflow-hidden relative shadow-2xl shadow-purple-900/20 ring-1 ring-white/10 grid lg:grid-cols-2">
              {/* Image Section */}
              <motion.div
                variants={itemVariants}
                className="relative h-55 lg:h-[650px]"
              >
                <img
                  src="/images/punjung2.png"
                  alt="punjung2"
                  className="w-full h-full object-cover rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl"
                />
              </motion.div>

              {/* Form Section */}
              <motion.div
                variants={itemVariants}
                className="bg-black/80 backdrop-blur-xl p-6 sm:p-8 lg:p-12 flex flex-col justify-center rounded-b-2xl lg:rounded-b-none lg:rounded-r-2xl"
              >
                <div className="mb-6 lg:mb-8">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4 text-white leading-tight">
                    Start a Conversation
                  </h2>
                  <p className="text-base sm:text-lg text-gray-300 max-w-xl">
                    I'm open to freelance gigs, collaborations, or even just a
                    casual chat.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="name"
                      className="text-white text-base font-medium"
                    >
                      Name<span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="What should I call you?..."
                      required
                      className="bg-white/10 lg:bg-transparent border-white/20 lg:border-0 lg:border-b lg:border-white/10 focus:border-purple-500 lg:focus:border-white/40 text-white placeholder:text-gray-400 p-4 lg:px-0 lg:py-3 h-12 lg:h-auto rounded-lg lg:rounded-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-white text-base font-medium"
                    >
                      Email<span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Where can I reach you? ..."
                      required
                      className="bg-white/10 lg:bg-transparent border-white/20 lg:border-0 lg:border-b lg:border-white/10 focus:border-purple-500 lg:focus:border-white/40 text-white placeholder:text-gray-400 p-4 lg:px-0 lg:py-3 h-12 lg:h-auto rounded-lg lg:rounded-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-white text-base font-medium"
                    >
                      Message<span className="text-red-500 ml-1">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hi :) ..."
                      rows={4}
                      required
                      className="bg-white/10 lg:bg-transparent border-white/20 lg:border-0 lg:border-b lg:border-white/10 focus:border-purple-500 lg:focus:border-white/40 text-white placeholder:text-gray-400 p-4 lg:px-0 lg:py-3 rounded-lg lg:rounded-none resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black hover:bg-white/90 text-base py-4 h-12 mt-6 rounded-lg font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      "Let's Build Something"
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}