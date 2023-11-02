import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Tag } from '.'; // Replace with the correct path to your Tag component

describe('ui/Tagのテスト', () => {
  // Test rendering with default variant
  it('renders the default variant of the tag correctly', () => {
    const {
      container: { firstChild },
    } = render(<Tag />);
    expect(firstChild).toHaveClass('bg-primary text-primary-foreground');
  });

  // Test rendering with 'secondary' variant
  it('renders the secondary variant of the tag correctly', () => {
    const {
      container: { firstChild },
    } = render(<Tag variant="secondary" />);
    expect(firstChild).toHaveClass('bg-secondary text-secondary-foreground');
  });

  // Test rendering with 'outline' variant
  it('renders the outline variant of the tag correctly', () => {
    const {
      container: { firstChild },
    } = render(<Tag variant="outline" />);
    expect(firstChild).toHaveClass('text-foreground');
  });

  // Test rendering as a Next.js Link
  it('renders the tag as a Next.js Link', () => {
    const {
      container: { firstChild },
    } = render(<Tag href="/test">test</Tag>);
    expect(firstChild).toBeInTheDocument();
    expect(firstChild).toHaveAttribute('href', '/test');
  });

  // Test that custom class names are applied properly
  it('applies custom class names correctly', () => {
    const customClassName = 'custom-class';
    const {
      container: { firstChild },
    } = render(<Tag className={customClassName} />);
    expect(firstChild).toHaveClass(customClassName);
  });

  // Test that children are rendered properly
  it('renders children correctly', () => {
    const text = 'Test Child';
    const screen = render(<Tag>{text}</Tag>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
