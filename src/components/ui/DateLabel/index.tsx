import { dateFormat } from '@/libs/dateFormat';
import { cn } from '@/libs/utils';

type Props = {
  date: string;
  format?: string;
  className?: string;
};

export const DateLabel: React.FC<Props> = ({
  date,
  format = 'yyyy/MM/dd HH:mm:ss',
  className,
}) => (
  <time className={cn(className)} dateTime={new Date(date).toISOString()}>
    {dateFormat(date, format)}
  </time>
);
