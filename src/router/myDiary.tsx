import { useState } from 'react';
import styled from 'styled-components';
import { MainBoard } from '../common/shareStyle';
import DiaryList from '../components/diary/diary_list';
import bg_pattern from '../images/bg_pattern.svg';
import maker_purple from '../images/marker/marker_purple.png';

const DiaryToggleBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 70px;
  padding: 0 20px 0;
`;

const DiaryToggleButton = styled.button<{ isActive: boolean }>`
  position: relative;
  padding: 0.5em;
  background: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
  &:hover {
    color: ${(props) => props.theme.pinkBeigeColor};
  }
  & span.diaryButtonBk {
    position: absolute;
    top: 0;
    left: 0;
    width: 95px;
    height: 30px;
    background: ${(props) => (props.isActive ? `url(${maker_purple})` : 'none')};
    background-position: center center;
    background-repeat: no-repeat;
    z-index: 1;
    opacity: 0.5;
  }
`;

const MyDiary = () => {
  const [diaryListBtn, setDiaryListBtn] = useState(true);
  const [diaryAddBtn, setDiaryAddBtn] = useState(false);

  const onButtunClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { id },
    } = event;
    if (id === 'diaryList') {
      setDiaryListBtn((prev) => !prev);
      setDiaryAddBtn(false);
    } else if (id === 'diaryAdd') {
      setDiaryAddBtn((prev) => !prev);
      setDiaryListBtn(false);
    }
  };

  return (
    <MainBoard bgPattern={bg_pattern}>
      <DiaryToggleBtns>
        <DiaryToggleButton id="diaryList" onClick={onButtunClick} isActive={diaryListBtn}>
          <span className="diaryButtonBk"></span>
          <span className="buttonName">Diary List</span>
        </DiaryToggleButton>
        <DiaryToggleButton id="diaryAdd" onClick={onButtunClick} isActive={diaryAddBtn}>
          <span className="diaryButtonBk"></span>
          <span className="buttonName">Add Diary</span>
        </DiaryToggleButton>
      </DiaryToggleBtns>
      {diaryListBtn && <DiaryList />}
    </MainBoard>
  );
};

export default MyDiary;
