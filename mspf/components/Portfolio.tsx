'use client';
import React, {useState} from 'react'
import { PORTFOLIO_PLAYLIST } from '@/constants';
import Image from 'next/image';
import Player from './Player';

// <Image src={song.photo} alt={`${song.title} photo`} style={{width:'25%', height: 'auto'}} width={200} height={300} className="h-1/4 m-5" key={song.key}/>

function Portfolio() {
    const [visibleItems, setVisibleItems] = useState<boolean[]>(PORTFOLIO_PLAYLIST.map(() => false));


    const toggleItem = (index: number) => {
        setVisibleItems(prev => {
        const updated = [...prev];
        updated[index] = !updated[index];
        return updated;
        });
    };

  return (
    <div className="flex flex-col bg-gray-50 w-full">
            
            { PORTFOLIO_PLAYLIST.map((song, index) => {
                const isVisible = visibleItems[index];
                const transitionClasses = "transition-transform duration-700 ease-in-out";

                return(
                    <div key={song.key} className="flex flex-row w-full my-20">
                        {index % 2 === 0 ? (
                        <>
                            {/* Content on the left */}
                            <div 
                                className={`flex items-end justify-end rounded-md shadow-2xl p-10 w-3/5 h-full bg-gray-90 cursor-pointer transform ${transitionClasses} ${isVisible ? "-translate-x-3/4" : "translate-x-1/5"}`}>
                                <Player audio={song.audio} title={song.title} pos={"left"}/>
                                <Image onClick={() => toggleItem(index)}  src={song.photo} alt={`${song.title} photo`} 
                                className="h-full object-contain rounded-md shadow-sm" style={{width: '20%', height: 'auto'}} width={200} height={300}/>
                            </div>
                            <div className="flex items-center justify-center w-1/2">
                                <h1 className="text-white text-8xl">{song.title}</h1>
                            </div> {/* empty right side */}
                        </>
                        ) : (
                        <>
                            <div className="flex items-center justify-center w-1/2">
                                <h1 className="text-white text-8xl">{song.title}</h1>
                            </div> {/* empty left side */}
                            <div  
                                className={`flex items-end p-10 w-3/5 h-full rounded-md shadow-2xl bg-gray-90 cursor-pointer transform ${transitionClasses} ${isVisible ? "-translate-x-1/5" : "translate-x-3/4"}`}>
                                <Image onClick={() => toggleItem(index)} src={song.photo} alt={`${song.title} photo`} className="h-full object-contain rounded-md" style={{width: '20%', height: 'auto'}} width={200} height={300}/>
                                <Player audio={song.audio} title={song.title} pos={"right"}/>
                            </div>
                        </>
                        )}
                    </div>
                )
            })}


            
      
    </div>
  )
}

export default Portfolio
