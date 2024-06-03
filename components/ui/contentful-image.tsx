'use client';

import Image, { ImageProps } from 'next/image';

const contentfulLoader = ({
  src,
  width,
  quality
}: {
  src: string;
  width: number;
  quality?: number;
}) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

type Props = ImageProps;

export const ContentfulImage = (props: Props) => {
  return <Image loader={contentfulLoader} {...props} />;
};
