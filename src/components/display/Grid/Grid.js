import React from 'react';
import style from 'styled-components';
import Item from './Item';

const Grid = ({ category, selected, setSel }) => {
  console.log(selected);
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
  grid-gap:10px;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  align-content: start;
  flex-grow: 1;
`;
export default Grid;
