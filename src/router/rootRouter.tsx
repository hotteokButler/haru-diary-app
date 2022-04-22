import { Route, Routes } from 'react-router-dom';
import { IProps } from '../App';
import LogIn from './login';
import Main from './main';
import Memo from './memo';
import MyDiary from './myDiary';

const RootRouter = ({ getFirebaseAuth, diaryRepository }: IProps) => {
  return (
    <Routes>
      <Route path="/" element={<LogIn getFirebaseAuth={getFirebaseAuth} />} />
      <Route
        path="/main"
        element={<Main getFirebaseAuth={getFirebaseAuth} diaryRepository={diaryRepository} />}
      >
        <Route path="/main/myDiary" element={<MyDiary diaryRepository={diaryRepository} />} />
        <Route path="/main/memo" element={<Memo />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
