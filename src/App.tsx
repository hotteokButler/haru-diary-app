import { User, UserCredential } from 'firebase/auth';
import { IData } from './common/global_state';
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
  firebaseDB?: any;
  diaryRepository?: {
    syncDiaryData(userId: string, onUpdate: (data: any) => any): any;
    saveDiary(userId: string, diaryData: IData): void;
    removeDiary(userId: string, cardId: string): void;
    readDiary(uid: string): void;
  };
};

const App = ({ getFirebaseAuth, diaryRepository }: IProps) => {
  return (
    <>
      <GlobalStyle />
      <RootRouter getFirebaseAuth={getFirebaseAuth} diaryRepository={diaryRepository} />
    </>
  );
};

export default App;
