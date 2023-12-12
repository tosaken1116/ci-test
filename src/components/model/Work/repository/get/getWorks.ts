import type { GetWorksQuery } from './type';
import type { ResWorks } from '@/api/@types';
import type { ApiClient } from '@/hooks/useApiClient';

export const getWorks = async (
  apiClient: ApiClient,
  query: GetWorksQuery
): Promise<ResWorks> => await apiClient.api.v1.works.$get({ query });
