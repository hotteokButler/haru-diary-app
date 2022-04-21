import React, { memo } from 'react';
import styled from 'styled-components';

interface IDayElem {
  check: string;
}

interface IDayProps {
  check?: string;
  text: number | string | undefined;
  className?: string;
}

function Day({ check, text }: IDayProps) {
  return (
    <DayElem check={check!}>
      <span>{text}</span>
      <span>{check === 'today' && '😉'}</span>
    </DayElem>
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
`;
