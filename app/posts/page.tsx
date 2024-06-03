import { client } from '@/lib/client';
import { postsQuery } from '@/lib/graphql/queries';
import { PostCard } from '@/components/posts/post-card';

export default async function Posts() {
  // const gqlClient = preview ? previewClient : client

  const data = await client.request(postsQuery);
  const posts = data.postCollection?.items ?? [];

  return (
    <section className='section'>
      <div className='container'>
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10'>
          {posts.map(
            post => post && <PostCard key={post.sys.id} post={post} />
          )}
        </ul>
      </div>
    </section>
  );
}
