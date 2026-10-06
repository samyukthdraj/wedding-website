"use client";
import { motion } from "framer-motion";
import Image from "next/image";

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

export const GarlandRow = () => {
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
