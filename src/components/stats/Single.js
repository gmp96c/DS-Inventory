import React from 'react';
import styled from 'styled-components';
function Single({ type, value }) {
  return (
    <SingleWrap
      className={type
        .toLowerCase()
        .split(' ')
        .join('-')}
    >
      <span>{type + ':'}</span>
      <span>{value}</span>
    </SingleWrap>
  );
}
const SingleWrap = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: space-between;
  width: 95%;
  @media (max-width: 390px) {
    width: 100%;
  }
`;
export default Single;
