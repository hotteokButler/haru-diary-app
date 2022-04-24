import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IProps } from '../../App';
import { loginUserId } from '../../common/global_state';
import { MainBoard } from '../../common/shareStyle';
import { IPath } from '../../service/firebase_repository';
import TodayPlanList from './today_plan_list';

function TodayPlan({ diaryRepository }: IProps) {
  const [allPlanList, setAllPlanList] = useState();
  const userId = useRecoilValue(loginUserId);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSyncTodo = diaryRepository?.syncDiaryData(
      userId,
      IPath.todayPlan,
      (todayPlan: any) => {
        setAllPlanList(todayPlan);
      }
    );
    return () => stopSyncTodo();
  }, []);

  return (
    <TodayPlanSection>
      <Title>오늘의 할일</Title>
      {allPlanList && (
        <TodayPlanList
          diaryRepository={diaryRepository}
          allPlanList={allPlanList}
          userId={userId}
        />
      )}
    </TodayPlanSection>
  );
}

export default TodayPlan;

const TodayPlanSection = styled(MainBoard)`
  padding: 2em;
`;
const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 1.5rem;
  color: ${(props) => props.theme.lightBorwnColor};
  span {
    font-size: 1.2rem;
  }
`;
