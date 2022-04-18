import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { IData, userData } from '../../common/global_state';
import DiaryCard from './diary_card';

const DiaryList = () => {
  const data = useRecoilValue(userData);

  return (
    <>
      {Object.keys(data).map((index) => (
        <DiaryCard key={uuidv4()} {...data[index]} />
      ))}
    </>
  );
};

export default DiaryList;
