import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '.';

// TooltipContentコンポーネントの基本的なレンダリングをテストします
describe('ui/Tooltip', () => {
  it('renders the component with default props', async () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip Text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    const trigger = screen.getByText('Hover me');
    await userEvent.hover(trigger);
    await waitFor(() =>
      expect(screen.getAllByText(/Tooltip Text/)[0]).toBeInTheDocument()
    );
  });

  it('applies a custom class name', async () => {
    const customClass = 'custom-tooltip';
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent className={customClass}>Tooltip Text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    const trigger = screen.getByText('Hover me');
    await userEvent.hover(trigger);
    await waitFor(() =>
      expect(screen.getAllByText(/Tooltip Text/)[0]).toHaveClass(customClass)
    );
  });
});
