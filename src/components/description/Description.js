import React from 'react';
import style from 'styled-components';
const Description = ({ item }) => {
  let current = item || {};
  return (
    <DescWrap>
      <h1>{current.name || ''}</h1>
      />
      <p>{current.description}</p>
    </DescWrap>
  );
};

const DescWrap = style.div`
background:green;
grid-area: desc;
`;

export default Description;
