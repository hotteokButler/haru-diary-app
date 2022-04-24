import React, { memo, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { dayIdNum, todayPlanState } from '../../common/global_state';

interface IDayElem {
  check: string;
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

  const onClick = () => {
    setTodayPlanModalState((prev: boolean) => !prev);
    setDayId(Number(dayElemRef.current.id));
  };
  //
  return (
    <>
      <DayElem ref={dayElemRef} check={check!} id={dayId ? `${dayId}` : 'no-Id'} onClick={onClick}>
        <span>{text}</span>
        <span>{check === 'today' && '😉'}</span>
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

  @media (max-width: 410px) {
    height: ${(props) => (props.check === 'week' ? '25px' : '55px')};
    padding: 0.3em 0.5em;
    cursor: ${(props) => (props.check === 'week' ? 'default' : 'pointer')};
    & span {
      display: inline-block;
      width: 100%;
      font-size: ${(props) => (props.check === 'week' ? '12px' : '11px')};
    }
  }
`;
