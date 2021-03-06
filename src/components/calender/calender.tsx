import React, { useCallback, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { IProps } from '../../App';
import { todayPlanState } from '../../common/global_state';
import { defaultCalenderDate, setCalender, weeks } from '../../service/calender_set';
import SetTodayPlan from '../modal/set_today_plan';
import Day from './day';

function Calender({ diaryRepository }: IProps) {
  const weekend = useRecoilValue(weeks);
  const dates = useRecoilValue(setCalender);
  const [month, setMonth] = useRecoilState(defaultCalenderDate);
  const todayPlanModalState = useRecoilValue(todayPlanState);

  const checkMonth = useCallback(
    (data: number): any => {
      switch (data) {
        case 0:
          return 'January';
          break;
        case 1:
          return 'February';
          break;
        case 2:
          return 'March';
          break;
        case 3:
          return 'April';
          break;
        case 4:
          return 'May';
          break;
        case 5:
          return 'June';
          break;
        case 6:
          return 'July';
          break;
        case 7:
          return 'August';
          break;
        case 8:
          return 'September';
          break;
        case 9:
          return 'October';
          break;
        case 10:
          return 'November';
          break;
        case 11:
          return 'December';
          break;
      }
    },
    [month]
  );

  const onChangeMonth = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { id },
    } = event;
    if (id === 'prevMonth') {
      setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1));
    } else if (id === 'nextMonth') {
      setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1));
    } else if (id === 'today') {
      setMonth(new Date());
    }
  };

  useEffect(() => {
    checkMonth(new Date().getMonth());
  }, []);
  return (
    <>
      <CalenderSection>
        <CalenderTitle>
          <CalenderButton onClick={onChangeMonth} id="prevMonth">
            <i className="fa-solid fa-angle-left"></i>
          </CalenderButton>
          <span>{checkMonth(new Date(month).getMonth())}</span>
          <CalenderButton onClick={onChangeMonth} id="nextMonth">
            <i className="fa-solid fa-angle-right"></i>
          </CalenderButton>
          <CalenderButton className="todayButton" onClick={onChangeMonth} id="today">
            Today
          </CalenderButton>
        </CalenderTitle>
        <CalenderBox>
          {weekend.map((week) => (
            <Day key={uuidv4()} check="week" text={week} />
          ))}
        </CalenderBox>
        <CalenderBox>
          {Object.keys(dates).map((date) => (
            <Day
              key={uuidv4()}
              check={
                new Date(Number(date)).getFullYear() === new Date().getFullYear() &&
                new Date(Number(date)).getMonth() === new Date().getMonth() &&
                new Date(Number(date)).getDate() === new Date().getDate()
                  ? 'today'
                  : 'day'
              }
              text={dates[date]}
              dayId={date}
            />
          ))}
        </CalenderBox>
      </CalenderSection>
      {todayPlanModalState && <SetTodayPlan diaryRepository={diaryRepository} />}
    </>
  );
}

export default Calender;

//css
const CalenderSection = styled.section`
  padding: 2em;
`;
const CalenderTitle = styled.h2`
  position: relative;
  margin: 0 0 1em;
  font-size: 1.2rem;
  border-bottom: 1px solid ${(props) => props.theme.liBgColor};
  text-align: center;
  & span {
    display: inline-block;
    width: 60px;
  }
`;

const CalenderButton = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 1em;
  padding: 0.2em 0.5em 0.5em 0.5em;
  color: ${(props) => props.theme.accentColor};
  cursor: pointer;
  background-color: transparent;
  vertical-align: middle;
  &:hover {
    color: ${(props) => props.theme.pinkBeigeColor};
  }
  &.todayButton {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const CalenderBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.mainBoardColor};
  padding: 0.5em;
  text-align: right;
  border-radius: 4px;
`;
