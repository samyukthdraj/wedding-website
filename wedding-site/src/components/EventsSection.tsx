"use client";
import { motion } from "framer-motion";
import { FaPlus, FaShare } from "react-icons/fa";
import {
  COUPLE,
  ENGAGEMENT_EVENT,
  type EngagementEventConfig,
  getDirectionsUrl,
} from "../constants/engagement";
import { FloralCrest, FloralDivider } from "./FloralAccents";

const getEventFullLocation = (event: EngagementEventConfig) => {
  return event.address.includes(event.venueName)
    ? event.address
    : `${event.venueName}, ${event.address}`;
};

const generateGoogleCalendarLink = (event: EngagementEventConfig) => {
  const title = encodeURIComponent(
    `${COUPLE.bride} & ${COUPLE.groom} - ${event.title}`,
  );
  const details = encodeURIComponent(event.calendarDescription);
  const location = encodeURIComponent(getEventFullLocation(event));
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${event.startTimeISO}/${event.endTimeISO}&details=${details}&location=${location}`;
};

const generateIcsFile = (event: EngagementEventConfig) => {
  const fullLocation = getEventFullLocation(event);
  const icsData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${COUPLE.bride} & ${COUPLE.groom} - ${event.title}
DTSTART:${event.startTimeISO}
DTEND:${event.endTimeISO}
DESCRIPTION:${event.calendarDescription}
LOCATION:${fullLocation}
END:VEVENT
END:VCALENDAR`;
  return `data:text/calendar;charset=utf8,${encodeURIComponent(icsData)}`;
};

const handleAddToCalendar = (event: EngagementEventConfig) => {
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isMac = /Macintosh|Mac OS X/.test(navigator.userAgent);

  if (isIOS || isMac) {
    const link = document.createElement("a");
    link.href = generateIcsFile(event);
    link.download = event.calendarFileName;
    link.click();
  } else {
    window.open(generateGoogleCalendarLink(event), "_blank");
  }
};

export const EventsSection = () => {
  const directionsUrl = getDirectionsUrl(ENGAGEMENT_EVENT);

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

            <h3 className="polaroid-caption">{ENGAGEMENT_EVENT.title}</h3>

            <FloralDivider className="location-divider" />

            <div className="event-details-inner">
              <div className="date-time-row">
                <p className="event-info">
                  <span className="info-label">Date</span>
                  <span className="info-value">{ENGAGEMENT_EVENT.date}</span>
                </p>

                <p className="event-info">
                  <span className="info-label">Time</span>
                  <span className="info-value">{ENGAGEMENT_EVENT.time}</span>
                </p>
              </div>

              <div className="calendar-buttons">
                <button
                  type="button"
                  onClick={() => handleAddToCalendar(ENGAGEMENT_EVENT)}
                  className="cal-btn"
                >
                  <FaPlus className="icon-left" /> Add to Calendar
                </button>
              </div>

              <div className="map-and-directions">
                <p className="event-info venue-info">
                  <span className="info-label">Venue</span>
                  <span className="info-value venue-name">
                    {ENGAGEMENT_EVENT.venueName}
                  </span>
                  <span className="info-address">
                    {ENGAGEMENT_EVENT.address}
                  </span>
                </p>

                <a
                  href={directionsUrl}
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
