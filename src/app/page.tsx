import { getPostData } from '../lib/posts';

export default async function Home() {
  const postData = await getPostData('chapter-1');

  return (
    <article className="prose max-w-none my-10">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
