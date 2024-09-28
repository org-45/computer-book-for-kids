import './globals.css';
import { getSortedPostsData } from '@/lib/posts';
import ChapterNavigation from '@/components/ChapterNavigation';

export const metadata = {
  title: 'CS for starters | org45',
  description: 'Computer Science for starter. Replacement for entry-level CS book.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch chapter data on the server
  const chapters = getSortedPostsData();

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Left Navigation */}
          <nav className="w-1/4 bg-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4">Chapters</h2>

            {/* Use the Client-Side ChapterNavigation Component */}
            <ChapterNavigation chapters={chapters} />
          </nav>

          {/* Main Content */}
          <main className="w-3/4 p-6 bg-white">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
