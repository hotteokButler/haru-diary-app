import { memo, useRef } from 'react';

function MaskingTapeSelector({ setMaskingTape }: any) {
  const MaskingTapeRef = useRef() as React.MutableRefObject<HTMLSelectElement>;
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      target: { value },
    } = event;
    setMaskingTape(value);
  };
  return (
    <div>
      <label htmlFor="diaryMaskingTape">Masking Tape</label>
      <select name="" id="diaryMaskingTape" onChange={onChange} ref={MaskingTapeRef}>
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
    </div>
  );
}

export default memo(MaskingTapeSelector);
