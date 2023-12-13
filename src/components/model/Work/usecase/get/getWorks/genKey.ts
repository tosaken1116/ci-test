import type { GetWorksQuery } from '../../../repository/get';

export const genGetWorksKeys = (query: GetWorksQuery): string[] => [
  '/works',
  JSON.stringify(query),
];
