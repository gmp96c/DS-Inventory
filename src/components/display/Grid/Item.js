import React from 'react';
import styled from 'styled-components';
const Item = ({ selected, image, setSel }) => {
  return (
    <ItemWrapper onClick={setSel} selected={selected}>
      <img src={image} />
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 160px;
  margin: 10px;
  background: ${props => (props.selected ? 'red' : 'lightgray')};
`;

export default Item;
