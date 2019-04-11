import React from 'react';
import styled from 'styled-components';
import ammoI from './icons/ammo.png';
import armorI from './icons/armor.png';
import consumablesI from './icons/consumables.png';
import keysI from './icons/keys.png';
import magicI from './icons/magic.png';
import ringsI from './icons/rings.png';
import upgradesI from './icons/upgrades.png';
import weaponsI from './icons/weapons.png';

const Category = ({ type, setCat }) => {
  const images = {
    ammo: ammoI,
    armor: armorI,
    consumables: consumablesI,
    keys: keysI,
    magic: magicI,
    rings: ringsI,
    upgrades: upgradesI,
    weapons: weaponsI
  };
  return (
    <CategoryWrapper>
      <img onClick={setCat} src={images[type]} />
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.nav`
  display: grid;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  width: auto;
  background-color: grey;
  img {
    width: 100%;
  }
`;

export default Category;
