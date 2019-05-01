import React from 'react';
import styled from 'styled-components';
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
const GridWrapper = styled.div`
  display: grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  align-content: center;
  justify-content: center;
  align-items: center;
  justify-items: center;
  grid-gap: 25px;
  padding: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  align-content: start;
  flex-grow: 1;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  }
  @media (max-width: 1100px) {
    height: 80vh;
  }
`;
export default Grid;
