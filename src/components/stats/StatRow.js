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
      'https://vignette.wikia.nocookie.net/darksouls/images/e/e3/Dmgrd_fire.png',
    'res-lightning':
      'https://vignette.wikia.nocookie.net/darksouls/images/0/08/Dmgrd_lght.png',
    'res-magic':
      'https://vignette.wikia.nocookie.net/darksouls/images/b/b4/Dmgrd_mag.png',
    'res-physical':
      'https://vignette.wikia.nocookie.net/darksouls/images/f/f8/Dmgrd_phy.png',
    stability:
      'https://vignette.wikia.nocookie.net/darksouls/images/b/b6/Dmgrd_stbil.png',
    'str-bonus':
      'https://vignette.wikia.nocookie.net/darksouls/images/a/a0/Para_str.png',
    'str-req':
      'https://vignette.wikia.nocookie.net/darksouls/images/a/a0/Para_str.png',
    'dex-bonus':
      'https://vignette.wikia.nocookie.net/darksouls/images/5/59/Para_dex.png',
    'dex-req':
      'https://vignette.wikia.nocookie.net/darksouls/images/5/59/Para_dex.png',
    'int-bonus':
      'https://vignette.wikia.nocookie.net/darksouls/images/6/6b/Para_int.png/',
    'int-req':
      'https://vignette.wikia.nocookie.net/darksouls/images/6/6b/Para_int.png/',
    'fth-bonus':
      'https://vignette.wikia.nocookie.net/darksouls/images/4/4b/Para_faith.png',
    'fth-req':
      'https://vignette.wikia.nocookie.net/darksouls/images/4/4b/Para_faith.png',
    'def-blow':
      'https://vignette.wikia.nocookie.net/darksouls/images/e/e6/Def_atk_strike.png',
    'def-fire':
      'https://vignette.wikia.nocookie.net/darksouls/images/c/c7/Def_sorc_fire.png',
    'def-magic':
      'https://vignette.wikia.nocookie.net/darksouls/images/5/5f/Def_sorc_mag.png',
    'def-physical':
      'https://vignette.wikia.nocookie.net/darksouls/images/8/82/Def_atk_phy.png',
    'def-slash':
      'https://vignette.wikia.nocookie.net/darksouls/images/9/9d/Def_atk_slash.png',
    'def-thrust':
      'https://vignette.wikia.nocookie.net/darksouls/images/3/3c/Def_atk_thrust.png',
    'def-thunder':
      'https://vignette.wikia.nocookie.net/darksouls/images/2/21/Def_sorc_lght.png',
    poise:
      'https://vignette.wikia.nocookie.net/darksouls/images/7/78/Def_res_poise.png'
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
