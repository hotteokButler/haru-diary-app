import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

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

export const userData = atom<{ [key: string]: IData }>({
  key: 'userData',
  default: {
    '1': {
      id: '1',
      publishedDate: Date.now(),
      title: 'Happy To Meet',
      keyword: 'keyword',
      tapeTheme: 'default',
      photoFrameTheme: 'default',
      photoURL: 'https://cdn.pixabay.com/photo/2022/03/27/11/23/cat-7094808_960_720.jpg',
      wheather: 'good',
      feeling: 'good',
      text: ' I met so cute cat on the load that infront of my house. His caractor is so honiesty.I met so cute cat on the load that infront of my house. His caractor is so honiesty',
      freeMemo: 'memo text',
    },
    '2': {
      id: '2',
      publishedDate: Date.now(),
      title: 'title2',
      keyword: 'keyword2',
      tapeTheme: 'default2',
      photoFrameTheme: 'default2',
      photoURL: 'https://cdn.pixabay.com/photo/2022/03/27/11/23/cat-7094808_960_720.jpg',
      wheather: 'good2',
      feeling: 'good2',
      text: 'nice to meet you2',
      freeMemo: 'memo text2',
    },
  },
});

export interface IData {
  id: string;
  publishedDate: number;
  title: string;
  keyword: string;
  tapeTheme: string;
  photoFrameTheme: string;
  photoURL: string;
  wheather: string;
  feeling: string;
  text: string;
  freeMemo: string;
}
