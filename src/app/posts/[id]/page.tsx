import {getSortedPostsData, getPostData} from '../../../lib/posts';
import {PostData} from '../../../lib/posts';

interface PostProps {
    params: {
        id: string;
    };
}

export async function generateStaticParams() {
    const posts = getSortedPostsData();
    return posts.map(post => ({
        id: post.id,
    }));
}

export default async function PostPage({params}: PostProps) {
    const postData: PostData = await getPostData(params.id);

    return (
        <article className="prose max-w-none mt-7 md:mt-7">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{postData.title}</h1>
            <small className="text-gray-500">{postData.date}</small>
            <div className="prose" dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        </article>
    );
}
