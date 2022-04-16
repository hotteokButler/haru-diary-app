import React, { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { defaultCalenderDate, setCalender, weeks } from '../service/calender_set';
import { DayElem } from './day';

const CalenderTitle = styled.h2`
  position: relative;
  padding: 0.5em 1em;
  margin: 0 0 1em;
  font-size: 1.2rem;
  border-bottom: 1px solid ${(props) => props.theme.liBgColor};
  text-align: center;
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

const Calender = () => {
  const weekend = useRecoilValue(weeks);
  const dates = useRecoilValue(setCalender);
  const [month, setMonth] = useRecoilState(defaultCalenderDate);

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
      <CalenderTitle>
        <CalenderButton onClick={onChangeMonth} id="prevMonth">
          <i className="fa-solid fa-angle-left"></i>
        </CalenderButton>
        {checkMonth(new Date(month).getMonth())}
        <CalenderButton onClick={onChangeMonth} id="nextMonth">
          <i className="fa-solid fa-angle-right"></i>
        </CalenderButton>
        <CalenderButton className="todayButton" onClick={onChangeMonth} id="prevMonth">
          Today
        </CalenderButton>
      </CalenderTitle>
      <CalenderBox>
        {weekend.map((week) => (
          <DayElem key={uuidv4()} check="week">
            {week}
          </DayElem>
        ))}
      </CalenderBox>
      <CalenderBox>
        {dates.map((date) => (
          <DayElem
            key={uuidv4()}
            check={
              date === new Date().getDate() &&
              new Date(month).getMonth() === new Date().getMonth() &&
              new Date(month).getFullYear() === new Date().getFullYear()
                ? 'today'
                : 'day'
            }
          >
            {date}
          </DayElem>
        ))}
      </CalenderBox>
    </>
  );
};

export default Calender;
