import React from 'react';
import styled from 'styled-components';

export const DayElem = styled.p<{ check: string }>`
  position: relative;
  font-size: ${(props) => (props.check === 'week' ? '14px' : '12px')};
  padding: 0.5em;
  width: calc(100% / 7);
  height: ${(props) => (props.check === 'week' ? '35px' : '55px')};
  cursor: ${(props) => (props.check === 'week' ? 'default' : 'pointer')};
  background-color: ${(props) =>
    props.check === 'today' ? props.theme.lightPinkColor : props.theme.mainBoardColor};
  &:hover {
    background-color: ${(props) =>
      props.check === 'week' ? props.theme.mainBoardColor : props.theme.bgColor};
    color: ${(props) => props.theme.accentColor};
  }

  &:nth-child(7n) {
    color: #5454cf;
  }

  &:nth-child(7n + 1) {
    color: #f48673;
  }
`;

interface IDayProps {
  check?: string;
  className?: string;
}

const Day = ({ check }: IDayProps) => {
  return <DayElem check={check!}></DayElem>;
};

export default Day;
