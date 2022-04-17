import { CalanderMaskingL, CalanderMaskingR, MainBoard } from '../common/shareStyle';
import tape1 from '../images/tape1.png';
import tape2 from '../images/tape10.png';
import bg_pattern from '../images/bg_pattern.svg';
import Calender from './calender';

const MainPageCalender = () => {
  return (
    <MainBoard bgPattern={bg_pattern}>
      <CalanderMaskingR image={tape1} />
      <CalanderMaskingL image={tape2} />
      <Calender />
    </MainBoard>
  );
};

export default MainPageCalender;
