import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Avatar, AvatarFallback } from '.';

describe('ui/Avatarのテスト', () => {
  it('renders Avatar correctly', () => {
    const { container } = render(<Avatar />);
    expect(container.firstChild).toHaveClass(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'
    );
  });

  it('renders Avatar with AvatarFallback correctly', () => {
    const fallbackText = 'FB';
    render(
      <Avatar>
        <AvatarFallback>{fallbackText}</AvatarFallback>
      </Avatar>
    );

    const fallback = screen.getByText(fallbackText);
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveClass(
      'flex h-full w-full items-center justify-center rounded-full bg-muted'
    );

    expect(fallback.parentElement).toHaveClass(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full'
    );
  });
});
