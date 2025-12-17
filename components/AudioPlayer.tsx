import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Using a copyright-free classical instrumental clip
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112762.mp3"; 

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Autoplay blocked", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-20 right-4 z-40 md:bottom-8 md:left-8 md:right-auto">
      <audio ref={audioRef} src={audioUrl} loop />
      <button
        onClick={togglePlay}
        className="bg-silk-maroon/90 text-temple-gold p-3 rounded-full shadow-lg border-2 border-temple-gold hover:scale-110 transition-transform"
        title={isPlaying ? "Mute Music" : "Play Traditional Music"}
      >
        {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
      </button>
    </div>
  );
};

export default AudioPlayer;