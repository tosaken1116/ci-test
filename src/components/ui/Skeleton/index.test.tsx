import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Skeleton } from '.';

describe('model/Skeletonのテスト', () => {
  it('element rendered', () => {
    const {
      container: { firstChild },
    } = render(<Skeleton />);
    expect(firstChild).toBeDefined();
  });
});
