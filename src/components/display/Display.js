import React from 'react';
import Header from './Header/Header';
import Grid from './Grid/Grid';
import styled from 'styled-components';
const Display = ({ category, selected, data, setCat, setSel }) => {
  return (
    <DisplayWrap>
      <Header setCat={setCat} data={data} />
      <Grid category={category} selected={selected} setSel={setSel} />
    </DisplayWrap>
  );
};

const DisplayWrap = styled.div`
  height: 100vh;
  grid-area: grid;
`;
export default Display;
