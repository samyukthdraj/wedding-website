import { GiLotus } from "react-icons/gi";
import { HeroSection } from "../components/HeroSection";
import { Envelope } from "../components/Envelope";
import { GarlandRow } from "../components/GarlandRow";
import { AudioPlayer } from "../components/AudioPlayer";
import { EventsSection } from "../components/EventsSection";
import { RSVPSection } from "../components/RSVPSection";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <AudioPlayer />

      <HeroSection />

      <div className="invitation-section">
        <div className="garland-row-wrapper">
          <GarlandRow />
        </div>

        <Suspense fallback={<div className="env-wrapper" />}>
          <Envelope />
        </Suspense>
      </div>

      <div className="events-rsvp-wrapper">
        <div className="watermark-pattern">
          {Array.from({ length: 450 }).map((_, i) => (
            <GiLotus key={i} className="watermark-item" />
          ))}
        </div>
        <EventsSection />
        <RSVPSection />
      </div>
    </main>
  );
}
