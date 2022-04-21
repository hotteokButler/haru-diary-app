import React, { memo, useRef } from 'react';

const PhotoFrameSelector = ({ setPhotoFrame }: any) => {
  const photoFrameRef = useRef() as React.MutableRefObject<HTMLSelectElement>;

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setPhotoFrame(value);
  };

  return (
    <div>
      <label htmlFor="diaryPhotoFrame">Photo Frame</label>
      <select name="" id="diaryPhotoFrame" onChange={onChange} ref={photoFrameRef}>
        <option value="default">Choose Frame Pattern</option>
        <option value="theme1">Funky Orange</option>
        <option value="theme2">Modern Pattern</option>
        <option value="theme3">Pink Pop</option>
        <option value="theme4">Sparking Purple</option>
        <option value="theme5">Triangle Yellow</option>
        <option value="theme6">Sparking Mint</option>
      </select>
    </div>
  );
};

export default memo(PhotoFrameSelector);
