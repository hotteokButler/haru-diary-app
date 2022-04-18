import { User, UserCredential } from 'firebase/auth';
import { GlobalStyle } from './common/reset';
import RootRouter from './router/rootRouter';

export type IProps = {
  getFirebaseAuth?: {
    createUserWithEmailBase(email: string, password: string, profile?: string | null): void;
    loginWithUserEmail(email: string, password: string): void;
    onAuthChange(callback: (user: User | null) => void): void;
    setUserName(userName: string): void;
    loginWithGoogle(): Promise<UserCredential>;
    logOut(): any;
  };
  auth?: any;
  googleProvider?: any;
  firebaseApp?: any;
};

const App = ({ getFirebaseAuth }: IProps) => {
  return (
    <>
      <GlobalStyle />
      <RootRouter getFirebaseAuth={getFirebaseAuth} />
    </>
  );
};

export default App;
