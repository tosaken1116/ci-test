import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { render } from '@testing-library/react';


import '@testing-library/jest-dom';
import { IconButton } from '.';

describe('test ui/IconButton', () => {
  // Test rendering with 'default' variant
  it('renders the default variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<IconButton><GitHubLogoIcon /></IconButton>);

    expect(firstChild).toHaveClass('bg-primary text-primary-foreground');
  });

  // Test rendering with 'secondary' variant
  it('renders the secondary variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<IconButton variant="secondary"><GitHubLogoIcon /></IconButton>);

    expect(firstChild).toHaveClass('bg-secondary text-secondary-foreground');
  });

  // Test rendering with 'destructive' variant
  it('renders the destructive variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<IconButton variant="destructive"><GitHubLogoIcon /></IconButton>);

    expect(firstChild).toHaveClass(
      'bg-destructive text-destructive-foreground'
    );
  });

  // Test rendering with 'outline' variant
  it('renders the outline variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<IconButton variant="outline"><GitHubLogoIcon /></IconButton>);
    
    expect(firstChild).toHaveClass('border border-input bg-transparent');
  });

  // Test rendering with 'link' variant
  it('renders the link variant of the button correctly', () => {
    const {
      container: { firstChild },
    } = render(<IconButton variant="link"><GitHubLogoIcon /></IconButton>);

    expect(firstChild).toHaveClass('text-primary underline-offset-4');
  });

  // Test that children are rendered properly
  it('renders children correctly', () => {
    const { container } = render(<IconButton><GitHubLogoIcon /></IconButton>);
    expect(container.querySelector('svg')).toBeInTheDocument()
  });
});