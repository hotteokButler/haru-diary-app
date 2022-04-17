import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { firebaseApp } from './firebaseInit';

class FirebaseAuth {
  auth: any;

  constructor() {
    this.auth = getAuth(firebaseApp);
  }

  createUserWithEmailBase(email: string, password: string) {
    createUserWithEmailAndPassword(this.auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    });
  }

  loginWithUserEmail(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then((userCredential) => {
      const user = userCredential.user;
    });
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
