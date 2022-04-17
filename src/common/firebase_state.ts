import { atom } from 'recoil';
import FirebaseAuth from '../service/firebase_auth_service';

export const firebaseAuth = atom({
  key: 'firebaseAuth',
  default: [],
});
