export const DATE_DIFF_LABEL = {
  second: {
    past: '秒前',
  },
  minute: {
    past: '分前',
  },
  hour: {
    past: '時間前',
  },
  day: {
    past: '日前',
  },
  week: {
    past: '週間前',
  },
  month: {
    past: 'ヶ月前',
  },
} as const;

export const MINUTE = 60;

export const HOUR = 60 * MINUTE;

export const DAY = 24 * HOUR;

export const WEEK = 7 * DAY;

export const MONTH = 30 * DAY;

export const YEAR = 365 * DAY;