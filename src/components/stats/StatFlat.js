import React from 'react';
import styled from 'styled-components';
let isVertical = false;
const StatFlat = ({ children, title, statArr, item, vertical }) => {
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
    'def-lightning':
      'https://vignette.wikia.nocookie.net/darksouls/images/2/21/Def_sorc_lght.png',
    poise:
      'https://vignette.wikia.nocookie.net/darksouls/images/7/78/Def_res_poise.png',
    durability:
      'https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_other_dura.png',
    weight:
      'https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_other_weig.png',
    'res-bleed':
      'https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_bleed.png',
    'res-curse':
      'https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_curse.png',
    'res-poison':
      'https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_poison.png',
    'aux-bleed':
      'https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_bleed.png',
    'aux-occult':
      'https://darksouls.wiki.fextralife.com/file/Dark-Souls/occult_dark_souls.jpg',
    'aux-poison':
      'https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_poison.png',
    'aux-divine':
      'https://darksouls.wiki.fextralife.com/file/Dark-Souls/icon_res_divine.png'
  };
  isVertical = vertical;
  return (
    <StatFlatStyle bottom={title == 'Aux Effects'} vertical={vertical}>
      <span> {title || ''}</span>
      <ul className="stat-section">
        {statArr.map(el => {
          return (
            <li className="attribute" key={item.name + el}>
              <span>
                <img src={imgKey[el]} />
                {labelReturn(el)}
              </span>
              <span className="value">{item[el]}</span>
            </li>
          );
        })}
      </ul>
    </StatFlatStyle>
  );
};
const border = '1px rgba(91, 49, 10, 0.78) solid';

const StatFlatStyle = styled.div`
  .stat-section {
    border-top: ${border};
    border-bottom: ${props => (props.bottom ? 'none' : border)};

    padding-top: 3px;
    padding-bottom: 3px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style-type: none;
    padding: 0;
    .attribute {
      text-align: center;
      display: grid;
      flex-grow: 1;
      grid-template-columns: auto 1fr;
    }
  }
  .attribute > * {
    place-self: center;
  }
`;
export default StatFlat;

function labelReturn(type) {
  let split = type.split('-');
  if (split.length > 1) {
    if (split[0] == 'def' || split[0] == 'atk' || split[0] == 'res') {
      return split[1][0].toUpperCase() + split[1].slice(1);
    } else {
      return '';
    }
  }
  return type[0].toUpperCase() + type.slice(1);
}
