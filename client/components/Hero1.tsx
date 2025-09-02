import { ArrowDown } from "lucide-react";
import defaultProfile from "@/images/punjung1.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function Hero({
  name = "PUNJUNG ADI N",
  about = "Passionate about frontend development, I focus on crafting digital products.",
  badgeText = "Expert for Frontend Developer",
  image = defaultProfile,
}) {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/BISNISCREATIVE",
      label: "Facebook",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/bisniscreatives/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/punjung-adinugroho-763051a9",
      label: "LinkedIn",
    },
    {
      icon: Facebook,
      href: "https://www.youtube.com/@bisniscreative8602/",
      label: "YouTube",
    },
  ];

  // Fix: Ensure name is a string and split safely
  const [firstName, ...restName] =
    typeof name === "string" ? name.split(" ") : ["", ""];
  const lastName = restName.join(" ");

  return (
    <section
      id="home"
      className="relative w-full bg-gradient-to-r from-[#2B0B3A] to-[#803372] text-white overflow-hidden font-raleway"
    >
      {/* Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/squared-paper.png')] opacity-10" />
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:grid relative z-10 grid-cols-[1.1fr_0.9fr_1fr] gap-12 items-center max-w-7xl mx-auto min-h-[90vh] px-10">
        {/* Left - Logo and Name */}
        <div className="select-none">
          <h1 className="font-bold leading-[0.95] tracking-[-0.02em]">
            <span className="block text-[84px]">{firstName}</span>
            {lastName && (
              <span className="block text-[84px] mt-3">{lastName}</span>
            )}
          </h1>
        </div>

        {/* Center - Profile + Badge */}
        <div className="relative flex justify-center items-center">
          {/* Background Text centered */}
          <b className="absolute -top-10 left-1/2 -translate-x-1/2 text-[150px] font-bold tracking-[-0.05em] text-white/10 whitespace-nowrap">
            PORTOFOLIO
          </b>

          {/* Decorative Arch behind image */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-[220px] bg-black/25 backdrop-blur-md" />

          {/* Profile Image */}
          <motion.img
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={image}
            alt="Profile"
            className="w-[380px] h-[480px] object-cover rounded-t-[200px] shadow-2xl relative"
          />

          {/* Glowing Star above profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-[140px] -right-6 w-16 h-16 z-20"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                filter: [
                  "drop-shadow(0 0 15px rgba(255,255,255,0.8))",
                  "drop-shadow(0 0 25px rgba(255,255,255,0.6))",
                  "drop-shadow(0 0 15px rgba(255,255,255,0.8))",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <svg
                className="w-16 h-16 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2l2.2 6.4L21 11l-6.8 2.6L12 20l-2.2-6.4L3 11l6.8-2.6L12 2z" />
              </svg>
              {/* Additional glow rings */}
              <div className="absolute inset-0 w-16 h-16 rounded-full bg-white/20 blur-sm animate-pulse" />
              <div
                className="absolute inset-0 w-16 h-16 rounded-full bg-white/10 blur-md animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
            </motion.div>
          </motion.div>

          {/* Sparkle star */}
          <svg
            className="absolute top-[140px] -right-6 w-16 h-16 text-white/90"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2l2.2 6.4L21 11l-6.8 2.6L12 20l-2.2-6.4L3 11l6.8-2.6L12 2z" />
          </svg>

          {/* Circle Badge Desktop */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute -bottom-12 right-0 w-32 h-32 rounded-full flex items-center justify-center bg-white text-black shadow-lg"
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <path
                  id="circlePathDesktop"
                  d="M50,50 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
                />
              </defs>
              <text
                fill="currentColor"
                fontSize="10"
                fontWeight="600"
                letterSpacing="2px"
              >
                <textPath href="#circlePathDesktop" startOffset="2%">
                  {badgeText} • {badgeText} •
                </textPath>
              </text>
            </svg>

            {/* Globe in Center */}
            <div className="relative z-40 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0a15 15 0 010 20m0-20a15 15 0 000 20M2 12h20M12 2a10 10 0 000 20"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Right - About */}
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-bold">About me</h2>
          <p className="text-base text-gray-100 leading-relaxed">{about}</p>
          <div className="flex gap-4 mt-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1E1E1E] hover:bg-[#333] transition-transform hover:scale-110"
              >
                <s.icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden relative z-10 flex flex-col min-h-[100vh] px-6 py-16">
        {/* Background Text */}
        <b className="absolute top-[72px] text-[clamp(52px,18vw,88px)] font-extrabold tracking-[-0.05em] text-white/10 text-center w-full z-0">
          PORTFOLIO
        </b>

        {/* Image wrapper with decorative arch */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[290px] h-[290px] rounded-[160px] bg-black/30 backdrop-blur-md" />

          <motion.img
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={image}
            alt="Profile"
            className="w-[250px] h-[320px] sm:w-[280px] sm:h-[360px] object-cover rounded-t-[140px] sm:rounded-t-[160px] shadow-xl relative"
          />

          {/* sparkle */}
          <svg
            className="absolute -top-2 right-10 w-10 h-10 text-white/90"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z" />
          </svg>

          {/* Circle Badge Mobile */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute -bottom-6 right-0 w-28 h-28 rounded-full flex items-center justify-center bg-white text-black shadow-lg"
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
            >
              <defs>
                <path
                  id="circlePathMobile"
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                />
              </defs>
              <text
                fill="currentColor"
                fontSize="10"
                fontWeight="600"
                letterSpacing="1px"
              >
                <textPath href="#circlePathMobile" startOffset="0%">
                  {badgeText} • {badgeText} •
                </textPath>
              </text>
            </svg>
            {/* Globe Center */}
            <div className="relative z-20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0a15 15 0 010 20m0-20a15 15 0 000 20M2 12h20M12 2a10 10 0 000 20"
                />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Name */}
        <div className="mt-8 text-left w-full">
          <h1 className="font-extrabold">
            <span className="block text-[40px] leading-[44px]">
              {firstName}
            </span>
            {lastName && (
              <span className="block text-[34px] leading-[40px] tracking-wide">
                {lastName}
              </span>
            )}
          </h1>
        </div>

        {/* About */}
        <div className="mt-6 text-left w-full">
          <h2 className="text-xl font-bold">About me</h2>
          <p className="text-sm text-gray-100 leading-6 mt-2">{about}</p>
        </div>

        {/* Social */}
        <div className="flex gap-5 mt-6 w-full">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-[#1E1E1E] hover:bg-[#333] transition-transform hover:scale-110"
            >
              <s.icon className="w-5 h-5 text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[70px] h-[110px] rounded-[70px] flex items-center justify-center z-60"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-6 h-6 text-white/20" />
      </motion.div>
    </section>
  );
}
