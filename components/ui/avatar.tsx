import { ContentfulImage } from '@/components/ui/contentful-image';

type Props = {
  name: string;
  picture: {
    url?: string | null;
  };
};

export const Avatar = ({ name, picture }: Props) => {
  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10 mr-4'>
        <ContentfulImage
          src={picture.url ?? ''}
          fill
          className='rounded-full m-0'
          alt={name}
        />
      </div>
      <div className='font-semibold'>{name}</div>
    </div>
  );
};
