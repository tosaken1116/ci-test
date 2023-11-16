export const DATE_DIFF_LABEL = {
  ja: {
    second: {
      future: { one: '秒後', other: '秒後' },
      past: { one: '秒前', other: '秒前' },
    },
    minute: {
      future: { one: '分後', other: '分後' },
      past: { one: '分前', other: '分前' },
    },
    hour: {
      future: { one: '時間後', other: '時間後' },
      past: { one: '時間前', other: '時間前' },
    },
    day: {
      future: { one: '日後', other: '日後' },
      past: { one: '日前', other: '日前' },
    },
    week: {
      future: { one: '週間後', other: '週間後' },
      past: { one: '週間前', other: '週間前' },
    },
    month: {
      future: { one: 'ヶ月後', other: 'ヶ月後' },
      past: { one: 'ヶ月前', other: 'ヶ月前' },
    },
    year: {
      future: { one: '年後', other: '年後' },
      past: { one: '年前', other: '年前' },
    },
  } as const,
} as const;

export const MINUTE = 60;

export const HOUR = 60 * MINUTE;

export const DAY = 24 * HOUR;

export const WEEK = 7 * DAY;

export const MONTH = 30 * DAY;

export const YEAR = 365 * DAY;