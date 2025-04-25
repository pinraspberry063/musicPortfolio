"use client"; // Ensure interactivity in Next.js
import React, { useRef, useState, useEffect } from "react";
import { FiPlayCircle , FiPauseCircle  } from "react-icons/fi";
import Image from "next/image";
import Disk from "./Disk";

type SongProps = {
  audio: string;
  title: string;
  desc?: string;
  pos?: string;
}

const Player = ({audio, title, desc, pos = "right"}: SongProps) => {
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
    <div className="flex items-center bg-gray-90 space-x-4 w-4/5 h-4/5 pt-50 px-10">


      <div className="flex flex-col flex-grow">
        {/* Controls */}
        <div className="flex flex-row w-full justify-center space-x-8 mb-5">
          <img onClick={() =>  {
            if (!audioRef.current) return;
            audioRef.current.currentTime = audioRef.current.currentTime-5;
          }} 
            src={'/rewind.png'} alt={'rewind'} width={50} height={50}/>
          <button onClick={togglePlay} className="text-xl">
            {isPlaying ? <FiPauseCircle size={50} color="white"/> : <FiPlayCircle size={50} color="white"/>}
          </button>
          <img onClick={() =>  {
            if (!audioRef.current) return;
            audioRef.current.currentTime = audioRef.current.currentTime+5;
          }}
          src={'/forward.png'} alt={'forward'} width={50} height={50}/>
          
        </div>

        {/* Progress Bar */}
        <input
          ref={progressRef}
          type="range"
          value={progress}
          onChange={handleSeek}
          className="w-full mt-2"
        />

        {/* Title */}
        { pos == "left" &&  <h2 className="text-8xl font-semibold self-end mt-40 text-white">{title}</h2> }
        { pos == "right" &&  <h2 className="text-8xl font-semibold mt-40 text-white">{title}</h2> }
       
        
      </div>

      

      {/* Audio Element (Hidden) */}
      <audio ref={audioRef} src={audio} />
    </div>
  );
};

export default Player;
