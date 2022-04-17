import styled from 'styled-components';
import { MainBoard } from '../common/shareStyle';
import { Link, Outlet, useMatch, useParams } from 'react-router-dom';
import MainPageBoard from '../components/mainPageBoard';

export const MainWrap = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;
const Header = styled.header`
  position: relative;
`;
const Nav = styled(MainBoard)`
  display: flex;
  justify-content: space-between;
  padding: 1em 3em;
  margin: 0 auto 30px;
`;

const TapButton = styled.button<{ isActive?: boolean }>`
  border-radius: 5px;
  background-color: ${(props) => props.theme.liBgColor};
  color: ${(props) => (props.isActive ? props.theme.liTextColor : '')};
  & a {
    display: block;
    padding: 0.5em;
  }
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
  const mainMatch = useMatch('/main');
  const diaryMatch = useMatch('/myDiary');
  const memoMathch = useMatch('/memo');

  return (
    <MainWrap>
      <Header>
        <DiaryName>...haru</DiaryName>
        <Nav>
          <TapButton isActive={mainMatch !== null}>
            <Link to="/main">Main</Link>
          </TapButton>
          <TapButton isActive={diaryMatch !== null}>
            <Link to="/main/myDiary">Diary</Link>
          </TapButton>
          <TapButton isActive={memoMathch !== null}>
            <Link to="/main/memo">Memo</Link>
          </TapButton>
        </Nav>
      </Header>
      <MainContainer>
        {mainMatch?.pathname === '/' && <MainPageBoard />}
        <Outlet />
      </MainContainer>
    </MainWrap>
  );
};

export default Main;
