import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';
import {
  checkFeelingIcon,
  checkMakingTape,
  checkPhotoFRame,
  checkWeatherIcon,
} from '../../common/global_function';
import { CalanderMaskingL, CalanderMaskingR } from '../../common/shareStyle';
import { WeatherIcon } from './diary_card';

const DiaryEditSection = styled.section<{ framePreview?: string }>`
  position: relative;
  padding: 15px;
  border-radius: 2px;
  background: url(${(props) => props.framePreview});
`;

const MaskingTapePreviewL = styled(CalanderMaskingL)``;
const MaskingTapePreviewR = styled(CalanderMaskingR)``;

const DiaryEditFormElem = styled.form`
  padding: 20px;
  background-color: #fcfcfc;
  div {
    margin: 0 0 20px;
  }
  label {
    display: inline-block;
    margin: 0 15px 0 0;
    color: ${(props) => props.theme.accentColor};
  }
  input,
  textarea {
    border: 1px solid ${(props) => props.theme.lightPinkColor};
  }
  select {
    padding: 5px 10px;
    outline: 0 none;
    border: 1px solid ${(props) => props.theme.lightPinkColor};
    font-size: 13px;
    color: ${(props) => props.theme.liTextColor};
    border-radius: 4px;
  }
  select option {
    background: black;
    color: #fff;
    padding: 0;
  }
`;

const DiaryTitle = styled.div`
  input[type='text'] {
    display: inline-block;
    width: 80%;
    max-width: 450px;
    padding: 5px 10px;
    border-bottom: 2px solid ${(props) => props.theme.lightPinkColor};
  }
`;

const DiaryDate = styled.div`
  input[type='date'] {
    font-size: 13px;
    padding: 8px 10px;
    color: ${(props) => props.theme.liTextColor};
    border-radius: 4px;
  }
`;

const DiaryWeather = styled.div`
  position: relative;
`;

const WeatherPreview = styled(WeatherIcon)`
  animation: none;
  right: auto;
  left: 283px;
`;

const DiaryFeeling = styled.div`
  position: relative;
  label {
    margin: 0 24px 0 0;
  }
  select {
    padding: 5px 15px;
  }
`;

const DiaryPhotoFrame = styled.div``;

const FeelingPreview = styled(WeatherPreview)`
  width: 30px;
  height: 30px;
  left: 286px;
`;

const DiaryMaskingTape = styled.div``;

const DiaryTextarea = styled.div`
  textarea {
    width: 100%;
    max-width: 100%;
    height: 300px;
    overflow: scroll-Y;
    resize: none;
    border-radius: 4px;
  }
`;

const DiaryBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DiarySubmitBtn = styled.button``;

//
const DiaryEditForm = () => {
  //
  const defaultDate = new Date().toISOString().slice(0, 10);

  const [selectedWeather, setSelectedWeather] = useState('');
  const [selectedFeeling, setSelectedFeeling] = useState('');
  const [selectedFrame, setSelectedFrame] = useState('');
  const [selectedTape, setSelectedTape] = useState('');
  //
  const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { id },
      target: { value },
    } = event;

    if (id === 'diaryWeather') {
      setSelectedWeather(value);
    } else if (id === 'diaryFeeling') {
      setSelectedFeeling(value);
    } else if (id === 'diaryPhotoFrame') {
      setSelectedFrame(value);
    } else if (id === 'diaryMaskingTape') {
      setSelectedTape(value);
    }
  };

  return (
    <DiaryEditSection framePreview={checkPhotoFRame(selectedFrame)}>
      <MaskingTapePreviewL image={checkMakingTape(selectedTape)} />
      <MaskingTapePreviewR image={checkMakingTape(selectedTape)} />
      <DiaryEditFormElem>
        <DiaryTitle>
          <label htmlFor="diaryTitle">Title</label>
          <input type="text" name="" id="diaryTitle" />
        </DiaryTitle>
        <DiaryDate>
          <label htmlFor="diaryDate">Date</label>
          <input type="date" name="" id="diaryDate" defaultValue={defaultDate} />
        </DiaryDate>
        <DiaryWeather>
          <label htmlFor="diaryWeather">Weather</label>
          <select name="" id="diaryWeather" onChange={onSelect}>
            <option value="default">How was weather today?</option>
            <option value="sunny">sunny</option>
            <option value="cloudy">cloudy</option>
            <option value="hazy">hazy</option>
            <option value="lightning">lightning</option>
            <option value="moonlight">moonlight</option>
            <option value="rainbow">rainbow</option>
            <option value="rainy">rainy</option>
            <option value="snowy">snowy</option>
            <option value="windy">windy</option>
          </select>
          <WeatherPreview weathers={checkWeatherIcon(selectedWeather)} />
        </DiaryWeather>
        <DiaryFeeling>
          <label htmlFor="diaryFeeling">Feeling</label>
          <select name="" id="diaryFeeling" onChange={onSelect}>
            <option value="default">How was your Feeling?</option>
            <option value="anger">anger</option>
            <option value="cry">cry</option>
            <option value="davil">davil</option>
            <option value="excite">excite</option>
            <option value="fun">fun</option>
            <option value="happy">happy</option>
            <option value="heart">heart</option>
            <option value="injured">injured</option>
            <option value="nice">nice</option>
            <option value="normal">normal</option>
            <option value="relax">relax</option>
            <option value="sad">sad</option>
            <option value="sick">sick</option>
            <option value="wink">wink</option>
            <option value="yell">yell</option>
          </select>
          <FeelingPreview feeling={checkFeelingIcon(selectedFeeling)} />
        </DiaryFeeling>
        <DiaryPhotoFrame>
          <label htmlFor="diaryPhotoFrame">Photo Frame</label>
          <select name="" id="diaryPhotoFrame" onChange={onSelect}>
            <option value="default">Choose Frame Pattern</option>
            <option value="theme1">Funky Orange</option>
            <option value="theme2">Modern Pattern</option>
            <option value="theme3">Pink Pop</option>
            <option value="theme4">Sparking Purple</option>
            <option value="theme5">Triangle Yellow</option>
            <option value="theme6">Sparking Mint</option>
          </select>
        </DiaryPhotoFrame>
        <DiaryMaskingTape>
          <label htmlFor="diaryMaskingTape">Masking Tape</label>
          <select name="" id="diaryMaskingTape" onChange={onSelect}>
            <option value="default">Choose Tape Pattern</option>
            <option value="tape1">theme1</option>
            <option value="tape2">theme2</option>
            <option value="tape3">theme3</option>
            <option value="tape4">theme4</option>
            <option value="tape5">theme5</option>
            <option value="tape6">theme6</option>
            <option value="tape7">theme7</option>
            <option value="tape8">theme8</option>
            <option value="tape9">theme9</option>
            <option value="tape10">theme10</option>
            <option value="tape11">theme11</option>
            <option value="tape12">theme12</option>
          </select>
        </DiaryMaskingTape>
        <DiaryTextarea>
          <textarea name="" id="diaryText"></textarea>
        </DiaryTextarea>
      </DiaryEditFormElem>
    </DiaryEditSection>
  );
};

export default DiaryEditForm;
