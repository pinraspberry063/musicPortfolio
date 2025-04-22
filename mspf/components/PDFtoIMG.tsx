'use client';

import { useEffect, useRef, useState } from 'react';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();


type Props = {
  pdfUrl: string;
};

export default function PdfToImage({ pdfUrl }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    

    const renderPdf = async () => {
      try {
        const loadingTask = pdfjs.getDocument(pdfUrl);
        const pdf = await loadingTask.promise;

        if (cancelled) return;

        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 3 });
        const canvas = canvasRef.current;

        if (!canvas || cancelled) return;

        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderTask = page.render({ canvasContext: context!, viewport });

        await renderTask.promise;

        // Invert colors directly on the canvas
        const imageData = context!.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const darkGray = { r: 39, g: 39, b: 39 };

        for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i];     // R
          data[i + 1] = 255 - data[i + 1]; // G
          data[i + 2] = 255 - data[i + 2]; // B
          // data[i + 3] is alpha (leave as-is)
        }

        for (let i = 0; i < data.length; i += 4) {
          if (data[i] < 40) {
            // Likely background — change to #272727
            data[i] = darkGray.r;
            data[i + 1] = darkGray.g;
            data[i + 2] = darkGray.b;
          }

        }

        context!.putImageData(imageData, 0, 0);

        if (!cancelled) {
          const dataUrl = canvas.toDataURL('image/png');
          setImageDataUrl(dataUrl);
        }
      } catch (err) {
        console.error('PDF render error:', err);
      }
    };

    renderPdf();

    return () => {
      // Set cancel flag to prevent multiple render calls
      cancelled = true;
    };
  }, [pdfUrl]);

  return (
    <div>
      <canvas 
        ref={canvasRef} 
        style={{ display: 'none' }} />
      {imageDataUrl ? (
        <img src={imageDataUrl} alt="PDF Snapshot" />
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
}