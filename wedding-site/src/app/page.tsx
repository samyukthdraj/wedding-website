import { Suspense } from "react";
import { AudioPlayer } from "../components/AudioPlayer";
import { Envelope } from "../components/Envelope";
import { EventsSection } from "../components/EventsSection";
import { FloralWatermarkBlossom } from "../components/FloralAccents";
import { HeroSection } from "../components/HeroSection";

export default function Home() {
  return (
    <main>
      <AudioPlayer />

      <div className="hero-envelope-zone">
        <HeroSection />

        <div className="invitation-section">
          <Suspense fallback={<div className="env-wrapper" />}>
            <Envelope />
          </Suspense>
        </div>
      </div>

      <div className="events-rsvp-wrapper">
        <div className="watermark-pattern" aria-hidden="true">
          {Array.from({ length: 120 }).map((_, i) => (
            <FloralWatermarkBlossom
              key={i}
              variant={i % 2 === 0 ? "pink" : "peach"}
              className="watermark-item"
            />
          ))}
        </div>
        <EventsSection />
      </div>
    </main>
  );
}
