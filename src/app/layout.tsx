import './globals.css';
import ChapterNavigation from '@/components/ChapterNavigation';
import { ReactNode } from 'react';

import {convertMarkdownToHtml} from '@/lib/utils'
import {getSortedPostsData, getPostData} from '@/lib/posts';
import Collab from '@/components/Collab';

export const metadata = {
  title: 'CS for starters | org45',
  description: 'Computer Science for starter. Replacement for entry-level CS book.',
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

  const chapters = getSortedPostsData();

  const currentPostData = await getPostData('chapter-1');
  const contentHtml = await convertMarkdownToHtml(currentPostData.contentHtml);

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col md:flex-row min-h-screen h-screen">
          {/* Left Navigation */}
          <nav className="w-full md:w-1/4 bg-gray-100 p-6 md:min-h-screen">
            <h2 className="text-xl font-bold mb-4">Chapters</h2>
            {/* Use the Client-Side ChapterNavigation Component */}
            <ChapterNavigation chapters={chapters} />
          </nav>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-white relative overflow-auto">
            {/* GitHub Link in the top-right corner */}
						<Collab/>

            {/* Display Markdown Content */}
            <article
              className="prose max-w-none mt-10"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
