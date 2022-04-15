import styled from 'styled-components';
import { CalanderMaskingL, CalanderMaskingR, MainBoard } from '../common/shareStyle';
import tape1 from '../images/tape1.png';
import tape2 from '../images/tape10.png';
import bg_pattern from '../images/bg_pattern.svg';
import Calender from './calender';

const MainWrap = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 1200px;
  margin: 0 auto;
`;
const Header = styled.header`
  position: relative;
`;
const MainContainer = styled.section`
  margin: 0 0 20px;
`;
const DiaryName = styled.h1`
  padding: 1em 0;
  font-size: 2em;
  color: ${(props) => props.theme.accentColor};
  text-align: center;
`;

const Main = () => {
  return (
    <MainWrap>
      <Header>
        <DiaryName>...haru</DiaryName>
      </Header>
      <MainContainer>
        <MainBoard bgPattern={bg_pattern}>
          <CalanderMaskingR image={tape1} />
          <CalanderMaskingL image={tape2} />
          <Calender />
        </MainBoard>
        <MainBoard></MainBoard>
      </MainContainer>
    </MainWrap>
  );
};

export default Main;
