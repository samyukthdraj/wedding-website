"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleEnvelope = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="env-wrapper">
      <div className="env-gatefold-wrapper">
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

        <div
          className="env-gatefold-flaps"
          style={{ pointerEvents: isOpen ? "none" : "auto" }}
          onClick={!isOpen ? toggleEnvelope : undefined}
        >
          <motion.div
            className="env-left-flap"
            animate={{ rotateY: isOpen ? -180 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.div
            className="env-right-flap"
            animate={{ rotateY: isOpen ? 180 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </div>
  );
};
