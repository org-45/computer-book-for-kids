import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'public/posts');
const imagesDirectory = path.join(process.cwd(), 'public/images');

export interface PostData {
  id: string;
  title: string;
  date: string;
  contentHtml: string;
}

export async function getPostDataSlide(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  // Use remark to convert markdown content to HTML
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Split the content by <br/> tags (this will separate chunks)
  const chunks = contentHtml.split(/<br\s*\/?>/).filter(chunk => chunk.trim() !== '');

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    chunks, // Array of content chunks
  };
}

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, ''); 

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      contentHtml: '',
    };
  });
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    title: matterResult.data.title,
    date: matterResult.data.date,
    contentHtml,
  };
}

// Function to get images for a specific chapter
export function getChapterImages(chapterId: string): string[] {
  const chapterImagesDir = path.join(imagesDirectory, chapterId);

  try {
    const imageFiles = fs.readdirSync(chapterImagesDir);
    
    // Only return files that are images (e.g., jpg, png, webp)
    const validImageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
    const images = imageFiles
      .filter(file => validImageExtensions.includes(path.extname(file).toLowerCase()))
      .map(file => `/images/${chapterId}/${file}`); // Relative path for public folder

    return images;
  } catch (error) {
    console.error(`Error reading images for chapter: ${chapterId}`, error);
    return [];
  }
}
