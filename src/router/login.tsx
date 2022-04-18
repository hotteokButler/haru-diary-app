import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { emailRegex, passwordRegex } from '../common/global_state';

const LogInSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const LogInTitle = styled.h1`
  margin: 0 0 2em;
  font-size: 1.8rem;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
  background-color: ${(props) => props.theme.bgColor};
`;

const LogInWrap = styled.div`
  width: 75%;
  max-width: 400px;
  padding: 2em;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 4px;
`;

const LogInForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & label {
    width: 12%;
    margin: 0 0 25px;
  }
  & input {
    width: 88%;
    margin: 0 0 25px;
  }
  & input[type='email'],
  & input[type='password'] {
    font-size: 1rem;
    padding: 0.5em;
    border-radius: 4px;
  }
  & input[type='submit'] {
    display: block;
    padding: 1em 1.5em;
    width: 100%;
    display: block;
    cursor: pointer;
    background-color: ${(props) => props.theme.lightBorwnColor};
    border-radius: 4px;
    color: #fff;
    &:hover {
      color: ${(props) => props.theme.lightPinkColor};
    }
  }
`;

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

    console.log(newEmail, newPassword);
  };
  return (
    <>
      <LogInSection>
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
      </LogInSection>
    </>
  );
};

export default LogIn;
