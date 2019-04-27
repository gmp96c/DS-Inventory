import React from 'react';
import styled from 'styled-components';
import Ammo from './Ammo';
import Armor from './Armor';
import Weapon from './Weapon';
import Magic from './Magic';
const Stats = ({ item, category }) => {
  return (
    <StatWrap>
      {category.length == 14 ? (
        <Ammo item={item} />
      ) : category.length == 181 ? (
        <Weapon item={item} />
      ) : category.length == 71 ? (
        <Magic item={item} />
      ) : (
        <Armor item={item} />
      )}
    </StatWrap>
  );
};
const StatWrap = styled.div`
  display: flex;
  width: 100%;
  grid-area: stats;
  align-self: end;
`;
export default Stats;
