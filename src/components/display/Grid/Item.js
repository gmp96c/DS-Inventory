import React from 'react';
import styled from 'styled-components';
const Item = ({ selected, image, setSel, category }) => {
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
  box-shadow: inset 0px 0px 11px 0px rgba(41, 41, 41, 1);

  img {
    max-width: 80%;
  }
`;

export default Item;
