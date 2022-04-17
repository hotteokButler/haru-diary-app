import { Route, Routes } from 'react-router-dom';
import LogIn from './login';
import Main from './main';
import Memo from './memo';
import MyDiary from './myDiary';

const RootRouter = ({ getFirebaseAuth }: any) => {
  return (
    <Routes>
      <Route path="/" element={<LogIn getFirebaseAuth={getFirebaseAuth} />} />
      <Route path="/main" element={<Main getFirebaseAuth={getFirebaseAuth} />}>
        <Route path="/main/myDiary" element={<MyDiary />} />
        <Route path="/main/memo" element={<Memo />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
