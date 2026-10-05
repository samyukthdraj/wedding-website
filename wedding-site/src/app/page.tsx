'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main>
      <div 
        ref={containerRef} 
        className="hero-container"
      >
        <motion.div 
          className="hero-background"
          style={{ 
            y, 
            backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        />
        <div className="hero-overlay" />
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 1.5
          }}
        >
          <h1 className="hero-title">Midhuna & Gautham</h1>
          <div className="hero-details">
            <p>DECEMBER 25, 2026</p>
            <span className="hero-separator">✦</span>
            <p>THE GRAND PALACE</p>
          </div>
        </motion.div>
      </div>

      {/* Content below the hero to allow scrolling and see parallax effect */}
      <div className="scroll-content">
        <h2>Join Us In Celebrating</h2>
        <p>More details coming soon.</p>
      </div>
    </main>
  );
}
