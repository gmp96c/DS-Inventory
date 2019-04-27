import React from 'react';
import style from 'styled-components';
import Item from '../display/Grid/Item';
const Description = ({ item }) => {
  let current = item || {};
  return (
    <DescWrap>
      <h1>{current.name || ''}</h1>
      <div className="desc">
        <Lines text={current.description} />
      </div>
    </DescWrap>
  );
};
const lineSpacing = '1';
const DescWrap = style.div`
grid-area: desc;
padding: 50px;
padding-bottom: none;
color: white;
font-size: 130%;
line-height: 1.5em;
margin: 0 auto;
height: auto;
.desc{
  position: relative;
  height: 100%;}
.desc::before {
  content: "";
  position: absolute;
  top: 1.5em; left: 0;
  width: 100%; 
  height: 80%;
  background-image: url(https://i.imgur.com/PIDpgmL.png);
  filter: brightness(500%) contrast(50%) ;
  background-size: calc(28.75em);
}
.desc > *{
  position: relative;
}
.text-description{
  margin-bottom: 0;
}
`;

export default Description;

const Lines = ({ text }) => {
  if (text) {
    return (
      <p className="text-description">
        {text.split('\n').map((item, i) => {
          return (
            <React.Fragment key={item + i}>
              {item} <br /> <br />
            </React.Fragment>
          );
        })}
      </p>
    );
  } else {
    return '';
  }
};
