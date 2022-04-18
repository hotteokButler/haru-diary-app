import styled from 'styled-components';
import {
  LogInSection,
  LogInWrap as RegisterWrap,
  LogInForm as RegisterForm,
} from '../common/shareStyle';

const RegisterSection = styled(LogInSection)`
  z-index: 999;
`;

const RegisterModal = () => {
  return (
    <RegisterSection>
      <RegisterWrap>
        <label htmlFor="id">NEW ID:</label>
        <input type="email" placeholder="Id" id="id" required />
        <label htmlFor="pwd">PW:</label>
        <input type="password" placeholder="PW" id="pwd" minLength={6} required />
        <input type="submit" value="LogIn" />
        <RegisterForm></RegisterForm>
      </RegisterWrap>
    </RegisterSection>
  );
};
export default RegisterModal;

{
  /* <LogInSection>
  <LogInWrap>
    <LogInTitle>Haru Diary</LogInTitle>
    <LogInForm onSubmit={loginSubmit}>
      <label htmlFor="id">ID:</label>
      <input type="email" ref={userEmail} placeholder="Id" id="id" required />
      <label htmlFor="pwd">PW:</label>
      <input type="password" ref={userPW} placeholder="PW" id="pwd" minLength={6} required />
      <input type="submit" value="LogIn" />
    </LogInForm>
    <Button onClick={registerPopup}>등록하기</Button>
    <Button onClick={loginWithGoogle}>Google로 로그인하기</Button>
  </LogInWrap>
</LogInSection>; */
}
