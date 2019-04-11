import React from 'react';
import styled from 'styled-components';

const Armor = item => {
  return (
    <ArmorWrapper>
      <ul>
        <li>
          <img src="https://vignette.wikia.nocookie.net/darksouls/images/5/51/Dmg_phy.png" />
          {item['atk-physical']}
        </li>
        <li>
          <img src="https://vignette.wikia.nocookie.net/darksouls/images/1/1f/Dmg_mag.png" />
          {item['atk-magic']}
        </li>
        <li>
          <img src="https://vignette.wikia.nocookie.net/darksouls/images/3/3a/Dmg_fire.png" />
          {item['atk-fire']}
        </li>
        <li>
          <img src="https://vignette.wikia.nocookie.net/darksouls/images/1/1f/Dmg_lght.png" />
          {item['atk-lightning']}
        </li>
        <li>
          <img src="https://vignette.wikia.nocookie.net/darksouls/images/2/2b/Dmg_crit.png" />
          {item['critical']}
        </li>
        <li>Attack Type: {item['Attack Type']}</li>
      </ul>
    </ArmorWrapper>
  );
};

const ArmorWrapper = styled.div`
  display: grid;
`;
export default Armor;
