---
to: "<%= `src/app/${url}/page.tsx` %>"
---
import type { FC } from 'react';

import { Screen } from '@/components/page/<%= name %>'

const <%= name %>:FC = () => <Screen />;

export default <%= name %>;