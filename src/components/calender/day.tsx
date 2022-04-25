import React, { memo, useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { dayIdNum, isTodayPlan, todayPlanState } from '../../common/global_state';

interface IDayElem {
  check: string;
  isRegistered?: boolean;
}

interface IDayProps {
  check?: string;
  text?: number | string | undefined;
  className?: string;
  dayId?: string | number;
}

function Day({ check, text, dayId }: IDayProps) {
  const setTodayPlanModalState = useSetRecoilState(todayPlanState);
  const dayElemRef = useRef() as React.MutableRefObject<HTMLParagraphElement>;
  const setDayId = useSetRecoilState(dayIdNum);
  const [planState, setPlanState] = useState(false);
  const planData = useRecoilValue(isTodayPlan);

  const onClick = () => {
    setTodayPlanModalState((prev: boolean) => !prev);
    setDayId(Number(dayElemRef.current.id));
  };

  useEffect(() => {
    if (planData.length !== 0) {
      planData.map((date: any) => {
        if (date === Number(dayId) && dayId !== undefined) {
          setPlanState(true);
        } else {
          return;
        }
      });
    } else if (planData.length === 0) {
      setPlanState(false);
    }
  }, [planData, planState]);
  //
  return (
    <>
      <DayElem
        ref={dayElemRef}
        check={check!}
        id={dayId ? `${dayId}` : 'no-Id'}
        isRegistered={planState}
        onClick={onClick}
      >
        <span>{text}</span>
        {planState && (
          <span className="text">
            <i className="fa-solid fa-clipboard-list"></i>
          </span>
        )}
      </DayElem>
    </>
  );
}

export default memo(Day);

//css
export const DayElem = styled.p<IDayElem>`
  position: relative;
  padding: 0.5em;
  width: calc(100% / 7);
  height: ${(props) => (props.check === 'week' ? '35px' : '55px')};
  cursor: ${(props) => (props.check === 'week' ? 'default' : 'pointer')};
  background-color: ${(props) =>
    props.check === 'today' ? props.theme.lightPinkColor : props.theme.mainBoardColor};
  &:hover {
    background-color: ${(props) =>
      props.check === 'week' ? props.theme.mainBoardColor : props.theme.bgColor};
    color: ${(props) => (props.check === 'week' ? props.theme.textColor : props.theme.accentColor)};
  }
  & span {
    display: inline-block;
    width: 100%;
    font-size: ${(props) => (props.check === 'week' ? '14px' : '12px')};
  }
  &:nth-child(7n) {
    color: #5454cf;
  }

  &:nth-child(7n + 1) {
    color: #f48673;
  }

  span.text {
    display: inline-block;
    margin: 0.1em;
    padding: 0.5em;
    text-align: center;
    color: #fcfcfc;
    background-color: ${(props) => props.isRegistered && props.theme.pinkColor};
  }

  @media (max-width: 410px) {
    height: ${(props) => (props.check === 'week' ? '25px' : '55px')};
    padding: 0.3em;
    cursor: ${(props) => (props.check === 'week' ? 'default' : 'pointer')};
    & span {
      display: inline-block;
      width: 100%;
      font-size: ${(props) => (props.check === 'week' ? '12px' : '11px')};
    }
  }
`;
