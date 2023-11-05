---
to: "<%= `src/components/ui/${name}/index.tsx` %>"
---
import type { FC } from 'react';

type Props = {};

export const <%= name %>:FC<Props> = ({}) => {
  return <>this is ui of <%= name %> </>;
};
