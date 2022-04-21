import { useRef, useState, memo, useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { IProps } from '../../App';
import { checkMakingTape, checkPhotoFrame } from '../../common/global_function';
import { addBtnState, listBtnState, loginUserId } from '../../common/global_state';
import { CalanderMaskingL, CalanderMaskingR, LoadingSpinner } from '../../common/shareStyle';
import ImageUploader from '../../service/image_uploader';
import FeelingSelector from './edit_components/feeling_select';
import MaskingTapeSelector from './edit_components/makingTape_selector';
import PhotoFrameSelector from './edit_components/photoFrame_selet';
import WeatherSelector from './edit_components/weather_select';
//
//

const imageUpload = new ImageUploader();

//
function DiaryEditForm({ diaryRepository }: IProps) {
  //ref
  const submitBtnRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const uploadImgBtnRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const titleRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const keywordRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const dateRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const textareaRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  //state
  const [weather, setWeather] = useState('');
  const [feeling, setFeeling] = useState('');
  const [photoFrame, setPhotoFrame] = useState('');
  const [maskingTape, setMaskingTape] = useState('');
  const [getFileURL, setFileURL] = useState('');
  const [getFileName, setFileName] = useState('');
  const setAddBtnState = useSetRecoilState(addBtnState);
  const setListBtnState = useSetRecoilState(listBtnState);
  const [loading, setLoading] = useState(false);
  const defaultDate = new Date().toISOString().slice(0, 10);
  const userID = useRecoilValue(loginUserId);

  const onFileChange = useCallback(
    async (event: any) => {
      setLoading(true);
      const file = event.currentTarget.files[0];
      const uploadFile = await imageUpload.upload(file);
      setFileURL(uploadFile.url);
      setFileName(uploadFile.original_filename);
      setLoading(false);
    },
    [getFileURL, getFileName, userID]
  );

  const onSubmitDiary = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      let newID = uuidv4();
      const newCard = {
        id: newID,
        publishedDate: dateRef.current.valueAsNumber,
        title: titleRef.current.value || 'notitle',
        keyword: keywordRef.current.value || 'unset',
        tapeTheme: maskingTape || '',
        photoFrameTheme: photoFrame || '',
        photoURL: getFileURL || 'unset',
        weather: weather || '',
        feeling: feeling || '',
        text: textareaRef.current.value || '',
        freeMemo: 'unset',
      };

      diaryRepository?.saveDiary(userID, newCard);
      event.currentTarget.reset();
      setAddBtnState((prev) => !prev);
      setListBtnState((prev) => !prev);
    },
    [
      diaryRepository,
      weather,
      feeling,
      photoFrame,
      maskingTape,
      getFileURL,
      getFileName,
      loading,
      userID,
    ]
  );

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
    <DiaryEditSection framePreview={checkPhotoFrame(photoFrame)}>
      <MaskingTapePreviewL image={checkMakingTape(maskingTape)} />
      <MaskingTapePreviewR image={checkMakingTape(maskingTape)} />
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
        <WeatherSelector setWeather={setWeather} />
        <FeelingSelector setFeeling={setFeeling} />
        <PhotoFrameSelector setPhotoFrame={setPhotoFrame} />
        <MaskingTapeSelector setMaskingTape={setMaskingTape} />
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
            placeholder="Write Today's keyword!"
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
}

export default memo(DiaryEditForm);

//css

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
