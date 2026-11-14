"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COUPLE, HERO_COPY } from "../constants/engagement";

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

  const yText = useTransform(
    heroScroll,
    [0, 1],
    ["0%", isMobile ? "32%" : "65%"],
  );

  return (
    <section ref={heroRef} className="hero-container">
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
