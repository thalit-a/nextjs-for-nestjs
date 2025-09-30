import { findAllPublicPostsFromApiCached } from '@/lib/post/queries/public';

import { PostSummary } from '../PostSummary';
import { PostCoverImage } from '@/PostCoverImage';

export async function PostsList() {
  const postsRes = await findAllPublicPostsFromApiCached();

  if (!postsRes.success) {
    return null;
  }

  const posts = postsRes.data;

  if (posts.length <= 1) {
    return null;
  }

  return (
    <div className='grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
      {posts.slice(1).map(post => {
        const postLink = `/post/${post.slug}`;

        return (
          <div className='flex flex-col gap-4 group' key={post.id}>
            <PostCoverImage
              linkProps={{
                href: postLink,
              }}
              imageProps={{
                width: 1200,
                height: 720,
                src: post.coverImageUrl,
                alt: post.title,
              }}
            />

            <PostSummary
              postLink={postLink}
              postHeading='h2'
              createdAt={post.createdAt}
              excerpt={post.excerpt}
              title={post.title}
            />
          </div>
        );
      })}
    </div>
  );
}
