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
  const period = now.getTime() - date.getTime() > 0 ? 'past' : 'future';

  if(diffInSeconds <= MONTH * 3) {
    if (diffInSeconds < MINUTE)
        return `${diffInSeconds}${
            DATE_DIFF_LABEL['ja']['second'][period][
                diffInSeconds == 1 ? 'one' : 'other'
            ]
        }`;
    if (diffInSeconds < HOUR)
        return `${Math.floor(diffInSeconds / MINUTE)}${
            DATE_DIFF_LABEL['ja']['minute'][period][
                Math.floor(diffInSeconds / MINUTE) == 1 ? 'one' : 'other'
            ]
        }`;
    if (diffInSeconds < DAY)
        return `${Math.floor(diffInSeconds / HOUR)}${
            DATE_DIFF_LABEL['ja']['hour'][period][
                Math.floor(diffInSeconds / HOUR) == 1 ? 'one' : 'other'
            ]
        }`;
    if (diffInSeconds < WEEK)
        return `${Math.floor(diffInSeconds / DAY)}${
            DATE_DIFF_LABEL['ja']['day'][period][
                Math.floor(diffInSeconds / DAY) == 1 ? 'one' : 'other'
            ]
        }`;
    if (diffInSeconds < MONTH) 
        return `${Math.floor(diffInSeconds / WEEK)}${
            DATE_DIFF_LABEL['ja']['week'][period][
                Math.floor(diffInSeconds / WEEK) == 1 ? 'one' : 'other'
            ]
        }`;
    return `${Math.floor(diffInSeconds / MONTH)}${
      DATE_DIFF_LABEL['ja']['month'][period][
        Math.floor(diffInSeconds / MONTH) == 1 ? 'one' : 'other'
      ]
    }`;
  }

  if(date.getFullYear() === now.getFullYear()) {
    return `${date.getMonth()+1}/${date.getDate()}`
  } else {
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
  }
};