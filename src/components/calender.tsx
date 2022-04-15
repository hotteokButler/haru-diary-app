import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { setCalender, weeks } from '../service/calender_set';
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
`;

const CalenderBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${(props) => props.theme.mainBoardColor};
  padding: 0.5em;
  text-align: right;
  border-radius: 4px;
  ${DayElem} {
    &:hover {
      background-color: ${(props) => props.theme.bgColor};
      color: ${(props) => props.theme.accentColor};
    }
  }
  p.week {
    font-size: 14px;
    height: 35px;
    cursor: default;
    &:hover {
      background-color: ${(props) => props.theme.mainBoardColor};
    }
  }
  p:nth-child(7n) {
    color: #5454cf;
  }

  p:nth-child(7n + 1) {
    color: #f48673;
  }
`;

const Calender = () => {
  const weekend = useRecoilValue(weeks);
  const dates = useRecoilValue(setCalender);

  return (
    <>
      <CalenderTitle>
        <CalenderButton>
          <i className="fa-solid fa-angle-left"></i>
        </CalenderButton>
        April
        <CalenderButton>
          <i className="fa-solid fa-angle-right"></i>
        </CalenderButton>
      </CalenderTitle>
      <CalenderBox>
        {weekend.map((week) => (
          <DayElem key={Date.now() + Math.random()} className="week">
            {week}
          </DayElem>
        ))}
        {dates.map((date) => (
          <DayElem key={Date.now() + Math.random()}>{date}</DayElem>
        ))}
      </CalenderBox>
    </>
  );
};

export default Calender;
