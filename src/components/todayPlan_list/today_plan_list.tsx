import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IProps } from '../../App';
import { dayIdNum } from '../../common/global_state';
import TodayPlanCard from './today_plan_card';

interface ITodayPlan extends IProps {
  allPlanList?: any;
  userId?: string;
}
function TodayPlanList({ diaryRepository, allPlanList, userId }: ITodayPlan) {
  const selectedDayId = useRecoilValue(dayIdNum);

  return (
    <>
      <TodayPlanCardLi>
        {Object.keys(allPlanList).map((data) => {
          let date = new Date(allPlanList[data].publishedDate);
          const today = new Date(selectedDayId);
          if (
            date.getFullYear() === today.getFullYear() &&
            date.getMonth() === today.getMonth() &&
            date.getDate() === today.getDate()
          ) {
            return (
              <TodayPlanCard
                key={allPlanList[data].id}
                data={{ ...allPlanList[data] }}
                diaryRepository={diaryRepository}
                userId={userId}
              />
            );
          } else {
            return null;
          }
        })}
      </TodayPlanCardLi>
    </>
  );
}

export default TodayPlanList;

const TodayPlanCardLi = styled.ul`
  padding: 1em 0.5em;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.lightPinkColor};
`;
