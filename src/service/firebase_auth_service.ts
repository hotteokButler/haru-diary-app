import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
} from 'firebase/auth';

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
        console.log(user);
      })
      .then(() => this.setUserName(profile!))
      .catch((error) => console.log(error + 'error'));
  }

  loginWithUserEmail(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => console.log(error + 'error'));
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, this.googleProvider);
  }

  onAuthChange(callback: (user: User | null) => void) {
    onAuthStateChanged(this.auth, (user) => callback(user));
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
