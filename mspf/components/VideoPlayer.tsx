'use client';

import { useState, useRef } from "react";
import { NAV_BAR_LINKS } from "@/constants";
import Link from "next/link";
import NavBar from "./NavBar";
import Image from 'next/image';


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
                <Image src='/replay.png' alt="replay button" onClick={handleReplay} width={100} height={100} style={{width: '2%', height: 'auto'}} className="absolute bottom-5 right-5"/>
                <nav className="absolute top-1/2 self-center">
                    <ul className='hidden h-full gap-12 lg:flex'>
                            {NAV_BAR_LINKS.map((link) => (
                                <Link href={link.href} key={link.key} scroll={true} className='text-4xl text-white flexCenter 
                                cursor-pointer pb-1.5 transition-all hover:font-bold py-10'>
                                    {link.label}
                                </Link>
                            ))}
                    </ul>
                </nav>
            </>
            
        }
    </div>
    
    
    </div>

  );
}
