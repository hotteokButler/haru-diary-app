import React, { memo, useRef, useState } from 'react';
import styled from 'styled-components';
import { checkWeatherIcon } from '../../../common/global_function';
import { WeatherIcon } from '../diary_card';

function WeatherSelector({ setWeather }: any) {
  const weatherRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
  const [selectedWeather, setSelectedWeather] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setSelectedWeather(value);
    setWeather(value);
  };

  return (
    <DiaryWeather>
      <label htmlFor="diaryWeather">Weather</label>
      <select name="" id="diaryWeather" onChange={onChange} ref={weatherRef}>
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
  );
}

export default memo(WeatherSelector);

//css

const DiaryWeather = styled.div`
  position: relative;
`;

export const WeatherPreview = styled(WeatherIcon)`
  animation: none;
  right: auto;
  left: 283px;
`;
