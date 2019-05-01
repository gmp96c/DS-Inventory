import React from 'react';
import styled from 'styled-components';
import Category from './Category';
const Header = ({ setCat, data, category }) => {
  return (
    <HeaderWrap>
      {Object.keys(data).map((el, i) => {
        return (
          <Category
            data={data}
            category={category}
            type={el}
            key={el}
            setCat={() => {
              setCat(data[el]);
            }}
          />
        );
      })}
    </HeaderWrap>
  );
};

const HeaderWrap = styled.header`
  display: grid;
  grid-template-columns: repeat(8, 10%);
  grid-gap: 10px;
  background-color: rgba(114, 114, 114, 0.3);
  padding: 10px;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  max-height: 10vh;
  @media (max-width: 950px) {
    height: auto;
    grid-gap: 3px;
  }
  box-shadow: inset 0px 0px 11px 3px rgba(0, 0, 0, 1);
`;

export default Header;
