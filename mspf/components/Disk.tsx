'use client';

import { useRef, useState } from 'react';


type DiskProps = {
    playing: boolean;
    img: string;
  }

export default function Disk({playing, img} : DiskProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(playing);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
      <div
        onClick={togglePlayback}
        className={`relative w-96 aspect-square  rounded-full bg-cover bg-center border-2 border-black shadow-xl transition-transform duration-800 overflow-hidden ${
          isPlaying ? 'animate-spin-slow' : ''
        }`}
        style={{
          backgroundImage: `url(${img})`, // use your image!
          animationPlayState: isPlaying ? 'running' : 'paused',
        }} >

      </div>
  );
}
