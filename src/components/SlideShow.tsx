"use client";

import { useState } from 'react';

interface SlideshowProps {
  chunks: string[]; 
}

export default function Slideshow({ chunks }: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    if (currentIndex < chunks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-4 text-right">
        <button
          onClick={goToPrevSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          disabled={currentIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={goToNextSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded"
          disabled={currentIndex === chunks.length - 1}
        >
          Next
        </button>
      </div>

      {/* Render the current chunk */}
      <div
        className="slide-content prose"
        dangerouslySetInnerHTML={{ __html: chunks[currentIndex] }}
      />

      <div className="mt-4 text-center">
        <p>
          Slide {currentIndex + 1} of {chunks.length}
        </p>
      </div>
    </div>
  );
}
