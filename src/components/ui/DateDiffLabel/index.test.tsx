import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";
import { DateDiffLabel } from ".";

describe('test ui/DateDiffLabel', () => {
  const now = new Date(2023, 5, 15);
 it('should display seconds when difference is less than a minute', () => {
    render(<DateDiffLabel date={new Date(2023, 5, 15, 0, 0, 30)} now={now} />);
    expect(screen.getByText(/秒後/)).toBeInTheDocument();
  });

  it('should display minutes when difference is less than an hour', () => {
    render(<DateDiffLabel date={new Date(2023, 5, 15, 0, 30)} now={now} />);
    expect(screen.getByText(/分後/)).toBeInTheDocument();
  });

  it('should display hours when difference is less than a day', () => {
    render(<DateDiffLabel date={new Date(2023, 5, 15, 1, 0)} now={now} />);
    expect(screen.getByText(/時間後/)).toBeInTheDocument();
  });

  it('should display days when difference is less than a week', () => {
    render(<DateDiffLabel date={new Date(2023, 5, 16)} now={now} />);
    expect(screen.getByText(/日後/)).toBeInTheDocument();
  });

  it('should display weeks when difference is less than a month', () => {
    render(<DateDiffLabel date={new Date(2023, 5, 22)} now={now} />);
    expect(screen.getByText(/週間後/)).toBeInTheDocument();
  });


  it('should display months when difference is less than a year', () => {
    render(<DateDiffLabel date={new Date(2023, 6, 15)} now={now} />);
    expect(screen.getByText(/ヶ月後/)).toBeInTheDocument();
  });

  it('should display date in MM/DD format for dates within the same year', () => {
    render(<DateDiffLabel date={new Date(2023, 2, 10)} now={now} />);
    expect(screen.getByText('3/10')).toBeInTheDocument();
  });

  it('should display date in YYYY/MM/DD format for dates in a different year', () => {
    render(<DateDiffLabel date={new Date(2022, 11, 25)} now={now} />);
    expect(screen.getByText('2022/12/25')).toBeInTheDocument();
  });
});