import { motion } from "framer-motion";
import { ArrowDown, Menu } from "lucide-react";
import defaultProfile from "@/images/punjung1.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export function Hero() {
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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/punjung.adi",
      label: "Facebook",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/punjung_adi",
      label: "Instagram",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/punjung-adi-n",
      label: "LinkedIn",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@punjung_adi",
      label: "TikTok",
    },
  ];

  return (
    <section id="home">
      {/* Desktop Layout */}
      <div className="hidden lg:block w-full relative h-[945px] overflow-hidden text-left text-white font-raleway pt-20 bg-[#3A0764]">
        {/* Background Elements */}
        <div className="absolute top-[-23px] left-[-248px] w-[2050px] h-[1034px] text-gray-400">
          <img
            className="absolute w-[1440px] h-[946px] top-[22px] left-[248px] object-cover"
            alt="Background"
            src="https://api.builder.io/api/v1/image/assets/TEMP/7a876578d5d6927a22b987ff6d623ded806f7fb2?width=2880"
          />
          <img
            className="absolute w-[2070px] h-[894px] top-[22px] left-[-177px] object-cover mix-blend-overlay"
            alt="Vector"
            src="https://api.builder.io/api/v1/image/assets/TEMP/35a2d8a6131b1f4eef09363b6d09c6c588735d83?width=4140"
          />
          <b className="absolute top-[201px] left-[543px] w-[835px] h-[180px] tracking-[-7.083px] leading-[179.306px] text-[141.652px] text-[rgba(217,217,217,0.10)] font-raleway font-bold backdrop-blur-[20px] text-stroke-1">
            PORTOFOLIO
          </b>
        </div>

        {/* Profile Image */}
        <img
          className="absolute top-[268px] left-[calc(50%-191px)] rounded-t-full w-[420px] h-[520px] overflow-hidden object-cover border-4 border-gray-900 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          alt="Profile"
          src="/images/profile.jpg"
          onError={(e) => {
            console.log("Profile image failed to load, using fallback");
            (e.target as HTMLImageElement).src = defaultProfile;
          }}
        />

        {/* Decorative Star */}
        <motion.svg
          className="absolute top-[299px] left-[833px] w-[126px] h-[126px] overflow-hidden"
          viewBox="0 0 126 126"
          fill="#FDFDFD"
          style={{
            filter: "drop-shadow(0 0 32px #fff) drop-shadow(0 0 64px #ffb6ff)",
          }}
          animate={{
            rotate: [0, 360],
            filter: [
              "drop-shadow(0 0 32px #fff) drop-shadow(0 0 64px #ffb6ff)",
              "drop-shadow(0 0 80px #fff) drop-shadow(0 0 160px #ffb6ff)",
              "drop-shadow(0 0 32px #fff) drop-shadow(0 0 64px #ffb6ff)",
            ],
          }}
          transition={{
            rotate: { duration: 16, repeat: Infinity, ease: "linear" },
            filter: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            },
          }}
        >
          <path d="M63 126C61.176 66.3151 59.6849 64.8333 0 63C59.6849 61.176 61.1669 59.6849 63 0C64.8239 59.6849 66.3151 61.1669 126 63C66.3151 64.8333 64.8333 66.2968 63 126Z" />
        </motion.svg>

        {/* Main Content */}
        <div className="absolute top-[393px] left-[172px] w-[1146px] flex flex-row items-center justify-between text-[80px]">
          {/* Name Section */}
          <div className="w-[407.4px] flex flex-col items-start justify-start">
            <b className="w-[480px] relative tracking-[-0.02em] leading-[91.14px] inline-block">
              PUNJUNG
            </b>
            <b className="w-[480px] relative tracking-[-0.02em] leading-[91.14px] inline-block">
              ADI N
            </b>
          </div>

          {/* About & Social Section */}
          <div className="w-[313px] flex flex-col items-start justify-start gap-10 text-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-1">
              <b className="self-stretch relative tracking-[-0.04em] leading-[42px]">
                About me
              </b>
              <div className="self-stretch relative text-base tracking-[-0.03em] leading-[30px] font-semibold text-gray-100">
                Passionate about frontend development, I focus on crafting
                digital products.
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-row items-center justify-start gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 relative backdrop-blur-[40px] rounded-[10908px] bg-gray-400 h-12 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform hover:bg-gray-300"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Globe with Rotating Text */}
        <div className="absolute top-[665px] left-[847px] rounded-[150px] bg-white w-[120px] h-[120px] overflow-hidden text-[10.12px] text-gray-700">
          <div className="absolute top-[15px] left-[15px] w-[88.6px] h-[88.5px]">
            <div className="absolute top-[0px] left-[0px] w-[88.6px] h-[88.5px] animate-spin-slow">
              <div className="absolute top-[88.54px] left-[40.35px] transform rotate-[-170.6deg] origin-[0_0]">
                E
              </div>
              <div className="absolute top-[86.16px] left-[29.55px] transform rotate-[-157deg] origin-[0_0]">
                x
              </div>
              <div className="absolute top-[81.8px] left-[20.5px] transform rotate-[-143.3deg] origin-[0_0]">
                p
              </div>
              <div className="absolute top-[74.71px] left-[11.96px] transform rotate-[-129.3deg] origin-[0_0]">
                e
              </div>
              <div className="absolute top-[66.39px] left-[5.87px] transform rotate-[-117.2deg] origin-[0_0]">
                r
              </div>
              <div className="absolute top-[59.11px] left-[2.53px] transform rotate-[-107.2deg] origin-[0_0]">
                t
              </div>
              <div className="absolute top-[51.96px] left-[0.66px] transform rotate-[-98deg] origin-[0_0]">
                &nbsp;
              </div>
              <div className="absolute top-[45.12px] left-[0px] transform rotate-[-88.7deg] origin-[0_0]">
                f
              </div>
              <div className="absolute top-[37.39px] left-[0.47px] transform rotate-[-77.1deg] origin-[0_0]">
                o
              </div>
              <div className="absolute top-[27.48px] left-[3.31px] transform rotate-[-65deg] origin-[0_0]">
                r
              </div>
              <div className="absolute top-[20.44px] left-[6.99px] transform rotate-[-55.4deg] origin-[0_0]">
                &nbsp;
              </div>
              <div className="absolute top-[14.68px] left-[11.27px] transform rotate-[-44.2deg] origin-[0_0]">
                F
              </div>
              <div className="absolute top-[7.91px] left-[19.04px] transform rotate-[-32.1deg] origin-[0_0]">
                r
              </div>
              <div className="absolute top-[3.79px] left-[26.25px] transform rotate-[-20.1deg] origin-[0_0]">
                o
              </div>
              <div className="absolute top-[0.67px] left-[36.32px] transform rotate-[-6.4deg] origin-[0_0]">
                n
              </div>
              <div className="absolute top-[0.08px] left-[46.56px] transform rotate-[5.2deg] origin-[0_0]">
                t
              </div>
              <div className="absolute top-[1.08px] left-[54.23px] transform rotate-[16.9deg] origin-[0_0]">
                e
              </div>
              <div className="absolute top-[4.64px] left-[64.16px] transform rotate-[30.5deg] origin-[0_0]">
                n
              </div>
              <div className="absolute top-[10.48px] left-[73.02px] transform rotate-[44.6deg] origin-[0_0]">
                d
              </div>
              <div className="absolute top-[18.44px] left-[80.25px] transform rotate-[56.2deg] origin-[0_0]">
                &nbsp;
              </div>
              <div className="absolute top-[24.68px] left-[84.15px] transform rotate-[68.7deg] origin-[0_0]">
                D
              </div>
              <div className="absolute top-[36.3px] left-[87.94px] transform rotate-[83.5deg] origin-[0_0]">
                e
              </div>
              <div className="absolute top-[46.77px] left-[88.59px] transform rotate-[96.8deg] origin-[0_0]">
                v
              </div>
              <div className="absolute top-[56.62px] left-[86.94px] transform rotate-[110deg] origin-[0_0]">
                e
              </div>
              <div className="absolute top-[66px] left-[82.93px] transform rotate-[121.2deg] origin-[0_0]">
                l
              </div>
              <div className="absolute top-[71.99px] left-[78.99px] transform rotate-[132.5deg] origin-[0_0]">
                o
              </div>
              <div className="absolute top-[79.45px] left-[71.45px] transform rotate-[146.5deg] origin-[0_0]">
                p
              </div>
              <div className="absolute top-[85.07px] left-[61.87px] transform rotate-[160.6deg] origin-[0_0]">
                e
              </div>
              <div className="absolute top-[87.97px] left-[51.97px] transform rotate-[172.6deg] origin-[0_0]">
                r
              </div>
            </div>

            {/* Globe Icon */}
            <svg
              className="absolute top-[23px] left-[calc(50%-20.3px)] w-[40.7px] h-[40.7px] overflow-hidden"
              fill="#0A0D12"
              viewBox="0 0 41 41"
            >
              <path d="M20.3481 3.39111C29.7127 3.39111 37.3037 10.9821 37.3037 20.3467C37.3037 29.7112 29.7127 37.3022 20.3481 37.3022C10.9836 37.3022 3.39258 29.7112 3.39258 20.3467C3.39258 10.9821 10.9836 3.39111 20.3481 3.39111ZM20.3481 35.1828C21.4536 35.1828 23.0254 34.2316 24.4472 31.3881C24.9965 30.2894 25.4713 28.9957 25.8417 27.5528H14.8545C15.225 28.9957 15.6998 30.2894 16.2491 31.3881C17.6709 34.2316 19.2418 35.1828 20.3481 35.1828ZM14.4052 25.4333H26.2911C26.5581 23.8539 26.7065 22.144 26.7065 20.3467C26.71 18.7858 26.5938 17.227 26.3589 15.6839H14.3374C14.1025 17.227 13.9863 18.7858 13.9898 20.3467C13.9898 22.144 14.1382 23.8539 14.4052 25.4333ZM28.0239 27.5528C27.3703 30.3352 26.3487 32.7047 25.0855 34.4105C28.5865 33.2265 31.5216 30.782 33.3192 27.5528H28.0239ZM34.289 25.4333C34.8825 23.8032 35.1855 22.0815 35.1843 20.3467C35.1843 18.7181 34.9215 17.1506 34.4365 15.6839H28.5021C28.7199 17.2286 28.8281 18.7867 28.8259 20.3467C28.8259 22.1185 28.6903 23.8277 28.4376 25.4333H34.289ZM12.2586 25.4333C11.9984 23.7503 11.8686 22.0497 11.8704 20.3467C11.8704 18.73 11.9831 17.165 12.1951 15.6839H6.25976C5.76317 17.1883 5.51072 18.7625 5.51202 20.3467C5.51202 22.1338 5.82825 23.8472 6.40728 25.4333H12.2586ZM7.37629 27.5528C9.17407 30.7821 12.1094 33.2267 15.6108 34.4105C14.3476 32.7047 13.326 30.3352 12.6724 27.5528H7.37629ZM14.7494 13.5645H25.9469C25.5628 11.9494 25.0499 10.5108 24.4472 9.30521C23.0254 6.46177 21.4545 5.51056 20.3481 5.51056C19.2426 5.51056 17.6709 6.46177 16.2491 9.30521C15.6464 10.5108 15.1335 11.9503 14.7494 13.5645ZM28.1206 13.5645H33.5464C31.778 10.1312 28.7439 7.52003 25.0855 6.28288C26.4123 8.07509 27.4729 10.5981 28.1206 13.5645ZM15.6108 6.28288C11.9523 7.52003 8.91831 10.1312 7.14993 13.5645H12.5757C13.2234 10.5981 14.284 8.07509 15.6108 6.28288Z" />
            </svg>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute h-[16.51%] top-[88.68%] bottom-[-5.19%] left-[calc(50%-52px)] rounded-[100px] border-gray-300 border-solid border-[1px] box-border w-[105px] overflow-hidden">
          <motion.div
            className="absolute top-[43px] left-[35px]"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-[35px] h-[35px] text-white/20" />
          </motion.div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden w-full relative h-[852px] overflow-hidden text-left text-white font-raleway pt-20 bg-[#3A0764]">
        {/* Background Images - Fixed responsive positioning */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            className="absolute w-full h-[560px] top-0 left-0 object-cover object-center scale-[2.2] origin-center"
            alt="Background"
            src="https://api.builder.io/api/v1/image/assets/TEMP/c32e5d3461cc95c68d445b7f52c83cc7a0d3627d?width=1704"
          />
          <img
            className="absolute w-full h-[412px] top-0 left-0 object-cover object-center scale-[2.4] origin-center mix-blend-overlay"
            alt="Vector"
            src="https://api.builder.io/api/v1/image/assets/TEMP/8cffb4abe264bd86a0d443971bcac0e3a7ba3de3?width=1908"
          />
        </div>

        {/* Background PORTOFOLIO Text */}
        <div className="absolute top-[70px] left-4 right-4 h-[71px] flex items-center justify-center text-center px-4 text-[rgba(217,217,217,0.10)] font-raleway font-bold leading-[1.27] tracking-[-2.774px] backdrop-blur-[7.832335472106934px] text-stroke-0_39 text-[clamp(40px,12vw,55.473px)]">
          PORTOFOLIO
        </div>

        {/* Profile Image */}
        <img
          className="absolute top-[107px] left-[calc(50%-220px)] rounded-t-full w-[440px] h-[640px] overflow-hidden object-cover border-4 border-gray-900 shadow-[0_16px_48px_rgba(0,0,0,0.35)]"
          alt="Profile"
          src="/images/profile.jpg"
          onError={(e) => {
            console.log("Profile image failed to load, using fallback");
            (e.target as HTMLImageElement).src = defaultProfile;
          }}
        />

        {/* Decorative Star */}
        <motion.svg
          className="absolute top-[122px] right-4 w-[81px] h-[81px] overflow-hidden"
          viewBox="0 0 81 81"
          fill="#FDFDFD"
          style={{
            filter: "drop-shadow(0 0 16px #fff) drop-shadow(0 0 32px #ffb6ff)",
          }}
          animate={{
            filter: [
              "drop-shadow(0 0 16px #fff) drop-shadow(0 0 32px #ffb6ff)",
              "drop-shadow(0 0 48px #fff) drop-shadow(0 0 96px #ffb6ff)",
              "drop-shadow(0 0 16px #fff) drop-shadow(0 0 32px #ffb6ff)",
            ],
          }}
          transition={{
            filter: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            },
          }}
        >
          <path d="M40.5 81C39.3274 42.6311 38.3689 41.6786 0 40.5C38.3689 39.3274 39.3216 38.3689 40.5 0C41.6725 38.3689 42.6311 39.3216 81 40.5C42.6311 41.6786 41.6786 42.6194 40.5 81Z" />
        </motion.svg>

        {/* About Section */}
        <div className="absolute top-[587px] left-4 right-4 flex flex-col items-start justify-start gap-6 text-lg px-2">
          <div className="self-stretch flex flex-col items-start justify-start gap-1">
            <b className="self-stretch relative leading-8">About me</b>
            <div className="self-stretch relative text-sm leading-7 font-semibold text-gray-100">
              Passionate about frontend development, I focus on crafting digital
              products.
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="w-52 h-10 flex flex-row items-center justify-start gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 relative rounded-[9999px] border-gray-300 border-solid border-[1px] box-border h-10 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform hover:border-white"
                title={social.label}
              >
                <social.icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Name and Globe Section */}
        <div className="absolute top-[467px] left-4 right-4 flex flex-row items-start justify-between text-[40px] px-2">
          <div className="w-[217px] flex flex-col items-start justify-start">
            <b className="self-stretch relative tracking-[-0.05em] leading-[56px]">
              PUNJUNG
            </b>
            <b className="self-stretch relative tracking-[-0.05em] leading-[56px] mt-[-4px]">
              ADI N
            </b>
          </div>

          {/* Globe with Rotating Text */}
          <div className="w-[97px] relative rounded-[121.25px] bg-white h-[97px] overflow-hidden text-[8.18px] text-gray-700">
            <div className="absolute top-[12.11px] left-[12.13px] w-[71.7px] h-[71.6px]">
              <div className="absolute top-[0px] left-[0px] w-[71.7px] h-[71.6px] animate-spin-slow">
                <div className="absolute top-[71.59px] left-[32.61px] transform rotate-[-170.6deg] origin-[0_0]">
                  E
                </div>
                <div className="absolute top-[69.66px] left-[23.89px] transform rotate-[-157deg] origin-[0_0]">
                  x
                </div>
                <div className="absolute top-[66.14px] left-[16.57px] transform rotate-[-143.3deg] origin-[0_0]">
                  p
                </div>
                <div className="absolute top-[60.4px] left-[9.66px] transform rotate-[-129.3deg] origin-[0_0]">
                  e
                </div>
                <div className="absolute top-[53.68px] left-[4.74px] transform rotate-[-117.2deg] origin-[0_0]">
                  r
                </div>
                <div className="absolute top-[47.8px] left-[2.05px] transform rotate-[-107.2deg] origin-[0_0]">
                  t
                </div>
                <div className="absolute top-[42.02px] left-[0.54px] transform rotate-[-98deg] origin-[0_0]">
                  &nbsp;
                </div>
                <div className="absolute top-[36.49px] left-[0px] transform rotate-[-88.7deg] origin-[0_0]">
                  f
                </div>
                <div className="absolute top-[30.24px] left-[0.38px] transform rotate-[-77.1deg] origin-[0_0]">
                  o
                </div>
                <div className="absolute top-[22.23px] left-[2.68px] transform rotate-[-65deg] origin-[0_0]">
                  r
                </div>
                <div className="absolute top-[16.54px] left-[5.65px] transform rotate-[-55.4deg] origin-[0_0]">
                  &nbsp;
                </div>
                <div className="absolute top-[11.89px] left-[9.11px] transform rotate-[-44.2deg] origin-[0_0]">
                  F
                </div>
                <div className="absolute top-[6.41px] left-[15.39px] transform rotate-[-32.1deg] origin-[0_0]">
                  r
                </div>
                <div className="absolute top-[3.08px] left-[21.21px] transform rotate-[-20.1deg] origin-[0_0]">
                  o
                </div>
                <div className="absolute top-[0.56px] left-[29.36px] transform rotate-[-6.4deg] origin-[0_0]">
                  n
                </div>
                <div className="absolute top-[0.08px] left-[37.64px] transform rotate-[5.2deg] origin-[0_0]">
                  t
                </div>
                <div className="absolute top-[0.89px] left-[43.84px] transform rotate-[16.9deg] origin-[0_0]">
                  e
                </div>
                <div className="absolute top-[3.77px] left-[51.86px] transform rotate-[30.5deg] origin-[0_0]">
                  n
                </div>
                <div className="absolute top-[8.48px] left-[59.03px] transform rotate-[44.6deg] origin-[0_0]">
                  d
                </div>
                <div className="absolute top-[14.92px] left-[64.87px] transform rotate-[56.2deg] origin-[0_0]">
                  &nbsp;
                </div>
                <div className="absolute top-[19.96px] left-[68.02px] transform rotate-[68.7deg] origin-[0_0]">
                  D
                </div>
                <div className="absolute top-[29.36px] left-[71.09px] transform rotate-[83.5deg] origin-[0_0]">
                  e
                </div>
                <div className="absolute top-[37.82px] left-[71.61px] transform rotate-[96.8deg] origin-[0_0]">
                  v
                </div>
                <div className="absolute top-[45.79px] left-[70.27px] transform rotate-[110deg] origin-[0_0]">
                  e
                </div>
                <div className="absolute top-[53.36px] left-[67.04px] transform rotate-[121.2deg] origin-[0_0]">
                  l
                </div>
                <div className="absolute top-[58.21px] left-[63.85px] transform rotate-[132.5deg] origin-[0_0]">
                  o
                </div>
                <div className="absolute top-[64.24px] left-[57.75px] transform rotate-[146.5deg] origin-[0_0]">
                  p
                </div>
                <div className="absolute top-[68.78px] left-[50.01px] transform rotate-[160.6deg] origin-[0_0]">
                  e
                </div>
                <div className="absolute top-[71.13px] left-[42.01px] transform rotate-[172.6deg] origin-[0_0]">
                  r
                </div>
              </div>

              {/* Globe Icon */}
              <svg
                className="absolute top-[18.61px] left-[calc(50%-16.45px)] w-[32.9px] h-[32.9px] overflow-hidden"
                fill="#0A0D12"
                viewBox="0 0 34 34"
              >
                <path d="M16.9753 3.45776C24.545 3.45776 30.681 9.59383 30.681 17.1635C30.681 24.7332 24.545 30.8693 16.9753 30.8693C9.4056 30.8693 3.26953 24.7332 3.26953 17.1635C3.26953 9.59383 9.4056 3.45776 16.9753 3.45776ZM16.9753 29.156C17.8689 29.156 19.1394 28.3871 20.2886 26.0887C20.7327 25.2006 21.1165 24.1548 21.4159 22.9885H12.5346C12.8341 24.1548 13.2178 25.2006 13.6619 26.0887C14.8111 28.3871 16.081 29.156 16.9753 29.156ZM12.1714 21.2752H21.7791C21.995 19.9985 22.1149 18.6163 22.1149 17.1635C22.1178 15.9018 22.0239 14.6418 21.834 13.3944H12.1166C11.9267 14.6418 11.8328 15.9018 11.8356 17.1635C11.8356 18.6163 11.9556 19.9985 12.1714 21.2752ZM23.1799 22.9885C22.6515 25.2376 21.8257 27.1529 20.8047 28.5317C23.6346 27.5747 26.0071 25.5987 27.4602 22.9885H23.1799ZM28.2441 21.2752C28.7239 19.9575 28.9688 18.5659 28.9678 17.1635C28.9678 15.8471 28.7554 14.58 28.3634 13.3944H23.5664C23.7424 14.643 23.8299 15.9026 23.8282 17.1635C23.8282 18.5958 23.7185 19.9773 23.5143 21.2752H28.2441ZM10.4363 21.2752C10.2259 19.9148 10.121 18.5401 10.1224 17.1635C10.1224 15.8567 10.2135 14.5916 10.3849 13.3944H5.58717C5.18576 14.6105 4.9817 15.8829 4.98275 17.1635C4.98275 18.6081 5.23836 19.9931 5.70641 21.2752H10.4363ZM6.4897 22.9885C7.9429 25.5988 10.3157 27.5749 13.1459 28.5317C12.1248 27.1529 11.299 25.2376 10.7707 22.9885H6.4897ZM12.4496 11.6812H21.5009C21.1905 10.3757 20.7759 9.21281 20.2886 8.23833C19.1394 5.93987 17.8696 5.17098 16.9753 5.17098C16.0817 5.17098 14.8111 5.93987 13.6619 8.23833C13.1747 9.21281 12.7601 10.3764 12.4496 11.6812ZM23.258 11.6812H27.6438C26.2144 8.90599 23.7619 6.7953 20.8047 5.79528C21.8771 7.24398 22.7344 9.28339 23.258 11.6812ZM13.1459 5.79528C10.1887 6.7953 7.73616 8.90599 6.30673 11.6812H10.6926C11.2161 9.28339 12.0734 7.24398 13.1459 5.79528Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute h-[12.79%] top-[94.13%] bottom-[-6.92%] left-[calc(50%-36.5px)] rounded-[69.87px] border-gray-300 border-solid border-[0.7px] box-border w-[73.4px] overflow-hidden">
          <ArrowDown className="absolute top-[17.04px] left-[24.46px] w-[24.5px] h-[24.5px] text-white/20" />
        </div>
      </div>
    </section>
  );
}
