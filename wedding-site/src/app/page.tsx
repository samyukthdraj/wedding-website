"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GiMonsteraLeaf } from "react-icons/gi";
import Image from "next/image";

const AudioWaveform = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className={`audio-waveform ${isPlaying ? "playing" : ""}`}>
    <span className="bar bar1"></span>
    <span className="bar bar2"></span>
    <span className="bar bar3"></span>
    <span className="bar bar4"></span>
  </div>
);

const RealisticGarland = ({ delay = 0, length = 1, flip = false }: { delay?: number; length?: number; flip?: boolean }) => (
  <motion.div
    className="realistic-garland-item"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, rotate: [-1.5, 1.5, -1.5] }}
    transition={{
      opacity: { duration: 2 },
      rotate: { repeat: Infinity, duration: 5 + (length * 0.5), ease: "easeInOut", delay },
    }}
  >
    <Image 
      src="/lotus-garland-transparent.jpg" 
      alt="Lotus Garland" 
      width={100} 
      height={350} 
      className={`garland-img len-${length}`}
      style={{
        transform: flip ? 'scaleX(-1)' : 'none',
        filter: 'contrast(1.05)'
      }}
      priority
    />
  </motion.div>
);

const GarlandRow = () => {
  const pattern = [1, 2, 1, 3, 2, 1, 2, 3, 1, 2, 1, 3, 2, 1, 2, 3, 1, 2, 1, 3];
  
  return (
    <div className="realistic-garland-row-container">
      {pattern.map((len, i) => (
        <RealisticGarland 
          key={i} 
          delay={i * 0.15} 
          length={len} 
          flip={i % 2 === 0} 
        />
      ))}
    </div>
  );
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Audio State
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const hasInteracted = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !audioRef.current) {
      audioRef.current = new Audio("/bg-music.mp3");
      audioRef.current.loop = true;
    }

    const startAudio = () => {
      if (!hasInteracted.current && audioRef.current) {
        hasInteracted.current = true;
        try {
          audioRef.current.volume = 1;
          audioRef.current.play().then(() => setIsPlaying(true)).catch((err) => console.log("Autoplay failed:", err));
        } catch (err) {
          console.error("Autoplay exception:", err);
        }
        
        ['click', 'scroll', 'touchstart'].forEach(e => 
          document.removeEventListener(e, startAudio)
        );
      }
    };
    
    if (typeof window !== "undefined") {
      ['click', 'scroll', 'touchstart'].forEach(e => 
        document.addEventListener(e, startAudio)
      );
    }

    return () => {
      if (typeof window !== "undefined") {
        ['click', 'scroll', 'touchstart'].forEach(e => 
          document.removeEventListener(e, startAudio)
        );
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      try {
        audioRef.current.volume = 1;
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch((err) => {
            console.error("Audio playback error:", err);
            alert("Error playing music. The file format might be unsupported.");
          });
        }
      } catch (err) {
        console.error("Audio sync error:", err);
        alert("Browser could not read the audio file format.");
      }
    }
  };

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
      <button 
        className="floating-music-btn"
        onClick={toggleMusic}
        aria-label="Toggle Music"
      >
        <AudioWaveform isPlaying={isPlaying} />
      </button>

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
        <div className="garland-row-wrapper">
          <GarlandRow />
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
