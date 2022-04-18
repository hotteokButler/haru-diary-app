import { useState } from 'react';
import styled from 'styled-components';
import { MainBoard } from '../common/shareStyle';
import bg_pattern from '../images/bg_pattern.svg';

export interface IData {
  id: {
    id: string;
    publishedDate: Date;
    title: string;
    keyword: string;
    tapeTheme: string;
    photoTheme: string;
    photoURL: string;
    wheather: string;
    feeling: string;
    text: string;
    freeMemo: string;
  };
}

const DiaryToggleBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    position: relative;
    padding: 0.5em;
    cursor: pointer;
    background: none;
    border-radius: 4px;
    &:hover {
      background-color: ${(props) => props.theme.lightPinkColor};
      color: #fcfcfc;
    }
  }
`;

const MyDiary = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <MainBoard bgPattern={bg_pattern}>
      <DiaryToggleBtns>
        <button className="diaryList">
          <span className="diaryButtonBk"></span>
          <span className="buttonName">Diary List</span>
        </button>
        <button className="diaryEdit">
          <span className="diaryButtonBk"></span>
          <span className="buttonName">Add Diary</span>
        </button>
      </DiaryToggleBtns>
    </MainBoard>
  );
};

export default MyDiary;
