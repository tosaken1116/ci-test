import { dateFormat } from '.';

describe('dateFormat function', () => {
  it('formats the date correctly according to the given format', () => {
    const date = '2023-01-01T00:00:00.000Z';
    const formatString = 'yyyy-MM-dd';
    const result = dateFormat(date, formatString);
    expect(result).toBe('2023-01-01');
  });

  it('throws an error with invalid date object', () => {
    const invalidDate = 'not a real date';
    const formatString = 'yyyy-MM-dd';
    expect(() => dateFormat(invalidDate, formatString)).toThrowError();
  });

  it('throws an error with invalid date format', () => {
    const date = '2023-01-01T00:00:00.000Z';
    const invalidFormatString = '';
    expect(() => dateFormat(date, invalidFormatString)).toThrowError();
  });

  it('handles incorrect format strings', () => {
    const date = '2023-01-01T00:00:00.000Z';
    const formatString = 'not a format';
    expect(() => dateFormat(date, formatString)).toThrowError();
  });

  it('formats the date correctly in a specific locale', () => {
    const date = '2023-01-01T00:00:00.000Z';
    const formatString = 'PPP';
    const result = dateFormat(date, formatString);
    expect(result).toBe('January 1st, 2023');
  });
});
