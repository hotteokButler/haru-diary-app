import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { IProps } from '../../App';
import DiaryCard from './diary_card';

interface IDiaryList extends IProps {
  allDiaryList?: any;
}

function DiaryList({ allDiaryList, diaryRepository }: IDiaryList) {
  return (
    <>
      {allDiaryList ? (
        Object.keys(allDiaryList).map((index) => (
          <DiaryCard key={uuidv4()} {...allDiaryList[index]} diaryRepository={diaryRepository} />
        ))
      ) : (
        <DiaryLoading>No Diary</DiaryLoading>
      )}
    </>
  );
}

export default DiaryList;

//css
const DiaryLoading = styled.h1`
  text-align: center;
  font-size: 1.8em;
  font-weight: 700;
  color: ${(props) => props.theme.accentColor};
`;
