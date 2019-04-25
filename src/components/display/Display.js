import React from 'react';
import Header from './Header/Header';
import Grid from './Grid/Grid';
import styled from 'styled-components';
const Display = ({ category, selected, data, setCat, setSel }) => {
  return (
    <DisplayWrap>
      <Header category={category} setCat={setCat} data={data} />
      <Grid category={category} selected={selected} setSel={setSel} />
    </DisplayWrap>
  );
};

const DisplayWrap = styled.div`
  height: inherit;
  grid-area: grid;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export default Display;
