import React from 'react';
import styled from 'styled-components';
function Single({ type, value }) {
  return (
    <SingleWrap>
      <span>{type}</span>
      <span>{value}</span>
    </SingleWrap>
  );
}
const SingleWrap = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  width: 95%;
`;
export default Single;
