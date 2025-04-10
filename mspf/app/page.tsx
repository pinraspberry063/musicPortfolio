import Image from "next/image";
import Banner from "@/components/Banner";
import Player from "@/components/Player";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-30">
        <VideoPlayer/>
        <div className="flex-auto space-y-40 bg-gray-50">

          <Player/> 
        </div>
        
        {/* <Image src='/' alt='concert-red' width={300} height={50} className='border-2 border-black'/> */}
        
    </div>
  )
}
