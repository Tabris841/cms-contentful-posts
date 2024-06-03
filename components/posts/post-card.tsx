import Link from 'next/link';
import { ContentfulImage } from '@/components/ui/contentful-image';
import { DateComponent } from '@/components/ui/data-component';
import { Avatar } from '@/components/ui/avatar';
import { Post } from '@/lib/__generated__/graphql';

type Props = {
  post: Post;
};

export const PostCard = ({ post }: Props) => {
  const { title, slug, exceprt, coverImage, author, date } = post;

  return (
    <li className='rounded-md overflow-hidden shadow-md'>
      <Link href={`/posts/${slug}`} aria-label={title ?? ''}>
        <div className='mb-2'>
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={coverImage?.url ?? ''}
            width={coverImage?.width ?? 400}
            height={coverImage?.height ?? 200}
          />
        </div>
        <div className='p-4'>
          <h3 className='text-xl mb-1 leading-snug'>{title}</h3>
          <div className='text-sm mb-4 text-gray-400'>
            <DateComponent dateString={date} />
          </div>
          <p className='text-base mb-4'>{exceprt}</p>
          <Avatar name={author?.name ?? ''} picture={author?.picture ?? {}} />
        </div>
      </Link>
    </li>
  );
};
