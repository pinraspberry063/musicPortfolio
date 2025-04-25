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
    <div className="relative w-full h-auto">
    
    
    <video
      ref={videoRef}
      src="/guitar_clip_full.mp4"
      autoPlay
      muted
      className={`w-full h-screen object-cover transition-all duration-500 ${blurred ? 'blur-md' : ''}`}
      onEnded={() => {setEnded(true)}}
      onClick={handleEndVideo}
    /> 
     
        <div className={`absolute inset-0 flex flex-col bg-black bg-opacity-40 transition-opacity duration-1000 ease-linear ${ ended ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        { ended &&
            <>
                <NavBar/>
                <h2 className='absolute self-center top-96 text-white text-9xl'>Jordan Cobos</h2>
                <Image src='replay.png' alt="replay button" onClick={handleReplay} width={100} height={100} style={{width: '2%', height: 'auto'}} className="absolute bottom-5 right-5"/>
                <nav className="absolute top-1/2 self-center">
                    <ul className='hidden h-full gap-12 lg:flex'>
                            {NAV_BAR_LINKS.map((link) => (
                                <a href={link.href} key={link.key} className='text-4xl text-white flexCenter 
                                cursor-pointer pb-1.5 transition-all duration-300 ease-in hover:font-bold py-10'>
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
