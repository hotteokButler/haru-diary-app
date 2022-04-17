import { Route, Routes } from 'react-router-dom';
import Main from './main';
import MyDiary from './myDiary';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/myDiary" element={<MyDiary />}></Route>
    </Routes>
  );
};

export default RootRouter;
