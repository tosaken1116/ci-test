import { useFullScreenHandle } from 'react-full-screen';

import type { FullScreenHandle } from 'react-full-screen';

type IUseFullScreen = {
  handle: FullScreenHandle;
  handleClick: () => void;
};
export const useFullScreen = (): IUseFullScreen => {
  const handle = useFullScreenHandle();
  const handleClick = (): void => {
    if (handle.active) {
      handle.exit().catch((e) => console.log(e));
    } else {
      handle.enter().catch((e) => console.log(e));
    }
  };
  return { handle, handleClick };
};
