import './globals.css';
import ChapterNavigation from '@/components/ChapterNavigation';
import {ReactNode} from 'react';
import Modal from '@/components/Modal'

import {getSortedPostsData} from '@/lib/posts';
import Collab from '@/components/Collab';

export const metadata = {
    title: 'CS for starters | org45',
    description: 'Computer Science for starter. Replacement for entry-level CS book.',
};

export default async function RootLayout({children}: {children: ReactNode}) {
    const chapters = getSortedPostsData();

    return (
        <html lang="en">
            <body>
                <div className="flex flex-col md:flex-row min-h-screen h-screen">
                    <nav className="w-full md:w-1/4 bg-gray-100 p-4 md:p-6 md:min-h-screen">
                        <h2 className="text-lg md:text-xl font-bold mb-4">Chapters</h2>
                        <ChapterNavigation chapters={chapters} />
                    </nav>

                    <main className="flex-1 p-4 md:p-6 bg-white relative overflow-auto">
                        <Collab />
												<Modal/>

                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
