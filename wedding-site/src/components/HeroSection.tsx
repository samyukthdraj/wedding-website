"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COUPLE, HERO_COPY, SITE_ASSETS } from "../constants/engagement";
import { FloralCornerSprig } from "./FloralAccents";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(
    heroScroll,
    [0, 1],
    ["0%", isMobile ? "18%" : "40%"],
  );
  const yText = useTransform(
    heroScroll,
    [0, 1],
    ["0%", isMobile ? "32%" : "65%"],
  );

  return (
    <section ref={heroRef} className="hero-container">
      <div className="hero-background-wrapper">
        <motion.div
          className="hero-background"
          style={{
            y: yBg,
            backgroundImage: `url('${SITE_ASSETS.heroBackground}')`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: [1.08, 1, 1.04] }}
          transition={{
            opacity: { duration: 1.8, ease: "easeOut" },
            scale: {
              duration: 28,
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
        animate={{ opacity: 1, rotate: [-2, 3, -2] }}
        transition={{
          opacity: { duration: 1.6 },
          rotate: { repeat: Infinity, duration: 7, ease: "easeInOut" },
        }}
      >
        <FloralCornerSprig className="floral-corner-svg" />
      </motion.div>

      <motion.div
        className="leaf-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: [2, -3, 2] }}
        transition={{
          opacity: { duration: 1.6 },
          rotate: {
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut",
            delay: 0.8,
          },
        }}
      >
        <FloralCornerSprig className="floral-corner-svg" />
      </motion.div>

      <div className="hero-text-wrapper">
        <motion.div className="hero-content" style={{ y: yText }}>
          <motion.div
            className="hero-inner-reveal"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          >
            <h1 className="hero-title">
              <span>{COUPLE.bride}</span>
              <span className="weds">&amp;</span>
              <span>{COUPLE.groom}</span>
            </h1>
            <div className="hero-details">{HERO_COPY.subtitle}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
