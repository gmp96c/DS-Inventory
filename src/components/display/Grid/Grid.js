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
  grid-template-columns: repeat(auto-fit, minmax(110px,1fr));
  align-content: center;
  grid-gap:2px;
  overflow-x: scroll;
  overflow-x: hidden;
align-content: start;
  height: 90vh;
`;
export default Grid;
