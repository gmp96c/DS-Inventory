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
grid-template-columns:repeat(8,10%);
grid-gap: 10px;
background-color: rgba(114,114,114,.3);
padding:10px;
align-items:center;
align-content:center;
justify-content:space-around;
max-height:10vh;
@media (max-width: 950px){
    height: auto;
    grid-gap: 3px;
}
// @media (max-width: 1100px){
//   height: auto;
//   grid-gap: 3px;
// }
`;

export default Header;
