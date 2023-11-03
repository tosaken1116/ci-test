import { render } from '@testing-library/react';

import '@testing-library/jest-dom';
import { DateLabel } from '.';

describe('ui/DateLabelのテスト', () => {
  const testDate = '2023-01-01T00:00:00';
  const isoString = new Date(testDate).toISOString();
  it('renders the component with default date format', () => {
    const screen = render(<DateLabel date={testDate} />);
    const timeElement = screen.getByText(/2023\/01\/01 00:00:00/);
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute('dateTime', isoString);
  });

  it('renders the component with custom date format', () => {
    const customFormat = 'yyyy-MM-dd';
    const screen = render(<DateLabel date={testDate} format={customFormat} />);
    const timeElement = screen.getByText(/2023-01-01/);
    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute('dateTime', isoString);
  });

  it('applies custom class names', () => {
    const customClassName = 'custom-class';
    const screen = render(
      <DateLabel date={testDate} className={customClassName} />
    );
    const timeElement = screen.getByText(/2023\/01\/01 00:00:00/);
    expect(timeElement).toHaveClass(customClassName);
  });

  it('renders the correct dateTime attribute', () => {
    const screen = render(<DateLabel date={testDate} />);
    const timeElement = screen.getByText(/2023\/01\/01 00:00:00/);
    expect(timeElement).toHaveAttribute('dateTime', isoString);
  });
});
