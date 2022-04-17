import { Route, Routes } from 'react-router-dom';
import LogIn from './login';
import Main from './main';
import Memo from './memo';
import MyDiary from './myDiary';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route path="/main" element={<Main />}>
        <Route path="/main/myDiary" element={<MyDiary />} />
        <Route path="/main/memo" element={<Memo />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
