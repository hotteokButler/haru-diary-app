import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { emailRegex, passwordRegex } from '../common/global_state';
import { LogInSection, LogInForm, LogInWrap, LogInTitle } from '../common/shareStyle';

const Button = styled.button`
  display: inline-block;
  width: 100%;
  margin: 0 0 20px;
  padding: 1em 1.5em;
  background-color: ${(props) => props.theme.lightPinkColor};
  color: ${(props) => props.theme.accentColor};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

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

  const loginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getFirebaseAuth.loginWithUserEmail(userEmail?.current?.value, userPW?.current?.value, goToMain);
    event.currentTarget.reset();
  };

  const loginWithGoogle = () => {
    getFirebaseAuth.loginWihtGoogle().then(() => {
      goToMain();
    });
  };

  const registerPopup = () => {
    const newEmail = prompt('newEmail', '');
    if (!mailRegex.test(newEmail!)) {
      alert('이메일 형식에 맞춰 기입해주세요');
      return;
    }
    const newPassword = prompt('newPassword', '');
    if (!pwdRegex.test(newPassword!)) {
      alert('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!');
      return;
    }
  };
  return (
    <>
      <LogInSection>
        <LogInWrap>
          <LogInTitle>Haru Diary</LogInTitle>
          <LogInForm onSubmit={loginSubmit}>
            <label htmlFor="id">
              <span>ID:</span>
              <input type="email" ref={userEmail} placeholder="Id" id="id" required />
            </label>
            <label htmlFor="pwd">
              <span>PW:</span>
              <input type="password" ref={userPW} placeholder="PW" id="pwd" required />
            </label>
            <input type="submit" value="LogIn" />
          </LogInForm>
          <Button onClick={registerPopup}>등록하기</Button>
          <Button onClick={loginWithGoogle}>Google로 로그인하기</Button>
        </LogInWrap>
      </LogInSection>
    </>
  );
};

export default LogIn;
