import styled from 'styled-components';

export const MainBoard = styled.section<{ bgPattern?: string }>`
  position: relative;
  width: 90%;
  margin: 0 auto 70px;
  padding: 2em;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  background-size: cover;
  background-image: url(${(props) => props.bgPattern});
`;

export const CalanderMaskingR = styled.div<{ image: string }>`
  position: absolute;
  right: -40px;
  top: 10px;
  width: 120px;
  height: 30px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url(${(porps) => porps.image});
  transform: rotate(45deg);
`;

export const CalanderMaskingL = styled(CalanderMaskingR)`
  left: -30px;
  bottom: 10px;
  top: auto;
  transform: rotate(-135deg);
`;

export const LogInSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const LogInTitle = styled.h1`
  margin: 0 0 2em;
  font-size: 1.8rem;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
  background-color: ${(props) => props.theme.bgColor};
`;

export const LogInWrap = styled.div`
  width: 75%;
  max-width: 400px;
  padding: 2em;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 4px;
`;

export const LogInForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  & label {
    width: 100%;
  }
  label span {
    display: inline-block;
    width: 13%;
    margin: 0 0 25px;
    text-align: center;
  }
  label input {
    width: 87%;
    margin: 0 0 25px;
  }
  & input[type='email'],
  & input[type='password'],
  & input[type='text'] {
    font-size: 1rem;
    padding: 0.5em;
    border-radius: 4px;
  }
  & input[type='submit'] {
    display: block;
    padding: 1em 1.5em;
    margin: 0 0 25px;
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
