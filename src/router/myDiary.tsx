import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IProps } from '../App';
import { addBtnState, listBtnState, loginUserId } from '../common/global_state';
import { MainBoard } from '../common/shareStyle';
import DiaryEditForm from '../components/diary/diary_edit_from';
import DiaryList from '../components/diary/diary_list';
import bg_pattern from '../images/bg_pattern.svg';
import maker_purple from '../images/marker/marker_purple.png';
import { IPath } from '../service/firebase_repository';

function MyDiary({ diaryRepository }: IProps) {
  const [diaryListBtn, setDiaryListBtn] = useRecoilState(listBtnState);
  const [diaryAddBtn, setDiaryAddBtn] = useRecoilState(addBtnState);
  const [allDiaryList, setAllDiaryList] = useState();
  const userId = useRecoilValue(loginUserId);
  const onButtunClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { id },
    } = event;
    if (id === 'diaryList') {
      setDiaryListBtn((prev) => !prev);
      setDiaryAddBtn((prev) => !prev);
    } else if (id === 'diaryAdd') {
      setDiaryAddBtn((prev) => !prev);
      setDiaryListBtn((prev) => !prev);
    }
  };

  useEffect(() => {
    if (!userId) {
      return;
    }

    const stopSync = diaryRepository?.syncDiaryData(userId, IPath.diary, (diaryList: any) => {
      setAllDiaryList(diaryList);
    });

    return () => stopSync();
  }, [userId, diaryRepository]);
  //
  return (
    <DiaryMainBoard bgPattern={bg_pattern}>
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
      <DiaryCardSection>
        {diaryListBtn && (
          <DiaryList allDiaryList={allDiaryList} diaryRepository={diaryRepository} />
        )}
        {diaryAddBtn && <DiaryEditForm diaryRepository={diaryRepository} />}
      </DiaryCardSection>
    </DiaryMainBoard>
  );
}

export default MyDiary;

const DiaryMainBoard = styled(MainBoard)``;

const DiaryCardSection = styled.section`
  padding: 50px 30px 30px;
  max-height: 200vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const DiaryToggleBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px 10px;
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
