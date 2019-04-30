import React from 'react';
import style from 'styled-components';
import Item from './Item';

const Grid = ({ category, selected, setSel }) => {
  return (
    <GridWrapper>
      {category.map((el, i) => {
        return (
          <Item
            selected={el == selected}
            image={el.image}
            key={i}
            setSel={() => setSel(el)}
          />
        );
      })}
    </GridWrapper>
  );
};
const GridWrapper = style.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-gap:10px;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  align-content: start;
  flex-grow: 1;
  @media (max-width: 1100px) {
    height:80vh;
    grid-template-columns: repeat(auto-fill, minmax(70px,1fr))
  }
`;
export default Grid;
