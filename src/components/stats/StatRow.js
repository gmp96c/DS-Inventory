import React from 'react';
import styled from 'styled-components';
const StatRow = ({ statArr }) => {
  console.log(statArr);
  const imgKey = {
    'atk-physical':
      'https://vignette.wikia.nocookie.net/darksouls/images/5/51/Dmg_phy.png',
    'atk-magic':
      'https://vignette.wikia.nocookie.net/darksouls/images/1/1f/Dmg_mag.png',
    'atk-fire':
      'https://vignette.wikia.nocookie.net/darksouls/images/3/3a/Dmg_fire.png',
    'atk-lightning':
      'https://vignette.wikia.nocookie.net/darksouls/images/1/1f/Dmg_lght.png',
    critical:
      'https://vignette.wikia.nocookie.net/darksouls/images/2/2b/Dmg_crit.png',
    'res-fire':
      'https://vignette.wikia.nocookie.net/darksouls/images/0/08/Dmgrd_lght.png',
    'res-lightning':
      'https://vignette.wikia.nocookie.net/darksouls/images/e/e3/Dmgrd_fire.png',
    'res-magic':
      'https://vignette.wikia.nocookie.net/darksouls/images/b/b4/Dmgrd_mag.png',
    'res-physical':
      'https://vignette.wikia.nocookie.net/darksouls/images/f/f8/Dmgrd_phy.png',
    stability:
      'https://vignette.wikia.nocookie.net/darksouls/images/b/b6/Dmgrd_stbil.png'
  };
  return (
    <StatStyle>
      <ul>
        {statArr.map(el => {
          return (
            <li>
              <img src={imgKey[el[0]]} />
              {el[1]}
            </li>
          );
        })}
      </ul>
    </StatStyle>
  );
};
const StatStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export default StatRow;
