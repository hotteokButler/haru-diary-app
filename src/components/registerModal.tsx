import styled from 'styled-components';
import { LogInSection, LogInWrap, LogInForm as RegisterForm } from '../common/shareStyle';

const RegisterSection = styled(LogInSection)`
  z-index: 999;
`;

const RegisterWrap = styled(LogInWrap)`
  width: 85%;
`;

const RegisterModal = () => {
  return (
    <RegisterSection>
      <RegisterWrap>
        <RegisterForm>
          <label htmlFor="id">
            <span>NEW ID:</span>
            <input type="email" placeholder="Id" id="id" required />
          </label>
          <label htmlFor="pwd">
            <span>NEW PW:</span>
            <input type="password" placeholder="PW" id="pwd" required />
          </label>
          <input type="submit" value="나만의 일기 시작하기" />
        </RegisterForm>
      </RegisterWrap>
    </RegisterSection>
  );
};
export default RegisterModal;
