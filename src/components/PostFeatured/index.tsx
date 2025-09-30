import { findAllPublicPostsFromApiCached } from '@/lib/post/queries/public';
import ErrorMessage from '../ErrorMessage';
import { PostSummary } from '../PostSummary';
import { PostCoverImage } from '@/PostCoverImage';

export async function PostFeatured() {
  const postsRes = await findAllPublicPostsFromApiCached();
  const noPostsFound = (
    <ErrorMessage
      contentTitle='Ops 😅'
      content='Ainda não criamos nenhum post.'
    />
  );

  if (!postsRes.success) {
    return noPostsFound;
  }

  const posts = postsRes.data;

  if (posts.length <= 0) {
    return noPostsFound;
  }

  const post = posts[0];
  const postLink = `/post/${post.slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: post.coverImageUrl,
          alt: post.title,
          priority: true,
        }}
      />

      <PostSummary
        postLink={postLink}
        postHeading='h1'
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  );
}
