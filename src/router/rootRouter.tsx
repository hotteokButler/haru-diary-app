import { Route, Routes } from 'react-router-dom';
import Main from '../components/main';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default RootRouter;
