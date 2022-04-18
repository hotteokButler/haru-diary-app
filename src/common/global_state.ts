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

export const loginUser = atom({
  key: 'loginUser',
  default: null,
});
