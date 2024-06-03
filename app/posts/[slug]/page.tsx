import { client } from '@/lib/client';
import { postByIdQuery, postsQuery } from '@/lib/graphql/queries';

export default async function Post({
  params
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const data = await client.request(
  //   postByIdQuery({
  //     arguments: {}
  //   })
  // );

  return <div>Post</div>;
}
