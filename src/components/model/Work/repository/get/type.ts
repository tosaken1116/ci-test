import type { Visibility } from '@/api/@types';

export type GetWorksQuery = {
  page?: number | undefined;
  limit?: number | undefined;
  visibility?: Visibility | undefined;
  tag_names?: string | undefined;
  tag_ids?: string | undefined;
  search_word?: string | undefined;
};
