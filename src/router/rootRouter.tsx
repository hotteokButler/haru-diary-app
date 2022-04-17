import { Route, Routes } from 'react-router-dom';
import Main from './main';
import Memo from './memo';
import MyDiary from './myDiary';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="/myDiary" element={<MyDiary />} />
        <Route path="/memo" element={<Memo />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
