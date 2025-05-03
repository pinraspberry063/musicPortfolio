'use client';

import { useState, useRef } from "react";
import { NAV_BAR_LINKS } from "@/constants";
import Link from "next/link";
import NavBar from "./NavBar";
import Image from 'next/image';
import { bounceScrollTo }  from '../utils/bounceScroll';

// const handleScroll = (id :string) => {
//   const target = document.getElementById(id);
//   if (target) {
//     bounceScrollTo(target.offsetTop);
//   }
// };


export default function VideoPlayer() {
  const [ended, setEnded] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  

  const handleReplay = () => {
    if (videoRef.current) {
      setBlurred(false);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setEnded(false);
    }
  };

  const handleEndVideo = () => {
    if (videoRef.current) {
      setBlurred(true);
      videoRef.current.pause();
      setEnded(true);
    }
  }

  return (
    <div className="relative min-w-56 w-full min-h-screen overflow-hidden">
    
    
    <video
    ref={videoRef}
    src="/guitar_clip_full.mp4"
    autoPlay
    muted
    playsInline
    className={`w-full min-h-screen object-cover transition-all duration-500 ${blurred ? 'blur-md' : ''}`}
    onEnded={() => {setEnded(true)}}
    onClick={handleEndVideo}
  /> 

     
        <div className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 transition-opacity duration-1000 ease-linear ${ ended ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        { ended &&
            <>
                <NavBar/>
                <h2 className='self-center text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl mx-15 mb-5'>Jordan Cobos</h2>
                <h3 className='self-center text-white text-3xl sm:text-3xl md:text-4xl lg:hidden'>Portfolio</h3>
                <img src='/replay.png' alt="replay button" onClick={handleReplay} width={100} height={100} className="absolute bottom-5 right-5 w-10 sm:w-10 md:w-20 lg:w-30"/>
                <nav className="mt-10 self-center">
                    <ul className='hidden h-full gap-12 lg:flex'>
                            {NAV_BAR_LINKS.map((link) => (
                                <a href={link.href} key={link.key} className='text-3xl text-white flexCenter 
                                cursor-pointer pb-1.5 transition-all duration-300 ease-in hover:font-bold'>
                                    {link.label}
                                </a>
                            ))}
                    </ul>
                </nav>
            </>
            
        }
    </div>
    
    
    </div>

  );
}
