import styled from 'styled-components';
import { MainBoard } from '../common/shareStyle';
import { Link, Outlet, useLocation, useMatch, useNavigate } from 'react-router-dom';
import { IProps } from '../App';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { loginUserId } from '../common/global_state';
import MainPageCalender from '../components/calender/mainPageBoard';
import TodayPlan from '../components/todayPlan_list/today_plan';

export interface ILocationHistory {
  id: string;
}

function Main({ getFirebaseAuth, diaryRepository }: IProps) {
  const locationHistory = useLocation();
  const userStateHistory = locationHistory?.state as ILocationHistory;
  const navigator = useNavigate();
  const mainMatch = useMatch('/main');
  const diaryMatch = useMatch('/main/myDiary');
  const memoMathch = useMatch('/main/memo');
  const [userId, setUserId] = useRecoilState(loginUserId);

  const handleLogout = () => {
    getFirebaseAuth?.logOut();
  };

  useEffect(() => {
    getFirebaseAuth?.onAuthChange((user) => {
      if (!user) {
        navigator('/');
      } else {
        setUserId(user.uid);
      }
    });
  }, [getFirebaseAuth, userStateHistory, userId]);

  return (
    <MainWrap>
      <Header>
        <DiaryName>...haru</DiaryName>
        <TabButton className="logout" onClick={handleLogout}>
          LogOut
        </TabButton>
        <Nav>
          <TabButton isActive={mainMatch !== null}>
            <Link to="/main">Main</Link>
          </TabButton>
          <TabButton isActive={diaryMatch !== null}>
            <Link to="/main/myDiary">Diary</Link>
          </TabButton>
          <TabButton isActive={memoMathch !== null}>
            <Link to="/main/memo">Memo</Link>
          </TabButton>
        </Nav>
      </Header>
      {mainMatch?.pathname === '/main' && (
        <MainPageContainer>
          <MainPageCalender diaryRepository={diaryRepository} />
          <TodayPlan diaryRepository={diaryRepository} />
        </MainPageContainer>
      )}
      <MainContainer>
        <Outlet />
      </MainContainer>
    </MainWrap>
  );
}

export default Main;

export const MainWrap = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

const TabButton = styled.button<{ isActive?: boolean }>`
  border-radius: 5px;
  background-color: ${(props) => props.theme.liBgColor};
  color: ${(props) => (props.isActive ? '#fff' : props.theme.liTextColor)};
  & a {
    display: block;
    padding: 0.5em;
  }
`;

const Header = styled.header`
  position: relative;
  ${TabButton}.logout {
    position: absolute;
    top: 20px;
    left: 4em;
    padding: 0.8em;
    font-size: 0.8rem;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
  }
`;
const Nav = styled(MainBoard)`
  display: flex;
  justify-content: space-between;
  padding: 1em 3em;
  margin: 0 auto 30px;
`;

const MainContainer = styled.section`
  margin: 0 0 20px;
`;

const MainPageContainer = styled(MainContainer)`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin: 0 60px;
  }
`;

const DiaryName = styled.h1`
  padding: 1em 0;
  font-size: 2em;
  color: ${(props) => props.theme.accentColor};
  text-align: center;
`;
