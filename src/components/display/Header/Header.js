import React from 'react';
import style from 'styled-components';
import Category from './Category';
const Header = ({ setCat, data }) => {
  return (
    <HeaderWrap>
      {Object.keys(data).map((el, i) => {
        return (
          <Category
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

const HeaderWrap = style.header`
display: grid;
grid-template-columns:repeat(8,1fr);
grid-gap: 10px;
height: 10vh;
margin-bottom: 5px;
`;

export default Header;
