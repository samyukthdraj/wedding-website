"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlus, FaShare } from "react-icons/fa";

type WeddingEvent = {
  title: string;
  date: string;
  time: string;
  startTimeISO: string;
  endTimeISO: string;
  location: string;
  address: string;
  dressCode: string;
  image: string;
  rotation: number;
};

const events: WeddingEvent[] = [
  {
    title: "Haldi",
    date: "December 21, 2026",
    time: "10:00 AM",
    startTimeISO: "20261221T100000",
    endTimeISO: "20261221T140000",
    location: "The Grand Courtyard",
    address: "The Grand Courtyard, 123 Wedding Lane, Placeholder City",
    dressCode: "Yellow & White Traditional",
    image: "/couple_haldi.jpg",
    rotation: -3,
  },
  {
    title: "Sangeet",
    date: "December 21, 2026",
    time: "7:00 PM",
    startTimeISO: "20261221T190000",
    endTimeISO: "20261221T233000",
    location: "Royal Banquet Hall",
    address: "Royal Banquet Hall, 456 Dance Ave, Placeholder City",
    dressCode: "Glamorous Indo-Western",
    image: "/couple_sangeet.jpg",
    rotation: 2,
  },
  {
    title: "Wedding",
    date: "December 23, 2026",
    time: "9:00 AM",
    startTimeISO: "20261223T090000",
    endTimeISO: "20261223T130000",
    location: "Sree Krishna Temple",
    address: "Sree Krishna Temple, 789 Divine Road, Placeholder City",
    dressCode: "Traditional Kerala Kasavu",
    image: "/couple_wedding.jpg",
    rotation: -2,
  },
  {
    title: "Reception",
    date: "December 23, 2026",
    time: "6:30 PM",
    startTimeISO: "20261223T183000",
    endTimeISO: "20261223T230000",
    location: "Lakeview Resort",
    address: "Lakeview Resort, 101 Waterside Blvd, Placeholder City",
    dressCode: "Elegant Evening Wear",
    image: "/couple_reception.jpg",
    rotation: 3,
  },
];

const generateGoogleCalendarLink = (event: WeddingEvent) => {
  const title = encodeURIComponent(`Midhuna & Gautham - ${event.title}`);
  const details = encodeURIComponent(`Dress Code: ${event.dressCode}`);
  const location = encodeURIComponent(event.address);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${event.startTimeISO}/${event.endTimeISO}&details=${details}&location=${location}`;
};

const generateIcsFile = (event: WeddingEvent) => {
  const icsData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Midhuna & Gautham - ${event.title}
DTSTART:${event.startTimeISO}
DTEND:${event.endTimeISO}
DESCRIPTION:Dress Code: ${event.dressCode}
LOCATION:${event.address}
END:VEVENT
END:VCALENDAR`;
  return `data:text/calendar;charset=utf8,${encodeURIComponent(icsData)}`;
};

const handleAddToCalendar = (event: WeddingEvent) => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const isMac = /Macintosh|Mac OS X/.test(navigator.userAgent);
  
  if (isIOS || isMac) {
    // Apple Calendar (.ics)
    const link = document.createElement('a');
    link.href = generateIcsFile(event);
    link.download = `${event.title}.ics`;
    link.click();
  } else {
    // Android / Windows / Linux (Google Calendar)
    window.open(generateGoogleCalendarLink(event), '_blank');
  }
};

export const EventsSection = () => {
  return (
    <section className="events-section">
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
                      <span className="info-label">Date</span>
                      <span className="info-value">{event.date}</span>
                    </p>
                    <p className="event-info">
                      <span className="info-label">Time</span>
                      <span className="info-value">{event.time}</span>
                    </p>
                    <p className="event-info">
                      <span className="info-label">Dress Code</span>
                      <span className="info-value">{event.dressCode}</span>
                    </p>

                    <div className="calendar-buttons">
                      <button onClick={() => handleAddToCalendar(event)} className="cal-btn">
                        <FaPlus className="icon-left" /> Add to Calendar
                      </button>
                    </div>

                    <div className="map-and-directions">
                      <p className="event-info venue-info">
                        <span className="info-label">Venue</span>
                        <span className="info-value">{event.location}</span>
                      </p>

                      <a href={`https://maps.google.com/?q=${encodeURIComponent(event.address)}`} target="_blank" rel="noopener noreferrer" className="directions-btn">
                        Get Directions <FaShare style={{ marginLeft: '0.3rem' }} />
                      </a>
                    </div>
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
