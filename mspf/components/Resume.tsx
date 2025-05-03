'use client';

import React from 'react'
import dynamic from 'next/dynamic';

const PdfToImage = dynamic(() => import('@/components/PDFtoIMG'), { ssr: false });

function Resume() {
  return (
    <div className="flex flex-col items-center w-full h-fit pt-10 px-10 bg-gray-90 text-white">
        {/* <h1 className="text-pretty text-start font-bold text-9xl ml-36">Jordan Cobos</h1> */}
        <a href="/Resume.pdf" className="text-white bg-gray-90 self-end ml-auto lg:mr-60 xl:mr-64" download><img src="/download.png" alt="Download Resume" className="w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14"/> </a>
        
        {/* <object 
            type="application/pdf"
            data="/Resume.pdf?#page=1&height=fix&toolbar=0&scrollbar=0"
            width="65%"
            height="100%"
        /> */}
        <PdfToImage pdfUrl='/Resume.pdf'/>
        

      
    </div>
  )
}

export default Resume
