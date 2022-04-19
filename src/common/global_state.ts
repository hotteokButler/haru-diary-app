import { atom } from 'recoil';

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
      weather: 'hazy',
      feeling: 'nice',
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
      weather: 'sunny',
      feeling: '',
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
  weather: string;
  feeling: string;
  text: string;
  freeMemo: string;
}
