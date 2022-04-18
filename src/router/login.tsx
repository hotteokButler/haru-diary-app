import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { emailRegex, passwordRegex } from '../common/global_state';
import { LogInSection, LogInForm, LogInWrap, LogInTitle, Button } from '../common/shareStyle';
import RegisterModal from '../components/registerModal';

const LogIn = ({ getFirebaseAuth }: any) => {
  const userEmail = useRef<HTMLInputElement>(null);
  const userPW = useRef<HTMLInputElement>(null);
  const pwdRegex = useRecoilValue(passwordRegex);
  const mailRegex = useRecoilValue(emailRegex);
  const [registerModalView, setRegisterModalView] = useState(false);
  const navigator = useNavigate();

  const goToMain = () => {
    navigator('/main');
  };

  const regexCheck = (email: string, pwd: string) => {
    if (!mailRegex.test(email)) {
      alert('이메일 양식 에러 :이메일 형식에 맞춰 기입해주세요!');
      return false;
    }
    if (!pwdRegex.test(pwd)) {
      alert('비밀번호 양식 에러 :숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
      return false;
    }
    return true;
  };

  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (regexCheck(userEmail?.current?.value!, userPW?.current?.value!)) {
      getFirebaseAuth.loginWithUserEmail(
        userEmail?.current?.value,
        userPW?.current?.value,
        goToMain
      );
      event.currentTarget.reset();
    }
  };

  const loginWithGoogle = () => {
    getFirebaseAuth.loginWithGoogle().then(() => {
      goToMain();
    });
  };

  const registerModal = () => {
    setRegisterModalView((prev) => !prev);
  };
  return (
    <>
      <LogInSection>
        <LogInWrap>
          <LogInTitle>Haru Diary</LogInTitle>
          <LogInForm onSubmit={loginSubmit}>
            <label htmlFor="id">
              <span>ID&#58;</span>
              <input type="text" ref={userEmail} placeholder="Id" id="id" required />
            </label>
            <label htmlFor="pwd">
              <span>PW&#58;</span>
              <input type="password" ref={userPW} placeholder="PW" id="pwd" required />
            </label>
            <input type="submit" value="LogIn" />
          </LogInForm>
          <Button onClick={registerModal}>등록하기</Button>
          <Button onClick={loginWithGoogle}>Google로 로그인하기</Button>
        </LogInWrap>
      </LogInSection>
      {registerModalView && (
        <RegisterModal
          getFirebaseAuth={getFirebaseAuth}
          regexCheck={regexCheck}
          registerModal={registerModal}
        />
      )}
    </>
  );
};

export default LogIn;
