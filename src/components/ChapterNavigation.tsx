'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { IoMdMenu } from 'react-icons/io';

interface Chapter {
  id: string;
  title: string;
}

interface ChapterNavigationProps {
  chapters: Chapter[];
}

export default function ChapterNavigation({ chapters }: ChapterNavigationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const chaptersPerPage = 12;

  const totalPages = Math.ceil(chapters.length / chaptersPerPage);

  const currentChapters = chapters.slice((currentPage - 1) * chaptersPerPage, currentPage * chaptersPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <div className="md:hidden fixed top-4 right-4">
        <Button onClick={toggleModal} className="text-white bg-blue-600 px-4 py-2 rounded-full shadow-lg">
          <IoMdMenu />
        </Button>
      </div>

      <div className="hidden md:block w-full bg-gray-100 p-4">
        <CardContent className="flex-grow overflow-y-auto">
          <ul className="space-y-2">
            {currentChapters.map((chapter) => (
              <li key={chapter.id}>
                <Link
                  href={`/posts/${chapter.id}`}
                  passHref
                  className="text-base md:text-lg text-blue-900 hover:text-blue-400 transition-colors duration-200"
                >
                  {chapter.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
        {/* Pagination Controls */}
        <div className="p-4">
          <div className="flex justify-between">
            <Button
              variant="secondary"
              onClick={prevPage}
              disabled={currentPage === 1}
              className="text-sm"
            >
              Previous
            </Button>
            <Button
              variant="secondary"
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="text-sm"
            >
              Next
            </Button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white w-full max-w-md h-auto max-h-screen overflow-y-auto p-6 rounded-lg relative z-60"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Chapters</h2>
              <Button onClick={closeModal} className="text-sm">
                Close
              </Button>
            </div>

            <CardContent className="flex-grow overflow-y-auto">
              <ul className="space-y-2">
                {currentChapters.map((chapter) => (
                  <li key={chapter.id}>
                    <Link
                      href={`/posts/${chapter.id}`}
                      passHref
                      className="text-base text-blue-900 hover:text-blue-400 transition-colors duration-200"
                    >
                      {chapter.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>

            <div className="p-4">
              <div className="flex justify-between">
                <Button
                  variant="secondary"
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="text-sm"
                >
                  Previous
                </Button>
                <Button
                  variant="secondary"
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="text-sm"
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
