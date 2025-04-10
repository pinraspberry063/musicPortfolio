"use client"; // Ensure interactivity in Next.js
import React, { useRef, useState, useEffect } from "react";
import { FiPlayCircle , FiPauseCircle  } from "react-icons/fi";
import Image from "next/image";

const Player = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLInputElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // Play/Pause Toggle
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update Progress Bar
  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current && progressRef.current) {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    };

    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
      };
    }
  }, []);

  // Seek Through Song
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const seekTime = (Number(e.target.value) / 100) * audioRef.current.duration;
    audioRef.current.currentTime = seekTime;
    setProgress(Number(e.target.value));
  };

  return (
    <div className="flex items-center space-x-4 p-4 border-2 rounded-lg w-full max-w-lg py-10 px-10">
      {/* Album Art */}
      <Image src="/blue.jpg" alt="Song Thumbnail" width={80} height={80} className="rounded-lg" />

      <div className="flex flex-col flex-grow">
        {/* Title and Controls */}
        <div className="flex items-center space-x-3">
          <button onClick={togglePlay} className="text-xl">
            {isPlaying ? <FiPauseCircle /> : <FiPlayCircle />}
          </button>
          <span className="text-lg font-semibold">Title</span>
        </div>

        {/* Progress Bar */}
        <input
          ref={progressRef}
          type="range"
          value={progress}
          onChange={handleSeek}
          className="w-full mt-2"
        />
      </div>

      {/* Audio Element (Hidden) */}
      <audio ref={audioRef} src="/jm.mp3" />
    </div>
  );
};

export default Player;
