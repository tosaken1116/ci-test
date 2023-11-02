---
to: "<%= `src/components/page/${name}/index.tsx` %>"
---
import type { FC } from 'react';

<% used_models.forEach(use_model=>{%>import { <%= use_model %> } from '@/components/model/<%= use_model %>';
<%})%>
export const Screen:FC = () => {
  return <>this is page of <%= name %> </>;
};
