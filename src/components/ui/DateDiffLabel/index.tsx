import type {FC} from 'react';

import { DateToDiffLabel } from './logic';

import { cn } from '@/libs/utils';

type Prop = {
  date: Date;
  now?: Date;
  className?: string;
};

export const DateDiffLabel: FC<Prop> = ({ 
  date, 
  now = new Date(), 
  className,
}) => (
    <time  className={cn(className)} dateTime={date.toISOString()}>
      {DateToDiffLabel(date, now)}
    </time>
  );