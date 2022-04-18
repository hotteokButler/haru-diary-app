import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { firebaseApp } from './firebaseInit';

export interface IFireBaseAuth {
  createUserWithEmailBase: (email: string, password: string) => void;
  loginWithUserEmail: (email: string, password: string, callback: () => void) => void;
  setUserName: (userName: string) => void;
  logOut: () => void;
}

class FirebaseAuth {
  auth: any;
  googleProvider: any;
  constructor() {
    this.auth = getAuth(firebaseApp);
    this.googleProvider = new GoogleAuthProvider();
  }

  createUserWithEmailBase(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => console.log(error + 'error'));
  }

  loginWithUserEmail(email: string, password: string, callback: () => void) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        callback();
      })
      .catch((error) => console.log(error + 'error'));
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, this.googleProvider);
  }

  setUserName(userName: string) {
    updateProfile(this.auth.currentUser, {
      displayName: userName,
    }).then((arr: any) => {
      console.log(arr);
    });
  }

  logOut() {
    signOut(this.auth);
  }
}

export default FirebaseAuth;
