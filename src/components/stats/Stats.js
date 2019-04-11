import React from 'react';
import styled from 'styled-components';
import Ammo from './Ammo';
import Armor from './Armor';
import Weapon from './Weapon';
const Stats = ({ item, category }) => {
  console.log(item);
  console.log(category);

  return (
    <StatWrap>
      {category.length == 14 ? (
        <Ammo item={item} />
      ) : category.length == 181 ? (
        <Weapon />
      ) : (
        <Armor />
      )}
    </StatWrap>
  );
};
const StatWrap = styled.div`
  grid-area: stats;
  background: yellow;
`;
export default Stats;
