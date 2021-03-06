import React, { memo, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { IProps } from '../../App';
import { dayIdNum, loginUserId, todayPlanState } from '../../common/global_state';
import { IPath } from '../../service/firebase_repository';

function SetTodayPlan({ diaryRepository }: IProps) {
  const textInputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const submitButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const setTodayPlanModalState = useSetRecoilState(todayPlanState);
  const userId = useRecoilValue(loginUserId);
  const dayId = useRecoilValue(dayIdNum);

  const onClickCloseButton = () => {
    setTodayPlanModalState((prev) => !prev);
  };
  const onClickSubmitRef = () => {
    submitButtonRef.current.click();
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newId = uuidv4();
    const newPlan = {
      id: newId,
      publishedDate: dayId || Date.now(),
      text: textInputRef.current.value || '',
    };
    diaryRepository?.saveDiary(userId, IPath.todayPlan, newPlan);
  };

  return (
    <TodayPlanModalSection>
      <TodayPlanModal>
        <Title>오늘의 할일</Title>
        <TodayPlanForm onSubmit={onSubmit}>
          <div className="todayPlan">
            <label htmlFor="todayPlan">입력해주세요</label>
            <input
              type="text"
              id="todayPlan"
              placeholder="입력해주세요😎"
              autoFocus
              ref={textInputRef}
            />
          </div>
          <button type="submit" ref={submitButtonRef}>
            입력하기
          </button>
        </TodayPlanForm>
        <Buttons>
          <button className="submitPlan" onClick={onClickSubmitRef}>
            입력하기
          </button>
          <button className="cloaseButton" onClick={onClickCloseButton}>
            닫기
          </button>
        </Buttons>
      </TodayPlanModal>
    </TodayPlanModalSection>
  );
}

export default memo(SetTodayPlan);

//css

const TodayPlanModalSection = styled.section`
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  transform: translateY(-50%);
`;

const TodayPlanModal = styled.div`
  padding: 2em 3em;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 214, 214, 0.8);
  border-radius: 10px;
`;

const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 1.2em;
  color: ${(props) => props.theme.accentColor};
`;

const PlanPreview = styled.ol`
  margin: 0 0 20px;
  padding: 0 0 0 20px;
  li {
    margin: 0 0 10px;
    list-style-type: decimal;
  }
  li.defaultPreview {
    list-style: none;
  }
`;

const TodayPlanForm = styled.form`
  padding: 10px;
  margin: 0 0 20px;
  background-color: #fcfcfc;
  border-radius: 4px;
  label {
    display: none;
  }
  input[type='text'] {
    width: 100%;
    padding: 0.5em;
    background-color: inherit;
  }
  button[type='submit'] {
    display: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    display: inline-block;
    width: 45%;
    padding: 10px 15px;
    border-radius: 4px;
    background-color: #f3f3f3;
    cursor: pointer;
    transition: 0.4s transform;
    &:hover {
      transform: scale(1.02);
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
      color: ${(props) => props.theme.pinkBeigeColor};
    }
  }
`;
