"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiFlowerStar, GiLotus } from "react-icons/gi";

const events = [
  {
    title: "Haldi",
    date: "December 21, 2026",
    time: "10:00 AM",
    location: "The Grand Courtyard, Placeholder",
    dressCode: "Yellow & White Traditional",
    image: "/couple_haldi.jpg",
    rotation: -3,
  },
  {
    title: "Sangeet",
    date: "December 21, 2026",
    time: "7:00 PM",
    location: "Royal Banquet Hall, Placeholder",
    dressCode: "Glamorous Indo-Western",
    image: "/couple_sangeet.jpg",
    rotation: 2,
  },
  {
    title: "Wedding",
    date: "December 23, 2026",
    time: "9:00 AM",
    location: "Sree Krishna Temple, Placeholder",
    dressCode: "Traditional Kerala Kasavu",
    image: "/couple_wedding.jpg",
    rotation: -2,
  },
  {
    title: "Reception",
    date: "December 23, 2026",
    time: "6:30 PM",
    location: "Lakeview Resort, Placeholder",
    dressCode: "Elegant Evening Wear",
    image: "/couple_reception.jpg",
    rotation: 3,
  },
];

export const EventsSection = () => {
  return (
    <section className="events-section">
      {/* Restored Elegant Floral Watermark Pattern */}
      <div className="watermark-pattern">
        {Array.from({ length: 80 }).map((_, i) => (
          <GiLotus key={i} className="watermark-item" />
        ))}
      </div>

      <h2 className="events-title">Celebrate With Us</h2>

      <div className="events-grid">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="event-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Polaroid Photo with Details Inside */}
            <div className="polaroid-wrapper">
              <div
                className="polaroid"
                style={{ transform: `rotate(${event.rotation}deg)` }}
              >
                <div className="polaroid-img-wrapper">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="polaroid-img"
                  />
                </div>
                <div className="polaroid-content">
                  <h3 className="polaroid-caption">{event.title}</h3>
                  <div className="event-details-inner">
                    <p className="event-info">
                      <span className="info-label">Time</span>
                      <span className="info-value" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {event.date}
                        <GiFlowerStar style={{ color: 'var(--primary-gold)', fontSize: '0.65rem' }} />
                        {event.time}
                      </span>
                    </p>
                    <p className="event-info">
                      <span className="info-label">Location</span>
                      <span className="info-value">{event.location}</span>
                    </p>
                    <p className="event-info">
                      <span className="info-label">Dress Code</span>
                      <span className="info-value">{event.dressCode}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
