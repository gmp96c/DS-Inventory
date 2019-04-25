import React from 'react';
import style from 'styled-components';
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

const HeaderWrap = style.header`
display: grid;
justify-content: center;
grid-template-columns:repeat(8,1fr);
grid-gap: 10px;
height: 10%;
max-width:auto;
padding-bottom:15px;
background-color: rgba(114,114,114,.3)
`;

export default Header;
