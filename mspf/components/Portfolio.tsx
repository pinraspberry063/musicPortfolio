'use client';
import React, {useState} from 'react'
import { PORTFOLIO_PLAYLIST } from '@/constants';
import Image from 'next/image';
import Player from './Player';
import Disk from './Disk';

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
    <div className="flex flex-col bg-gray-50 w-full items-center justify-items-center">
            <h1 className=" text-white font-bold text-7xl self-center my-10 mx-28">Projects</h1>
            
            <h2 className="text-gray-20 text-4xl text-center m-10">The following tracks were fully engineered and produced by myself as part of my Music Industry Studies: </h2>
            <h2 className="text-gray-20 text-4xl text-center mb-32 m-10">Senior Capstone Project at Lousisiana Tech University.</h2>
          
            { PORTFOLIO_PLAYLIST.map((song, index) => {
                const isVisible = visibleItems[index];
                const transitionClasses = "transition-transform duration-700 ease-in-out";

                return(
                        <div key={song.key} className="flex flex-row w-full h-lvh">
                                {index % 2 === 0 ? (
                                <>
                                    <div className='flex flex-col bg-gray-90 w-4/5 h-2/5 text-white items-center justify-end'>
                                        <Player audio={song.audio} title={song.title} pos={"left"}/>
                                        {/* <h1 className="text-8xl m-10">{song.title}</h1> */}

                                    </div>
                                    {/* Content on the left */}
                                    {/* <div 
                                        className={`flex items-end justify-end rounded-md shadow-2xl p-10 w-3/5 h-full bg-gray-90 cursor-pointer transform ${transitionClasses} ${isVisible ? "-translate-x-3/4" : "translate-x-1/5"}`}>
                                        <Player audio={song.audio} title={song.title} pos={"left"}/>
                                        <Image onClick={() => toggleItem(index)}  src={song.photo} alt={`${song.title} photo`} 
                                        className="h-full object-contain rounded-md shadow-sm" style={{width: '20%', height: 'auto'}} width={200} height={300}/>
                                    
                                    </div> */}
                                    {/* <div className="flex items-center justify-center w-1/2">
                                        <h1 className="text-white text-8xl">{song.title}</h1>
                                    </div>  */}
                                    {/* empty right side */}
                                </>
                                ) : (
                                <>
                                    <div className='flex flex-col bg-gray-90 w-4/5 h-2/5 text-white items-center justify-end ml-auto'>
                                        <Player audio={song.audio} title={song.title} pos={"right"}/>
                                        {/* <h1 className="text-8xl m-10">{song.title}</h1> */}

                                    </div>
                                    {/* <div className="flex items-center justify-center w-1/2">
                                        <h1 className="text-white text-8xl">{song.title}</h1>
                                    </div>  */}
                                    {/* empty left side */}
                                    {/* <div  
                                        className={`flex items-end p-10 w-3/5 h-full rounded-md shadow-2xl bg-gray-90 cursor-pointer transform ${transitionClasses} ${isVisible ? "-translate-x-1/5" : "translate-x-3/4"}`}>
                                        <Image onClick={() => toggleItem(index)} src={song.photo} alt={`${song.title} photo`} className="h-full object-contain rounded-md" style={{width: '20%', height: 'auto'}} width={200} height={300}/>
                                        <Player audio={song.audio} title={song.title} pos={"right"}/>
                                    </div> */}
                                </>
                                )}
                        </div>
    
                )
                
            })}


            
      
    </div>
  )
}

export default Portfolio
