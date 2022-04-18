import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from 'firebase/auth';

export interface IFireBaseAuth {
  createUserWithEmailBase: (email: string, password: string) => void;
  loginWithUserEmail: (email: string, password: string, callback: () => void) => void;
  setUserName: (userName: string) => void;
  logOut: () => void;
}

class FirebaseAuth {
  auth: any;
  googleProvider: any;
  firebaseApp: any;

  constructor(firebaseApp: any) {
    this.firebaseApp = firebaseApp;
    this.auth = getAuth(firebaseApp);
    this.googleProvider = new GoogleAuthProvider();
  }

  createUserWithEmailBase(email: string, password: string, profile?: string | null) {
    createUserWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .then(() => this.setUserName(profile!))
      .catch((error) => console.log(error + 'error'));
  }

  loginWithUserEmail(email: string, password: string, callback: () => void) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        callback();
      })
      .catch((error) => console.log(error + 'error'));
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, this.googleProvider);
  }

  onAuthChange(callback: () => void) {
    onAuthStateChanged(this.auth, callback);
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
