import styled from 'styled-components';

export const MainBoard = styled.section<{ bgPattern?: string }>`
  position: relative;
  width: 90%;
  margin: 0 auto 70px;
  padding: 2em;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  background-size: cover;
  background-image: url(${(props) => props.bgPattern});
`;

export const CalanderMaskingR = styled.div<{ image: string }>`
  position: absolute;
  right: -40px;
  top: 0px;
  width: 120px;
  height: 30px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url(${(porps) => porps.image});
  transform: rotate(45deg);
`;

export const CalanderMaskingL = styled(CalanderMaskingR)`
  left: -30px;
  bottom: 0px;
  top: auto;
  transform: rotate(-135deg);
`;
