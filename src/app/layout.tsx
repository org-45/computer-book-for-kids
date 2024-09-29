import './globals.css';
import { getSortedPostsData, getPostData } from '@/lib/posts';
import ChapterNavigation from '@/components/ChapterNavigation';
import { AiFillGithub } from 'react-icons/ai'; 
import { ReactNode } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

async function convertMarkdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) 
    .use(remarkHtml) 
    .process(markdown);

  return result.toString(); 
}

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
            <div className="absolute top-4 right-4 flex flex-col items-end space-y-2">
              <span className="text-lg text-gray-700 font-semibold text-right">
                Interested in writing chapters? <br />
                <span className="text-blue-600">Contribute here!!</span>
              </span>

              <a
                href="https://github.com/org-45/computer-book-for-kids"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 shadow-md m-1"
              >
                <AiFillGithub className="text-3xl" />
                <span className="text-lg">org45</span>
              </a>
            </div>

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
