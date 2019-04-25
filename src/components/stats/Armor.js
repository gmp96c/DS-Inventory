import React from 'react';
import styled from 'styled-components';

const Armor = ({ item }) => {
  return (
    <ArmorWrapper>
      <ul>
        {/* <li>
          <StatRow
            statArr={['def-physical', 'def-blow', 'def-slash', 'def-thrust']}
            item={item}
          />
        </li>
        <li>
          <StatRow
            statArr={['def-magic', 'def-fire', 'def-lightning']}
            item={item}
          />
        </li>
        <li>
          <StatRow
            statArr={['poise', 'res-bleed', 'res-poison', 'res-curse']}
            item={item}
          />
        </li>
        <li>
          <StatRow statArr={['weight', 'durability']} item={item} />
        </li> */}
      </ul>
    </ArmorWrapper>
  );
};

const ArmorWrapper = styled.div`
  display: grid;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: grid;
    }
  }
`;
export default Armor;
