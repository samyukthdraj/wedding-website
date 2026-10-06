import { HeroSection } from "../components/HeroSection";
import { Envelope } from "../components/Envelope";
import { GarlandRow } from "../components/GarlandRow";
import { AudioPlayer } from "../components/AudioPlayer";
import { EventsSection } from "../components/EventsSection";

export default function Home() {
  return (
    <main>
      <AudioPlayer />

      <HeroSection />

      <div className="invitation-section">
        <div className="garland-row-wrapper">
          <GarlandRow />
        </div>

        <Envelope />
      </div>

      <EventsSection />
    </main>
  );
}
