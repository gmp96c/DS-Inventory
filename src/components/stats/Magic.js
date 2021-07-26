import React from 'react';
import StatFlat from './StatFlat';
import style from 'styled-components';
const Magic = ({ item }) => {
  const img = {
    'int-req':
      'https://vignette.wikia.nocookie.net/darksouls/images/6/6b/Para_int.png/',
    'fth-req':
      'https://vignette.wikia.nocookie.net/darksouls/images/4/4b/Para_faith.png'
  };
  return (
    <MagicStyle>
      <span>
        <img src={img['int-req']} />
        <p>{item['int-req']}</p>
      </span>
      <span>
        <img src={img['fth-req']} />
        <p>{item['fth-req']}</p>
      </span>
    </MagicStyle>
  );
};
const border = '1px rgba(91, 49, 10, 0.78) solid';

const MagicStyle = style.div`
display: flex;
span{
    width: 60px;
    display:flex;
    align-items:center;
    justify-content: center;
    p{
        flex-grow:1;
        text-align: center;
        margin: 0;
        padding: 0;

    }
}
img{
  height: auto;
width: 28px;
}
width: 100%;
padding-right: 50px;
align-items:flex-start;
justify-content:flex-end;
`;

export default Magic;
