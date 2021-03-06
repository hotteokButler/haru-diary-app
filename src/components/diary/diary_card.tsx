import { memo, useCallback, useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled, { keyframes } from 'styled-components';
import {
  checkFeelingIcon,
  checkPhotoFrame,
  checkWeatherIcon,
  checkMakingTape,
} from '../../common/global_function';
import { IData, loginUserId } from '../../common/global_state';
import { CalanderMaskingL } from '../../common/shareStyle';
import defaultFrame from '../../images/theme0.png';
import { IPath } from '../../service/firebase_repository';

//interface
interface IDiaryCard extends IData {
  firebaseDB?: any;
  diaryRepository?: {
    syncDiaryData(userId: string, path: IPath, onUpdate: (data: any) => any): any;
    saveDiary(userId: string, path: IPath, diaryData: IData): void;
    removeDiary(userId: string, path: IPath, cardId: string): void;
    readDiary(uid: string, path: IPath): void;
  };
}

//component
function DiaryCard({
  id,
  publishedDate,
  title,
  tapeTheme,
  photoFrameTheme,
  photoURL,
  weather,
  feeling,
  text,
  diaryRepository,
}: IDiaryCard) {
  //
  const [parsedDate, setParsedDate] = useState<string | number>();
  const userID = useRecoilValue(loginUserId);
  const [cardState, setCardState] = useState(false);
  const onCardClick = () => {
    setCardState((prev) => !prev);
  };
  const parseDate = useCallback(
    (getDate: number) => {
      const date = new Date(getDate);
      const convertedDay = date.toString().split(' ')[0];
      const convertedDate = date.toISOString().slice(0, 10).split('-').join('.');
      const formatedDate = `[${convertedDate}]  ${convertedDay}`;
      setParsedDate(formatedDate);
    },
    [publishedDate]
  );

  useEffect(() => {
    parseDate(publishedDate!);
  }, [publishedDate]);

  const deleteDiary = () => {
    diaryRepository?.removeDiary(userID, IPath.diary, id);
  };
  return (
    <CardLi
      cradFrame={checkPhotoFrame(photoFrameTheme)}
      onClick={onCardClick}
      isClicked={cardState}
    >
      <CardFrame>
        <CardMasking image={checkMakingTape(tapeTheme)} />
        <CardDate>
          {parsedDate}
          <WeatherIcon weathers={checkWeatherIcon(weather)} />
          <FeelingIcon feeling={checkFeelingIcon(feeling)} />
        </CardDate>
        <CardImg>
          <img src={photoURL} alt="" />
        </CardImg>
        <CardDescList>
          <CardDescTitle>{title}</CardDescTitle>
          <CardDescText isClicked={cardState}>{text}</CardDescText>
        </CardDescList>
      </CardFrame>
      <DeleteButton onClick={deleteDiary}>??????</DeleteButton>
      <FixButton>??????</FixButton>
    </CardLi>
  );
}

export default memo(DiaryCard);

//css
//animation

const emojiMotion = keyframes`
  from {
  transform: translate(0, -50%) rotate(-10deg);
  }
  to {
  transform: translate(0, -50%) rotate(10deg);
  }
`;

//style
const CardLi = styled.li<{ cradFrame?: string; isClicked?: boolean }>`
  position: ${(props) => (props.isClicked ? 'absolute' : 'relative')};
  top: ${(props) => (props.isClicked ? '50%' : 'auto')};
  left: ${(props) => (props.isClicked ? '50%' : 'auto')};
  transform: ${(props) => (props.isClicked ? 'translate(-50%,-50%)' : 'translate(0,0)')};
  padding: 10px 10px 40px;
  width: 90%;
  max-width: ${(props) => (props.isClicked ? '650px' : '450px')};
  margin: 0 auto 50px;
  z-index: ${(props) => (props.isClicked ? '99' : '1')};
  background: ${(props) => (props.cradFrame ? `url(${props.cradFrame})` : `url(${defaultFrame})`)};
  box-shadow: ${(props) =>
    props.isClicked ? ' 2px 3px 25px rgba(0, 0, 0, 0.4)' : ' 1px 2px 8px rgba(0, 0, 0, 0.08)'};
  border-radius: 2px;
  cursor: pointer;
  a {
    display: block;
  }
  &:hover {
    button {
      opacity: 1;
      visibility: visible;
    }
  }
  transition: 0.4s;

  @media (min-width: 768px) {
    width: ${(props) => (props.isClicked ? '50%' : '40%')};
  }
  @media (min-width: 1200px) {
    width: ${(props) => (props.isClicked ? '45%' : '30%')};
  }
`;

const CardFrame = styled.div`
  padding: 50px 30px 10px;
  height: 100%;
  width: 100%;
  border: 1px solid #f4f4f4;
  background-color: #fcfcfc;
`;

const CardMasking = styled(CalanderMaskingL)`
  width: 110px;
  left: 50%;
  top: -35px;
  transform: rotate(-195deg) translateX(50%);
`;

const CardImg = styled.figure`
  margin: 0 0 20px;
  max-height: 400px;
  overflow: hidden;
  background-color: #fcfcfcc6;
  img {
    display: inline-block;
    vertical-align: bottom;
    object-fit: contain;
    max-height: 400px;
    margin: 0 auto;
  }
`;

const CardDate = styled.div`
  position: relative;
  display: inline-block;
  padding: 0.5em;
  margin: 0 0 10px;
  font-size: 12px;
  color: #ccc;
  border-radius: 4px;
`;

export const WeatherIcon = styled.p<{ weathers?: string; feeling?: string }>`
  position: absolute;
  top: 50%;
  right: -40px;
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-image: url(${(props) => props.weathers || props.feeling});
  background-position: center center;
  transform: translate(0, -50%) rotate(-10deg);
  animation: ${emojiMotion} 1s ease-in-out infinite alternate-reverse;
`;

export const FeelingIcon = styled(WeatherIcon)`
  width: 30px;
  height: 30px;
  right: -75px;
  animation: ${emojiMotion} 1.5s ease-in-out infinite alternate;
`;

const CardDescList = styled.dl``;

const CardDescTitle = styled.dt`
  position: relative;
  margin: 0 0 10px;
  display: inline-block;
  color: #000;
  ::before {
    position: absolute;
    display: block;
    content: '';
    top: 50%;
    left: -5%;
    width: 110%;
    height: 15px;
    transform: translate(0, -50%) skew(-20deg);
    background-color: #ffe6b155;
  }
`;

const CardDescText = styled.dd<{ isClicked: boolean }>`
  display: -webkit-box;
  margin: 0 0 10px;
  width: 100%;
  overflow: ${(props) => (props.isClicked ? 'visible' : 'hidden')};
  text-overflow: ${(props) => (props.isClicked ? 'unset' : 'ellipsis')};
  -webkit-line-clamp: ${(props) => (props.isClicked ? 'none' : '3')};
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  word-break: keep-all;
  color: ${(props) => props.theme.textColor};
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 8px 12px;
  background-color: ${(props) => props.theme.liBgColor};
  border-radius: 4px;
  font-size: 12px;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: ${(props) => props.theme.pinkBeigeColor};
  }
`;

const FixButton = styled(DeleteButton)`
  top: 45px;

  @media (max-width: 410px) {
    top: 10px;
    right: 65px;
  }
`;
