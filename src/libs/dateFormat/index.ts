import { format } from 'date-fns';

export const dateFormat = (dateString: string, _format: string): string =>
  format(new Date(dateString), _format);
