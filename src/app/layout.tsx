import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'My Book Blog',
  description: 'A book-like blog with chapters',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const chapters = [
    { id: 'chapter-1', title: 'Chapter 1' },
    { id: 'chapter-2', title: 'Chapter 2' },
  ];

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Left Navigation */}
          <nav className="w-1/4 bg-gray-100 p-6">
            <h2 className="text-xl font-bold mb-4">Chapters</h2>
            <ul>
              {chapters.map((chapter) => (
                <li key={chapter.id} className="mb-2">
                  <Link href={`/posts/${chapter.id}`} passHref className="text-blue-600 hover:underline">
                    {chapter.title}
                  </Link>
                </li>
              ))}
            </ul>
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
