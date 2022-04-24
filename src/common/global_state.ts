import { atom, selector } from 'recoil';

export const passwordRegex = atom({
  key: 'passwordRegex',
  default: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/,
});

export const emailRegex = atom({
  key: 'emailRegex',
  default:
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
});

export const loginUserId = atom({
  key: 'loginUserId',
  default: '',
});

export const dayIdNum = atom({
  key: 'dayIdNum',
  default: Date.now(),
});

export interface IData {
  id: string;
  publishedDate?: number;
  title?: string;
  keyword?: string;
  tapeTheme?: string;
  photoFrameTheme?: string;
  photoURL?: string;
  weather?: string;
  feeling?: string;
  text: string;
  freeMemo?: string;
}

export const listBtnState = atom({
  key: 'listBtnState',
  default: true,
});
export const addBtnState = atom({
  key: 'addBtnState',
  default: false,
});

export const todayPlanState = atom({
  key: 'todayPlanState',
  default: false,
});

export const isTodayPlan = atom<number[] | string[]>({
  key: 'isTodayPlan',
  default: [],
});
