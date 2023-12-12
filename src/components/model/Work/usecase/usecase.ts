import { useMemo } from 'react';

import { useWorkRepository } from '../repository';

import { useGetWorksUsecase } from './get';

import type { IWorkRepository } from '../repository';
import type { Works } from '../types';

export const useWorkUsecase = (): IWorkUsecase => {
  const workRepository = useWorkRepository();
  return useMemo(
    () => createNewWorkUsecase({ workRepository }),
    [workRepository]
  );
};

export type ICreateNewWorkUsecase = {
  workRepository: IWorkRepository;
};

export type IWorkUsecase = {
  useGetWorksUsecase: () => Works;
};

export const createNewWorkUsecase = ({
  workRepository,
}: ICreateNewWorkUsecase): IWorkUsecase => ({
  useGetWorksUsecase(): Works {
    return useGetWorksUsecase(workRepository);
  },
});
