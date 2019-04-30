import React from 'react';
import style from 'styled-components';
import Item from '../display/Grid/Item';

const Description = ({ item }) => {
  if (!item.name) {
    return <div />;
  } else {
    return (
      <DescWrap>
        <h1>
          <a
            href={`https://darksouls.wiki.fextralife.com/${item.name
              .split(' ')
              .join('+')}`}
          >
            {item.name || ''}
          </a>
        </h1>
        <div className="desc">
          <Lines text={item.description} />
        </div>
      </DescWrap>
    );
  }
};

Description.defaultProps = {
  item: { name: '' }
};
const lineSpacing = '1';
const DescWrap = style.div`

justify-self: center;
grid-area: desc;
color: white;
font-size: 130%;
line-height: 1.5em;
display:flex;
flex-direction:column;
width:100%;
h1{
  margin: 0;
}
a{
  text-decoration: inherit;
  color: inherit;
}
.desc{
  position: relative;
  height: 100%;}
.desc::before {
  content: "";
  position: absolute;
  top: 1.25em; left: 0;
  width: 100%; 
  height: 100%;
  background-image: url(https://i.imgur.com/PIDpgmL.png);
  filter: brightness(300%) contrast(70%) saturate(250%);
  background-size: calc(28.5em);
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
