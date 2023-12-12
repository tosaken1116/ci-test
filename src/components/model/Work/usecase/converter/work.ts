import type { Work, Works } from '../../types';
import type { Work as modelWork, ResWorks } from '@/api/@types';

export const convertWork = (work: modelWork): Work => ({
  id: work.id,
  title: work.title,
  description: work.description,
  descriptionHtml: work.description_html,
  user: work.user,
  assets: work.assets,
  urls: work.urls,
  visibility: work.visibility,
  tags: work.tags,
  thumbnail: work.thumbnail,
  favoriteCount: work.favorite_count,
  isFavorite: work.is_favorite,
  createdAt: work.created_at,
  updatedAt: work.updated_at,
});

export const convertWorks = (works: ResWorks): Works => ({
  works: works.works.map((work) => convertWork(work)),
  totalCount: works.works_total_count,
});
