import './globals.css';
import { getSortedPostsData, getPostData } from '@/lib/posts';
import ChapterNavigation from '@/components/ChapterNavigation';
import { AiFillGithub } from 'react-icons/ai'; // GitHub icon
import { ReactNode } from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

// Markdown reader helper function to convert markdown to HTML
async function convertMarkdownToHtml(markdown: string) {
  const result = await unified()
    .use(remarkParse) // Parses the markdown content
    .use(remarkHtml)  // Converts markdown to HTML
    .process(markdown);

  return result.toString(); // Convert the result to a string (HTML)
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
  // Fetch chapter data on the server
  const chapters = getSortedPostsData();

  // Fetch markdown content for the current post
  const currentPostData = await getPostData('chapter-1'); // Replace 'chapter-1' with dynamic ID if needed
  const contentHtml = await convertMarkdownToHtml(currentPostData.contentHtml);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen relative">
          {/* Left Navigation */}
          <nav className="w-1/4 bg-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4">Chapters</h2>
            {/* Use the Client-Side ChapterNavigation Component */}
            <ChapterNavigation chapters={chapters} />
          </nav>

          {/* Main Content */}
          <main className="w-3/4 p-6 bg-white relative">
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
