"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GiMonsteraLeaf } from "react-icons/gi";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Run only on client
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Re-enabled parallax for mobile!
  // By omitting useSpring, we prevent the "vibrating/shaking" physics calculations.
  // We apply a slightly gentler parallax (40%) on mobile to keep it perfectly smooth and readable.
  const yBg = useTransform(
    heroScroll,
    [0, 1],
    ["0%", isMobile ? "20%" : "50%"],
  );
  const yText = useTransform(
    heroScroll,
    [0, 1],
    ["0%", isMobile ? "40%" : "80%"],
  );

  return (
    <div ref={heroRef} className="hero-container">
      <div className="hero-background-wrapper">
        <motion.div
          className="hero-background"
          style={{
            y: yBg,
            backgroundImage: "url('/bg-hero.jpg')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: [1.15, 1, 1.05] }}
          transition={{
            opacity: { duration: 2.5, ease: "easeOut" },
            scale: {
              duration: 30,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
        />
        <div className="hero-overlay" />
      </div>

      <motion.div
        className="leaf-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: [-2, 4, -2] }}
        transition={{
          opacity: { duration: 2 },
          rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        }}
      >
        <GiMonsteraLeaf className="w-full h-full" />
      </motion.div>

      <motion.div
        className="leaf-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: [3, -5, 3] }}
        transition={{
          opacity: { duration: 2 },
          rotate: {
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
            delay: 1,
          },
        }}
      >
        <GiMonsteraLeaf className="w-full h-full" />
      </motion.div>

      <div className="hero-text-wrapper">
        <motion.div
          className="hero-content"
          style={{ y: yText }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
        >
          <h1 className="hero-title">
            <span>Midhuna</span>
            <span className="weds">&</span>
            <span>Gautham</span>
          </h1>
          <div className="hero-details">DECEMBER 23, 2026</div>
        </motion.div>
      </div>
    </div>
  );
};
