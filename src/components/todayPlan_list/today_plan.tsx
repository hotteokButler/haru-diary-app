import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { IProps } from '../../App';
import { isTodayPlan, loginUserId } from '../../common/global_state';
import { MainBoard } from '../../common/shareStyle';
import { IPath } from '../../service/firebase_repository';
import TodayPlanList from './today_plan_list';

function TodayPlan({ diaryRepository }: IProps) {
  const [allPlanList, setAllPlanList] = useState();
  const userId = useRecoilValue(loginUserId);
  const setPlanDate = useSetRecoilState(isTodayPlan);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSyncTodo = diaryRepository?.syncDiaryData(
      userId,
      IPath.todayPlan,
      (todayPlan: any) => {
        setAllPlanList(todayPlan);
        setPlanDate([
          ...Object.keys(todayPlan).map((data: any) => Number(todayPlan[data].publishedDate)),
        ]);
        console.log(
          Object.keys(todayPlan).map((data: any) => Number(todayPlan[data].publishedDate))
        );
      }
    );
    return () => stopSyncTodo();
  }, [diaryRepository, userId]);

  return (
    <TodayPlanSection>
      <Title>오늘의 할일</Title>
      {allPlanList ? (
        <TodayPlanList
          diaryRepository={diaryRepository}
          allPlanList={allPlanList}
          userId={userId}
        />
      ) : (
        <p>오늘의 할일이 없습니다. 달력의 날짜를 클릭하여 추가해주세요.</p>
      )}
    </TodayPlanSection>
  );
}

export default TodayPlan;

const TodayPlanSection = styled(MainBoard)`
  padding: 2em;
  p {
    color: #999;
  }
  @media (min-width: 768px) {
    width: 40%;
  }
`;
const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.lightBorwnColor};
  span {
    font-size: 1.2rem;
  }
`;
