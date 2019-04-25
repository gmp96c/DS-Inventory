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

const Category = ({ type, setCat, category, data }) => {
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
    <CategoryWrapper active={category == data[type]}>
      <img className="cat" onClick={setCat} src={images[type]} />
    </CategoryWrapper>
  );
};

const CategoryWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  max-width: auto;
  /* border: ${props => (props.active ? 'solid orange 3px' : '0')}; */
  img {
    max-height: 100%;
    width: auto;
    filter: ${props =>
      props.active
        ? 'contrast(80%) brightness(1.5) sepia(100%)'
        : 'contrast(75%) brightness(1.3)'};
  }
`;

export default Category;
