import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IData } from '../../common/global_state';
import { CalanderMaskingL } from '../../common/shareStyle';
import defaultFrame from '../../images/theme0.png';

const CardLi = styled.li<{ cradFrame?: string }>`
  position: relative;
  padding: 10px;
  width: 90%;
  max-width: 450px;
  margin: 0 auto 50px;
  background: ${(props) => (props.cradFrame ? `url(${props.cradFrame})` : `url(${defaultFrame})`)};
  box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  cursor: pointer;
  a {
    display: block;
  }
`;

const CardFrame = styled.div`
  padding: 50px 30px 10px;
  border: 1px solid #efefef;
`;

const CardMasking = styled(CalanderMaskingL)`
  width: 110px;
  left: 50%;
  top: -20px;
  transform: rotate(-190deg) translateX(50%);
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

const CardDate = styled.p`
  display: inline-block;
  padding: 0.5em;
  margin: 0 0 10px;
  font-size: 12px;
  color: #ccc;
  border-radius: 4px;
`;

const CardDescList = styled.dl``;

const CardDescTitle = styled.dt`
  position: relative;
  margin: 0 0 10px;
  display: inline-block;
  z-index: 1;
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

const CardDescText = styled.dd`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  color: ${(props) => props.theme.textColor};
`;

const DiaryCard = ({
  id,
  publishedDate,
  title,
  keyword,
  tapeTheme,
  photoFrameTheme,
  photoURL,
  wheather,
  feeling,
  text,
  freeMemo,
}: IData) => {
  const [parsedDate, setParsedDate] = useState<string | number>();

  const parseDate = (getDate: number) => {
    const date = new Date(getDate);
    const dateArr = date.toString().split(' ').slice(0, 4);
    const formatedDate = `[${dateArr[3]}.${date.getMonth() === 11 ? 12 : date.getMonth() + 1}.${
      dateArr[2]
    }]  ${dateArr[0]}`;
    setParsedDate(formatedDate);
  };

  useEffect(() => {
    parseDate(publishedDate);
  }, [publishedDate]);

  return (
    <CardLi>
      <CardFrame>
        <CardMasking />
        <CardDate>{parsedDate}</CardDate>
        <CardImg>
          <img src={photoURL} alt="" />
        </CardImg>
        <CardDescList>
          <CardDescTitle>{title}</CardDescTitle>
          <CardDescText>{text}</CardDescText>
        </CardDescList>
      </CardFrame>
    </CardLi>
  );
};

export default DiaryCard;
