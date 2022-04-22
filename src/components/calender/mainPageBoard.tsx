import { CalanderMaskingL, CalanderMaskingR, MainBoard } from '../../common/shareStyle';
import tape1 from '../../images/tape1.png';
import tape2 from '../../images/tape10.png';
import bg_pattern from '../../images/bg_pattern.svg';
import Calender from './calender';
import styled from 'styled-components';
import { IProps } from '../../App';

function MainPageCalender({ diaryRepository }: IProps) {
  return (
    <CalenderMainBoard bgPattern={bg_pattern}>
      <CalanderMaskingR image={tape1} />
      <CalanderMaskingL image={tape2} />
      <Calender diaryRepository={diaryRepository} />
    </CalenderMainBoard>
  );
}

export default MainPageCalender;

const CalenderMainBoard = styled(MainBoard)`
  @media (min-width: 768px) {
    width: 45%;
  }
`;
