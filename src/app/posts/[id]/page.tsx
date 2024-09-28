import { getPostData } from '../../../lib/posts';

interface PostProps {
  params: {
    id: string;
  };
}

export default async function PostPage({ params }: PostProps) {
  const postData = await getPostData(params.id);

  return (
    <article className="prose max-w-none">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
