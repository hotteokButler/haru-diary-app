import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { IProps } from '../../App';
import {
  checkFeelingIcon,
  checkMakingTape,
  checkPhotoFrame,
  checkWeatherIcon,
} from '../../common/global_function';
import { addBtnState, listBtnState, loginUserId } from '../../common/global_state';
import { CalanderMaskingL, CalanderMaskingR, LoadingSpinner } from '../../common/shareStyle';
import ImageUploader from '../../service/image_uploader';
import { WeatherIcon } from './diary_card';

const DiaryEditSection = styled.section<{ framePreview?: string }>`
  position: relative;
  padding: 15px;
  border-radius: 2px;
  background: url(${(props) => props.framePreview});
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.05);
`;

const MaskingTapePreviewL = styled(CalanderMaskingL)``;
const MaskingTapePreviewR = styled(CalanderMaskingR)``;

const DiaryEditFormElem = styled.form`
  padding: 20px;
  background-color: #fcfcfc;
  input[type='submit'],
  input[type='file'] {
    display: none;
  }
  div:not(:nth-child(8)) {
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
    border-radius: 4px;
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
    padding: 10px;
    max-width: 100%;
    height: 300px;
    overflow: scroll-Y;
    resize: none;
    border-radius: 4px;
    line-height: 1.4em;
  }
`;

const DiaryKeyWord = styled(DiaryTitle)`
  input[type='text'] {
    width: 54%;
  }
  input[type='text']::placeholder {
    font-size: 12px;
  }
`;

const DiaryBtns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 30px;
  background-color: #fcfcfc;
`;

const DiarySubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  padding: 10px;
  background-color: ${(props) => props.theme.lightPinkColor};
  color: ${(props) => props.theme.accentColor};
  cursor: pointer;
  border-radius: 4px;
  font-size: 18px;
  span:first-child {
    display: inline-block;
    width: calc(100% - 30px);
    font-size: 12px;
  }
  &:hover {
    color: #fcfcfc;
    background-color: ${(props) => props.theme.liBgColor};
  }
`;

//

const imageUpload = new ImageUploader();

//
const DiaryEditForm = ({ diaryRepository }: IProps) => {
  //ref
  const submitBtnRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const uploadImgBtnRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const keywordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dateRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const MaskingTapeRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
  const weatherRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
  const feelingRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
  const photoFrameRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
  const textareaRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  //state
  const [selectedWeather, setSelectedWeather] = useState('');
  const [selectedFeeling, setSelectedFeeling] = useState('');
  const [selectedFrame, setSelectedFrame] = useState('');
  const [selectedTape, setSelectedTape] = useState('');
  const [getFileURL, setFileURL] = useState('');
  const [getFileName, setFileName] = useState('');
  const setAddBtnState = useSetRecoilState(addBtnState);
  const setListBtnState = useSetRecoilState(listBtnState);
  const [loading, setLoading] = useState(false);
  const defaultDate = new Date().toISOString().slice(0, 10);
  const userID = useRecoilValue(loginUserId);

  //function
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

  const onFileChange = async (event: any) => {
    setLoading(true);
    const file = event.currentTarget.files[0];
    const uploadFile = await imageUpload.upload(file);
    setFileURL(uploadFile.url);
    setFileName(uploadFile.original_filename);
    setLoading(false);
  };

  const onSubmitDiary = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let newID = uuidv4();

    const newCard = {
      id: newID,
      publishedDate: dateRef.current.valueAsNumber,
      title: titleRef.current.value || 'notitle',
      keyword: keywordRef.current.value || 'unset',
      tapeTheme: MaskingTapeRef.current.value || '',
      photoFrameTheme: photoFrameRef.current.value || '',
      photoURL: getFileURL || 'unset',
      weather: weatherRef.current.value || '',
      feeling: feelingRef.current.value || '',
      text: textareaRef.current.value || '',
      freeMemo: 'unset',
    };

    diaryRepository?.saveDiary(userID, newCard);
    event.currentTarget.reset();
    setAddBtnState((prev) => !prev);
    setListBtnState((prev) => !prev);
  };

  const onClickSubmitButtons = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const {
      currentTarget: { id },
    } = event;
    if (id == 'submitNewDiary') {
      submitBtnRef.current.click();
    } else if (id === 'submitImgFile') {
      uploadImgBtnRef.current.click();
    }
  };

  //render
  return (
    <DiaryEditSection framePreview={checkPhotoFrame(selectedFrame)}>
      <MaskingTapePreviewL image={checkMakingTape(selectedTape)} />
      <MaskingTapePreviewR image={checkMakingTape(selectedTape)} />
      <DiaryEditFormElem onSubmit={onSubmitDiary}>
        <DiaryTitle>
          <label htmlFor="diaryTitle">Title</label>
          <input
            type="text"
            name=""
            id="diaryTitle"
            ref={titleRef}
            placeholder="Diary title here 😉"
          />
        </DiaryTitle>
        <DiaryDate>
          <label htmlFor="diaryDate">Date</label>
          <input type="date" name="" id="diaryDate" defaultValue={defaultDate} ref={dateRef} />
        </DiaryDate>
        <DiaryWeather>
          <label htmlFor="diaryWeather">Weather</label>
          <select name="" id="diaryWeather" onChange={onSelect} ref={weatherRef}>
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
          <select name="" id="diaryFeeling" onChange={onSelect} ref={feelingRef}>
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
          <select name="" id="diaryPhotoFrame" onChange={onSelect} ref={photoFrameRef}>
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
          <select name="" id="diaryMaskingTape" onChange={onSelect} ref={MaskingTapeRef}>
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
          <textarea
            name=""
            id="diaryText"
            placeholder="Write your diary here 😎"
            ref={textareaRef}
          ></textarea>
        </DiaryTextarea>
        <input type="submit" value="submitBtn" ref={submitBtnRef} />
        <input
          type="file"
          name="file"
          accept="image/*"
          onChange={onFileChange}
          ref={uploadImgBtnRef}
        />
        <DiaryKeyWord>
          <label htmlFor="diaryKeyword">Today's Keyword</label>
          <input
            type="text"
            name=""
            id="diaryKeyword"
            ref={keywordRef}
            placeholder="Write Today's input 😏"
          />
        </DiaryKeyWord>
      </DiaryEditFormElem>
      <DiaryBtns>
        <DiarySubmitBtn onClick={onClickSubmitButtons} id="submitImgFile">
          {loading ? (
            <>
              <span>uploading...</span>
              <LoadingSpinner />
            </>
          ) : (
            getFileName || '사진 등록하기'
          )}
        </DiarySubmitBtn>
        <DiarySubmitBtn onClick={onClickSubmitButtons} id="submitNewDiary">
          일기 생성하기
        </DiarySubmitBtn>
      </DiaryBtns>
    </DiaryEditSection>
  );
};

export default DiaryEditForm;
