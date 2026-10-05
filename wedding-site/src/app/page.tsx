"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GiMonsteraLeaf } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import Image from "next/image";

const Thoranam = () => (
  <div className="thoranam-container">
    {Array.from({ length: 14 }).map((_, i) => (
      <div
        key={i}
        className="thoranam-item"
        style={{ animationDelay: `${i * 0.1}s` }}
      >
        <div className="marigold" />
        <FaLeaf className="mango-leaf-svg" />
      </div>
    ))}
  </div>
);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const yText = useTransform(heroScroll, [0, 1], ["0%", "80%"]);

  // Gatefold Notebook Opening State
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
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
              <span className="weds">WEDS</span>
              <span>Gautham</span>
            </h1>
            <div className="hero-details">DECEMBER 23, 2026</div>
          </motion.div>
        </div>
      </div>

      <div className="invitation-section">
        <div className="thoranam-wrapper">
          <Thoranam />
        </div>

        <div className="env-wrapper">
          {/* Envelope Gatefold Container matches card dimensions automatically! */}
          <div className="env-gatefold-wrapper">
            {/* The Ganesha Card (Static, sits beneath the flaps, no jumping!) */}
            <div
              className="invitation-card"
              style={{ cursor: isOpen ? "pointer" : "default" }}
              onClick={isOpen ? toggleEnvelope : undefined}
            >
              <Image
                src="/ganesha.jpg"
                alt="Lord Ganesha"
                width={120}
                height={120}
                className="ganesha-icon"
              />

              <p className="blessings-text">
                With the blessings of the Almighty and the love of our families,
                we joyfully request the honour of your presence as Midhuna &
                Gautham begin their forever journey.
              </p>

              <div className="separator">
                <div className="separator-diamond" />
              </div>

              <div className="together-text">Together with their families</div>

              <h2 className="names-main">
                <span>Midhuna</span>
                <span className="ampersand">&</span>
                <span>Gautham</span>
              </h2>

              <div className="family-section">
                <div className="family-member">
                  <span className="relation">Daughter of</span>
                  <span className="parents-names">
                    Mr. Pavithran & Smt. Sheena
                  </span>
                  {/* <span className="blessed-by">
                    Blessed by: Late Mr. Prabhakaran Nair & Smt. Karthyayani
                    Amma
                  </span> */}
                </div>

                <div className="family-member">
                  <span className="relation">Son of</span>
                  <span className="parents-names">Mr. Suresh & Smt. Asha</span>
                  <span className="blessed-by">
                    Blessed by: Family and Friends
                  </span>
                </div>
              </div>

              <p className="invite-closing">
                {isOpen ? "Click anywhere to close" : "Click to Open"}
              </p>
            </div>

            {/* Envelope Gatefold Flaps (Covers the card completely when closed) */}
            <div
              className="env-gatefold-flaps"
              style={{ pointerEvents: isOpen ? "none" : "auto" }}
              onClick={!isOpen ? toggleEnvelope : undefined}
            >
              {/* Left Notebook Flap */}
              <motion.div
                className="env-left-flap"
                animate={{ rotateY: isOpen ? -180 : 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Right Notebook Flap */}
              <motion.div
                className="env-right-flap"
                animate={{ rotateY: isOpen ? 180 : 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
