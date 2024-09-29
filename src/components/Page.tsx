"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Slideshow from '@/components/SlideShow';

interface ClientComponentProps {
  postDataSlide: {
    title: string;
    chunks: string[];
  };
  chapterImages: string[];
}

export default function Page({ postDataSlide, chapterImages }: ClientComponentProps) {
  const [visibleImageIndex, setVisibleImageIndex] = useState(0);

  console.log(postDataSlide,"pss")
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.body.scrollHeight;
      const scrollPercentage = scrollPosition / documentHeight;

      const newIndex = Math.floor(scrollPercentage * (chapterImages.length / 0.1));
      if (newIndex !== visibleImageIndex && newIndex < chapterImages.length) {
        setVisibleImageIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visibleImageIndex, chapterImages]);

  return (
    <div className="flex">
      {/* Render the slideshow */}
      <Slideshow chunks={postDataSlide.chunks} />

      {/* Render a single image in the middle of the page */}
      <aside className="w-auto p-4 fixed top-1/4 right-20">
        {chapterImages?.length > 0 && (
          <div className="flex justify-center items-center">
            <Image
              key={visibleImageIndex}
              src={chapterImages[visibleImageIndex]} // Relative path to the image
              alt={`Chapter image ${visibleImageIndex}`}
              width={500} // Adjust the size
              height={400} // Adjust the size
              className="rounded-lg"
              priority // Prioritize loading this image
            />
          </div>
        )}
      </aside>
    </div>
  );
}
