import React from 'react';
import Header from './Header/Header';
import Grid from './Grid/Grid';
import styled from 'styled-components';
const Display = ({ category, selected, data, setCat, setSel }) => {
  return (
    <DisplayWrap>
      <Header id="header" category={category} setCat={setCat} data={data} />
      <Grid category={category} selected={selected} setSel={setSel} />
    </DisplayWrap>
  );
};

const DisplayWrap = styled.div`
  height: inherit;
  grid-area: grid;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
`;
export default Display;
