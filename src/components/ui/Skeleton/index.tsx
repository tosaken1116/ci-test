import type { ReactNode } from 'react';

import { cn } from '@/libs/utils';

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): ReactNode => (
  <div
    className={cn(
      'overflow-hidden relative rounded-md bg-muted bg-slate-300 before:absolute before:h-full before:w-full before:bg-gradient-to-r before:contents-[""] before:from-slate-300 before:via-slate-100 before:to-slate-300 before:animate-skeleton-pulse',
      className
    )}
    {...props}
  />
);

export { Skeleton };
