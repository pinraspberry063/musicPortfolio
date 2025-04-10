'use client';

import { useState, useRef } from "react";
import { NAV_BAR_LINKS } from "@/constants";
import Link from "next/link";
import NavBar from "./NavBar";


export default function VideoPlayer() {
  const [ended, setEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setEnded(false);
    }
  };

  return (
    <div className="relative w-full h-auto">
    
    
    <video
      ref={videoRef}
      src="/guitar_clip_full.mp4"
      autoPlay
      muted
      className="w-full h-screen object-cover"
      onEnded={() => {setEnded(true)}}
    /> 
     
        <div className={`absolute inset-0 flex flex-col bg-black bg-opacity-40 transition-opacity duration-1000 ease-linear ${ ended ? 'opacity-80 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        { ended &&
            <>
                <NavBar/>
                <h4 onClick={handleReplay} className="text-white text-sm font-bold absolute bottom-5 right-5 hover:font-extrabold">Replay</h4>
                <h2 className="text-white text-9xl absolute font-bold bottom-20 left-20 ">Jordan Cobos</h2>
                {/* <nav className="absolute top-1/2 right-1/2">
                    <ul className='hidden h-full gap-12 lg:flex'>
                            {NAV_BAR_LINKS.map((link) => (
                                <Link href={link.href} key={link.key} className='text-4xl text-white flexCenter 
                                cursor-pointer pb-1.5 transition-all hover:font-bold py-10'>
                                    {link.label}
                                </Link>
                            ))}
                    </ul>
                </nav> */}
            </>
            
        }
    </div>
    
    
    </div>

  );
}
