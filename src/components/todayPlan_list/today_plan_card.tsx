import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IProps } from '../../App';
import { IPath } from '../../service/firebase_repository';

interface ITodoayPlanCard extends IProps {
  userId?: string;
  data: {
    id: string;
    publishedDate: number;
    text: string | undefined;
  };
}

function TodayPlanCard({ diaryRepository, userId, data }: ITodoayPlanCard) {
  const [checkState, setCheckState] = useState(false);
  //
  const onComplete = () => {
    setCheckState((prev) => !prev);
  };
  const onDelete = () => {
    diaryRepository?.removeDiary(userId!, IPath.todayPlan, data.id);
  };

  return (
    <TodayElem>
      <Text isActive={checkState}>{data.text}</Text>
      <ButtonBox>
        <Button onClick={onComplete}>
          <i className="fa-solid fa-check-to-slot"></i>
        </Button>
        <Button onClick={onDelete}>
          <i className="fa-solid fa-eraser"></i>
        </Button>
      </ButtonBox>
    </TodayElem>
  );
}

export default TodayPlanCard;

const TodayElem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 1em;
  margin: 0 0 25px;
  &:last-child {
    margin: 0;
  }
`;

const Text = styled.p<{ isActive?: boolean }>`
  width: 70%;

  text-decoration: ${(props) => (props.isActive ? 'line-through' : 'none')};
  color: ${(props) => (props.isActive ? props.theme.lightPinkColor : props.theme.liTextColor)};
`;

const ButtonBox = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 0.5em;
  margin: 0 3px;
  border-radius: 3px;
  border-color: #efefef;
  color: ${(props) => props.theme.lightBorwnColor};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.pinkColor};
  }
`;
