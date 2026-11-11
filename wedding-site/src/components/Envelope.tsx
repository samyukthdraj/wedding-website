"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FloralCornerSprig, FloralDivider, WaxSealSvg } from "./FloralAccents";

export const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  const searchParams = useSearchParams();
  const guest = searchParams.get("guest");
  const guestName = guest ? guest.replace(/-/g, " ") : null;

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
          <FloralCornerSprig className="card-floral-tl" />
          <FloralCornerSprig className="card-floral-tr" />

          <Image
            src="/ganesha-floral.svg"
            alt="Lord Ganesha"
            width={116}
            height={116}
            className="ganesha-icon"
            unoptimized
          />

          {guestName && (
            <h3 className="guest-greeting">Dear {guestName},</h3>
          )}

          <p
            className="blessings-text"
            style={{ marginTop: guestName ? "0.5rem" : "1rem" }}
          >
            {guestName
              ? "With the blessings of the Almighty, we joyfully request the honour of your presence at the engagement of Midhuna & Gautham as they begin their forever journey."
              : "With the blessings of the Almighty and the love of our families, we joyfully request the honour of your presence at the engagement of Midhuna & Gautham as they begin their forever journey."}
          </p>

          <FloralDivider className="card-divider" />

          <div className="together-text">Together with their families</div>

          <h2 className="names-main">
            <span>Midhuna</span>
            <span className="ampersand">&amp;</span>
            <span>Gautham</span>
          </h2>

          <div className="family-section">
            <div className="family-member">
              <span className="relation">Daughter of</span>
              <span className="parents-names">
                Mr. Pavithran &amp; Smt. Sheena
              </span>
            </div>

            <div className="family-member">
              <span className="relation">Son of</span>
              <span className="parents-names">Mr. Suresh &amp; Smt. Asha</span>
              <span className="blessed-by">
                Blessed by: Family and Friends
              </span>
            </div>
          </div>
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
          >
            <FloralCornerSprig className="flap-floral-top" />
            <FloralCornerSprig className="flap-floral-bottom" />
            <div className="wax-seal-half wax-seal-left">
              <WaxSealSvg className="wax-seal-svg" idPrefix="left" />
            </div>
          </motion.div>

          <motion.div
            className="env-right-flap"
            animate={{ rotateY: isOpen ? 180 : 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <FloralCornerSprig className="flap-floral-top flap-floral-right-top" />
            <FloralCornerSprig className="flap-floral-bottom flap-floral-right-bottom" />
            <div className="wax-seal-half wax-seal-right">
              <WaxSealSvg className="wax-seal-svg" idPrefix="right" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
