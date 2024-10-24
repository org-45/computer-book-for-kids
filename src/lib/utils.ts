import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import {unified} from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function convertMarkdownToHtml(markdown: string) {
    const result = await unified().use(remarkParse).use(remarkHtml).process(markdown);

    return result.toString();
}