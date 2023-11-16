import {
  DATE_DIFF_LABEL,
  DAY,
  HOUR,
  MINUTE,
  MONTH,
  WEEK,
} from './constant';

export const DateToDiffLabel = (
  date: Date,
  now: Date,
): string => {
  const diffInSeconds = Math.abs(
    Math.floor((now.getTime() - date.getTime()) / 1000)
  );

  if(diffInSeconds <= MONTH * 3) {
    if (diffInSeconds < MINUTE)
        return `${diffInSeconds}${
            DATE_DIFF_LABEL['second']['past']
        }`;
    if (diffInSeconds < HOUR)
        return `${Math.floor(diffInSeconds / MINUTE)}${
            DATE_DIFF_LABEL['minute']['past']
        }`;
    if (diffInSeconds < DAY)
        return `${Math.floor(diffInSeconds / HOUR)}${
            DATE_DIFF_LABEL['hour']['past']
        }`;
    if (diffInSeconds < WEEK)
        return `${Math.floor(diffInSeconds / DAY)}${
            DATE_DIFF_LABEL['day']['past']
        }`;
    if (diffInSeconds < MONTH) 
        return `${Math.floor(diffInSeconds / WEEK)}${
            DATE_DIFF_LABEL['week']['past']
        }`;
    return `${Math.floor(diffInSeconds / MONTH)}${
      DATE_DIFF_LABEL['month']['past']
    }`;
  }

  if(date.getFullYear() === now.getFullYear()) {
    return `${date.getMonth()+1}/${date.getDate()}`
  } else {
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
  }
};