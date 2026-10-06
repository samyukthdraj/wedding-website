import { HeroSection } from "../components/HeroSection";
import { Envelope } from "../components/Envelope";
import { GarlandRow } from "../components/GarlandRow";
import { AudioPlayer } from "../components/AudioPlayer";
import { EventsSection } from "../components/EventsSection";
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

      <EventsSection />
    </main>
  );
}
