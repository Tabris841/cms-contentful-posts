import { TimeHTMLAttributes } from 'react';
import { formatDate } from '@/lib/utils';

type Props = TimeHTMLAttributes<HTMLTimeElement> & {
  dateString: string;
  options?: Intl.DateTimeFormatOptions;
};

export const DateComponent = ({ dateString, options, ...rest }: Props) => {
  return (
    <time dateTime={dateString} {...rest}>
      {formatDate(dateString, options)}
    </time>
  );
};
