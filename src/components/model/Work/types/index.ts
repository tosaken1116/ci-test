import type { Asset, UrlInfo, GetTag, User } from '@/api/@types';
// NOTE:User Asset UrlInfo GetTagはそのうち別の場所からimportするようにする

export type Work = {
  id: string;
  title: string;
  description: string;
  descriptionHtml: string;
  user: User;
  assets: Asset[];
  urls: UrlInfo[];
  visibility: string;
  tags: GetTag[];
  thumbnail: Asset;
  favoriteCount?: number | undefined;
  isFavorite?: boolean | undefined;
  createdAt: string;
  updatedAt: string;
};

export type Works = { works: Work[]; totalCount: number };
