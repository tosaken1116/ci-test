import { useMemo } from 'react';

import { getWorks } from './get';

import type { GetWorksQuery } from './get';
import type { ResWorks } from '@/api/@types';
import type { ApiClient } from '@/hooks/useApiClient';

import { useApiClient } from '@/hooks/useApiClient';

export type IWorkRepository = {
  getWorks: (query: GetWorksQuery) => Promise<ResWorks>;
};

export const useWorkRepository = (): IWorkRepository => {
  const { client } = useApiClient();
  return useMemo(() => createNewWorkRepository(client), [client]);
};

export const createNewWorkRepository = (
  apiClient: ApiClient
): IWorkRepository => ({
  async getWorks(query): Promise<ResWorks> {
    return getWorks(apiClient, query);
  },
});
