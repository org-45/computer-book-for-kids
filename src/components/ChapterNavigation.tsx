"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface Chapter {
  id: string;
  title: string;
}

interface ChapterNavigationProps {
  chapters: Chapter[];
}

export default function ChapterNavigation({ chapters }: ChapterNavigationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 15;

  const totalPages = Math.ceil(chapters.length / chaptersPerPage);

  const currentChapters = chapters.slice(
    (currentPage - 1) * chaptersPerPage,
    currentPage * chaptersPerPage
  );

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

  return (
    <Card className="w-full">
      <CardHeader>
      </CardHeader>
      <CardContent>
        {/* Scrollable List */}
        <ul className="overflow-y-auto h-auto space-y-2">
          {currentChapters.map((chapter) => (
            <li key={chapter.id}>
              <Link href={`/posts/${chapter.id}`} passHref className="text-lg text-blue-900 hover:text-blue-400 transition-colors duration-200">
            
                  {chapter.title}
                
              </Link>
            </li>
          ))}
        </ul>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-6">
          <Button
            variant="secondary"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="secondary"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
