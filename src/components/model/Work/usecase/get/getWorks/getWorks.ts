import { convertWorks } from '../../converter/work';

import { genGetWorksKeys } from './genKey';

import type { IWorkRepository } from '../../../repository';
import type { Works } from '../../../types';

import { useSuspenseQuery } from '@/libs/fetch';

export const useGetWorksUsecase = (repository: IWorkRepository): Works => {
  const query = {};

  const { data } = useSuspenseQuery({
    queryKey: genGetWorksKeys(query),
    queryFn: () => repository.getWorks(query),
  });
  return convertWorks(data);
};
