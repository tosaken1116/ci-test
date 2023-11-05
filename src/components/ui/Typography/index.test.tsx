import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import { Typography } from '.';

describe('ui/Typography', () => {
  it('renders without crashing', () => {
    render(<Typography>Test</Typography>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies the correct class for variant', () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    expect(screen.getByText('Heading 1')).toHaveClass('text-4xl font-bold');
  });

  it('renders the correct HTML tag for each variant', () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    expect(screen.getByText('Heading 1').tagName).toBe('H1');
  });

  it('appends additional className if provided', () => {
    render(<Typography className="additional-class">Test</Typography>);
    expect(screen.getByText('Test')).toHaveClass('additional-class');
  });

  it('renders its children correctly', () => {
    render(
      <Typography>
        <span>Child Span</span>
      </Typography>
    );
    expect(screen.getByText('Child Span').tagName).toBe('SPAN');
  });
});
