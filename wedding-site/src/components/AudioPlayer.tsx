"use client";
import { useState, useRef, useEffect } from "react";

const AudioWaveform = ({ isPlaying }: { isPlaying: boolean }) => (
  <div className={`audio-waveform ${isPlaying ? "playing" : ""}`}>
    <div className="bar bar1"></div>
    <div className="bar bar2"></div>
    <div className="bar bar3"></div>
    <div className="bar bar4"></div>
  </div>
);

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); // Default state is playing
  const hasInteracted = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && !audioRef.current) {
      audioRef.current = new Audio("/bg-music.mp3");
      audioRef.current.loop = true;
      
      // Attempt immediate autoplay on page load
      audioRef.current.play()
        .then(() => {
          hasInteracted.current = true;
        })
        .catch(() => {
          console.log("Autoplay blocked by browser. Waiting for user interaction to resume audio.");
        });
    }

    const forcePlayAudio = () => {
      if (audioRef.current && audioRef.current.paused && isPlaying) {
        audioRef.current.play()
          .then(() => {
            hasInteracted.current = true;
            // Successfully resumed
            ['click', 'scroll', 'touchstart', 'mousemove'].forEach(e => 
              document.removeEventListener(e, forcePlayAudio)
            );
          })
          .catch(() => {
            // Still blocked
          });
      }
    };
    
    if (typeof window !== "undefined") {
      ['click', 'scroll', 'touchstart', 'mousemove'].forEach(e => 
        document.addEventListener(e, forcePlayAudio)
      );
    }

    return () => {
      if (typeof window !== "undefined") {
        ['click', 'scroll', 'touchstart', 'mousemove'].forEach(e => 
          document.removeEventListener(e, forcePlayAudio)
        );
      }
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    if (audioRef.current) {
      try {
        audioRef.current.volume = 1;
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch((err) => {
            console.error("Audio playback error:", err);
            alert("Error playing music. The file format might be unsupported.");
          });
        }
      } catch (err) {
        console.error("Audio sync error:", err);
        alert("Browser could not read the audio file format.");
      }
    }
  };

  return (
    <button 
      className="floating-music-btn"
      onClick={toggleMusic}
      aria-label="Toggle Music"
    >
      <AudioWaveform isPlaying={isPlaying} />
    </button>
  );
};
