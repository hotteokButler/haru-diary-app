import styled from 'styled-components';

function MemoList() {
  return <NotReady>준비중</NotReady>;
}

export default MemoList;

const NotReady = styled.h1`
  font-size: 2em;
  text-align: center;
`;
