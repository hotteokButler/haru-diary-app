import { memo, useRef, useState } from 'react';
import styled from 'styled-components';
import { checkFeelingIcon } from '../../../common/global_function';
import { WeatherPreview } from './weather_select';

function FeelingSelector({ setFeeling }: any) {
  const feelingRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
  const [selectedFeeling, setSelectedFeeling] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setSelectedFeeling(value);
    setFeeling(value);
  };

  return (
    <DiaryFeeling>
      <label htmlFor="diaryFeeling">Feeling</label>
      <select name="" id="diaryFeeling" onChange={onChange} ref={feelingRef}>
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
  );
}

export default memo(FeelingSelector);

//css
//

const DiaryFeeling = styled.div`
  position: relative;
  label {
    margin: 0 24px 0 0;
  }
  select {
    padding: 5px 15px;
  }
`;

const FeelingPreview = styled(WeatherPreview)`
  width: 30px;
  height: 30px;
  left: 286px;
`;
