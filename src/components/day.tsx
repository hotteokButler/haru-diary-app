import React from 'react';
import styled from 'styled-components';

export const DayElem = styled.p`
  font-size: 12px;
  padding: 0.5em;
  width: calc(100% / 7);
  height: 55px;
  cursor: pointer;
`;

const Day = () => {
  return <DayElem></DayElem>;
};

export default Day;
