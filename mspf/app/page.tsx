import Image from "next/image";
import Banner from "@/components/Banner";
import Player from "@/components/Player";
import VideoPlayer from "@/components/VideoPlayer";
import Portfolio from "@/components/Portfolio";
import Bio from "@/components/Bio";

export default function Home() {
  return (
    <div className="flex flex-col bg-gray-30">
        <VideoPlayer/>
        <section id="bio">
          <Bio/>
        </section>
        <div className="h-96 bg-gradient-to-b from-gray-70 to-gray-50" />
        <section id="portfolio">
          <Portfolio/>
        </section>
        
        
        {/* <Image src='/' alt='concert-red' width={300} height={50} className='border-2 border-black'/> */}
        
    </div>
  )
}
