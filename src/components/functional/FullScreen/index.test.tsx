import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import { useFullScreen } from './hook';

import { FullScreen } from '.';

jest.mock('./hook', () => ({
  useFullScreen: jest.fn(),
}));

describe('functional/FullScreen', () => {
  const handle = {
    active: false,
    enter: jest.fn(),
    exit: jest.fn(),
  };
  const handleClick = jest.fn();

  beforeEach(() => {
    (useFullScreen as jest.Mock).mockImplementation(() => ({
      handle,
      handleClick,
    }));
  });

  test('renders children and a Maximize button when not active', () => {
    render(
      <FullScreen>
        <div>Test Content</div>
      </FullScreen>
    );

    expect(screen.getByText('Test Content')).toBeInTheDocument();

    expect(screen.getByRole('button')).toHaveClass(
      'absolute right-0 bottom-0 z-50'
    );
  });

  test('calls handleClick when the Maximize button is clicked', () => {
    render(
      <FullScreen>
        <div>Test Content</div>
      </FullScreen>
    );

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders a Minimize button when active', () => {
    handle.active = true;
    render(
      <FullScreen>
        <div>Test Content</div>
      </FullScreen>
    );

    expect(screen.getByRole('button')).toHaveClass(
      'absolute right-0 bottom-0 p-2 z-50'
    );
  });
});
