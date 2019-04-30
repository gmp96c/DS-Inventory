import React from 'react';
import styled from 'styled-components';
import { platform } from 'os';
const Item = ({ selected, image, setSel }) => {
  return (
    <ItemWrapper onClick={setSel} selected={selected}>
      <img
        onClick={() => {
          window.scroll(0, 0);
        }}
        src={image}
      />
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 90px;
  height: 100px;
  padding-bottom: 20px;
  background: ${props => (props.selected ? 'hsla(18,78%,22%,60%)' : '')};
  background-image: url('https://i.imgur.com/FMXXCBY.png');
  background-repeat: no-repeat;
  background-position-y: 95%;
  background-position-x: center;
  background-size: 90% auto;
  border: solid 1px grey;
  img {
    max-width: 80%;
  }
`;

export default Item;
