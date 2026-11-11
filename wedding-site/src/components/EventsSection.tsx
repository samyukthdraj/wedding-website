"use client";
import { motion } from "framer-motion";
import { FaPlus, FaShare } from "react-icons/fa";
import { FloralCrest, FloralDivider } from "./FloralAccents";

type EngagementEvent = {
  title: string;
  date: string;
  time: string;
  startTimeISO: string;
  endTimeISO: string;
  location: string;
  address: string;
};

const engagementEvent: EngagementEvent = {
  title: "Engagement Ceremony",
  date: "December 23, 2026",
  time: "10:00 AM",
  startTimeISO: "20261223T100000",
  endTimeISO: "20261223T140000",
  location: "Sree Krishna Temple",
  address: "Sree Krishna Temple, 789 Divine Road, Placeholder City",
};

const generateGoogleCalendarLink = (event: EngagementEvent) => {
  const title = encodeURIComponent(`Midhuna & Gautham - ${event.title}`);
  const details = encodeURIComponent(
    "Engagement celebration of Midhuna & Gautham",
  );
  const location = encodeURIComponent(event.address);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${event.startTimeISO}/${event.endTimeISO}&details=${details}&location=${location}`;
};

const generateIcsFile = (event: EngagementEvent) => {
  const icsData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Midhuna & Gautham - ${event.title}
DTSTART:${event.startTimeISO}
DTEND:${event.endTimeISO}
DESCRIPTION:Engagement celebration of Midhuna & Gautham
LOCATION:${event.address}
END:VEVENT
END:VCALENDAR`;
  return `data:text/calendar;charset=utf8,${encodeURIComponent(icsData)}`;
};

const handleAddToCalendar = (event: EngagementEvent) => {
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isMac = /Macintosh|Mac OS X/.test(navigator.userAgent);

  if (isIOS || isMac) {
    const link = document.createElement("a");
    link.href = generateIcsFile(event);
    link.download = "Midhuna-Gautham-Engagement.ics";
    link.click();
  } else {
    window.open(generateGoogleCalendarLink(event), "_blank");
  }
};

export const EventsSection = () => {
  return (
    <section className="events-section">
      <h2 className="events-title">Date &amp; Location</h2>

      <div className="events-single-wrap">
        <motion.div
          className="event-card"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="location-card">
            <FloralCrest className="location-floral-crest" />

            <h3 className="polaroid-caption">{engagementEvent.title}</h3>

            <FloralDivider className="location-divider" />

            <div className="event-details-inner">
              <div className="date-time-row">
                <p className="event-info">
                  <span className="info-label">Date</span>
                  <span className="info-value">{engagementEvent.date}</span>
                </p>

                <p className="event-info">
                  <span className="info-label">Time</span>
                  <span className="info-value">{engagementEvent.time}</span>
                </p>
              </div>

              <div className="calendar-buttons">
                <button
                  type="button"
                  onClick={() => handleAddToCalendar(engagementEvent)}
                  className="cal-btn"
                >
                  <FaPlus className="icon-left" /> Add to Calendar
                </button>
              </div>

              <div className="map-and-directions">
                <p className="event-info venue-info">
                  <span className="info-label">Venue</span>
                  <span className="info-value venue-name">
                    {engagementEvent.location}
                  </span>
                  <span className="info-address">
                    {engagementEvent.address}
                  </span>
                </p>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    engagementEvent.address,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-btn"
                >
                  Get Directions <FaShare className="icon-share" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
