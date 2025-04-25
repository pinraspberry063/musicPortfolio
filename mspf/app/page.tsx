import Image from "next/image";
import Banner from "@/components/Banner";
import Player from "@/components/Player";
import VideoPlayer from "@/components/VideoPlayer";
import Portfolio from "@/components/Portfolio";
import Bio from "@/components/Bio";
import Resume from "@/components/Resume";
import Form from './../components/Form';
import Disk from "@/components/Disk";

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
        <div className="h-96 bg-gradient-to-b from-gray-50 to-gray-90" />
        <section id="resume" className="bg-gray-90">
          <div className="flex w-full items-end justify-end pr-80 pt-36 text-4xl">
            <a href="/Resume.pdf" className="text-white bg-gray-90" download><img src="/download.png" alt="Download Resume" width={50} height={50}/> </a>
          </div>
          <Resume/>
        </section>
        <div className="h-dvh bg-gradient-to-b from-gray-90 to-black" />
        <section id="contact">
          <div className="h-screen w-full bg-black">
            <Form/>
          </div>
        </section>
        
        
        {/* <Image src='/' alt='concert-red' width={300} height={50} className='border-2 border-black'/> */}
        
    </div>
  )
}
