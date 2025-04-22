'use client';

import React from 'react'
import dynamic from 'next/dynamic';

const PdfToImage = dynamic(() => import('@/components/PDFtoIMG'), { ssr: false });

function Resume() {
  return (
    <div className="flex flex-col items-center w-full h-fit pt-10 bg-gray-90 text-white">
        {/* <h1 className="text-pretty text-start font-bold text-9xl ml-36">Jordan Cobos</h1> */}
    
        
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
