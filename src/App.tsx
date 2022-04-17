import { GlobalStyle } from './common/reset';
import RootRouter from './router/rootRouter';
import { IFireBaseAuth } from './service/firebase_auth_service';

const App = ({ getFirebaseAuth }: any) => {
  return (
    <>
      <GlobalStyle />
      <RootRouter getFirebaseAuth={getFirebaseAuth} />
    </>
  );
};

export default App;
