import { atom, selector } from 'recoil';

export const defaultCalenderDate = atom({
  key: 'defaultCalenderDate',
  default: new Date(),
});

export const weeks = atom({
  key: 'weeks',
  default: ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat'],
});

export const getThisYear = selector({
  key: 'getThisYear',
  get: ({ get }) => {
    const date = get(defaultCalenderDate);
    return date.getFullYear();
  },
});

export const getThisMonth = selector({
  key: 'getThisMonth',
  get: ({ get }) => {
    let date = get(defaultCalenderDate);
    return date.getMonth();
  },
});

export const setCalender = selector({
  key: 'setCalender',
  get: ({ get }) => {
    const viewYear = get(getThisYear);
    const viewMonth = get(getThisMonth);

    //prevLast: 저번달 마지막날 , thisLas : 이번달 마지막날
    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    //저번달 날짜 요일
    const prevLastDate = prevLast.getDate();
    const prevLastDay = prevLast.getDay();

    //이번달 날짜 요일
    const thisLastDate = thisLast.getDate();
    const thisLastDay = thisLast.getDay();

    const newArray: any = new Array(thisLastDate + 1);
    const prevDates: number[] = [];
    const thisDates: number[] = [...newArray.keys()].slice(1);
    const nextDates: number[] = [];

    if (prevLastDay !== 6) {
      for (let i = 0; i < prevLastDay + 1; i++) {
        prevDates.unshift(prevLastDate - i);
      }
    }

    for (let i = 1; i < 7 - thisLastDay; i++) {
      nextDates.push(i++);
    }

    const dates = prevDates.concat(thisDates, nextDates);

    return dates;
  },
});
