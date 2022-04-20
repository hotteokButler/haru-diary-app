import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { IProps } from '../../App';
import DiaryCard from './diary_card';

interface IDiaryList extends IProps {
  allDiaryList?: any;
}

const DiaryLoading = styled.h1`
  text-align: center;
  font-size: 1.8em;
  font-weight: 700;
  color: ${(props) => props.theme.accentColor};
`;

const DiaryList = ({ allDiaryList, diaryRepository }: IDiaryList) => {
  const [dataState, setDataState] = useState('Loading...');

  useEffect(() => {
    setDataState('Loading...');

    let timer = setTimeout(() => {
      setDataState('불러올 일기가 없습니다. 새 일기를 작성해주세요');
    }, 5000);

    return clearTimeout(timer);
  }, []);

  return (
    <>
      {allDiaryList ? (
        Object.keys(allDiaryList).map((index) => (
          <DiaryCard key={uuidv4()} {...allDiaryList[index]} diaryRepository={diaryRepository} />
        ))
      ) : (
        <DiaryLoading>{dataState}</DiaryLoading>
      )}
    </>
  );
};

export default DiaryList;
