import React, { HTMLFactory, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IData, passwordRegex } from '../common/global_state';
import {
  LogInSection,
  LogInWrap,
  LogInForm,
  LogInTitle as RegisterTitle,
  Button,
} from '../common/shareStyle';

const RegisterSection = styled(LogInSection)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const RegisterWrap = styled(LogInWrap)`
  width: 85%;
`;

const RegisterForm = styled(LogInForm)`
  label span {
    width: 18%;
    margin: 0 0 4px;
    font-size: 0.9rem;
    line-height: 1.1rem;
    vertical-align: bottom;
    text-align: left;
  }
  label span.desc {
    display: block;
    width: 100%;
    margin: 0 0 25px;
    font-size: 12px;
    text-align: right;
    color: ${(props) => props.theme.lightBorwnColor};
  }
  label input {
    width: 82%;
    margin: 0 0 4px;
  }
`;

interface IRegisterModalProps {
  getFirebaseAuth: any;
  regexCheck: (email: string, pwd: string) => boolean;
  registerModal: () => void;
}

const RegisterModal = ({ getFirebaseAuth, regexCheck, registerModal }: IRegisterModalProps) => {
  //
  const newUserEmail = useRef<HTMLInputElement>(null);
  const newUserPwd = useRef<HTMLInputElement>(null);
  const newUserName = useRef<HTMLInputElement>(null);
  //
  const registerNewUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (regexCheck(newUserEmail?.current?.value!, newUserPwd?.current?.value!)) {
      getFirebaseAuth.createUserWithEmailBase(
        newUserEmail?.current?.value!,
        newUserPwd?.current?.value!,
        newUserName?.current?.value!
      );
    }
  };

  return (
    <RegisterSection>
      <RegisterWrap>
        <RegisterTitle>등록하기</RegisterTitle>
        <RegisterForm onSubmit={registerNewUser}>
          <label htmlFor="newId">
            <span>
              NEW <br />
              ID &#58;
            </span>
            <input type="text" ref={newUserEmail} placeholder="E-mail" id="newId" required />
            <span className="desc">등록할 이메일 주소를 입력해주세요&#46;</span>
          </label>
          <label htmlFor="newPwd">
            <span>
              NEW <br /> PW &#58;
            </span>
            <input
              type="password"
              ref={newUserPwd}
              placeholder="New Password"
              id="newPwd"
              required
            />
            <span className="desc">
              숫자,영문자,특수문자&#40;!@#$%^*+=-&#41; 조합으로 <br /> 8자리 이상 입력해주세요&#46;
            </span>
          </label>
          <label htmlFor="newName">
            <span>NEW NAME &#58;</span>
            <input type="text" ref={newUserName} placeholder="Profile Name" id="newName" required />
            <span className="desc">설정하실 프로필 이름을 입력해주세요&#46;</span>
          </label>
          <input type="submit" value="나만의 일기 시작하기" />
        </RegisterForm>
        <Button onClick={() => registerModal()}>닫기</Button>
      </RegisterWrap>
    </RegisterSection>
  );
};
export default RegisterModal;
