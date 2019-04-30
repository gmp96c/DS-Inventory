import React from 'react';
import styled from 'styled-components';
import StatTall from './StatTall';

const Armor = ({ item }) => {
  return (
    <ArmorWrapper>
      <div className="divider" id="a1">
        <li className="section defense">
          <StatTall
            statArr={[
              'def-physical',
              'def-strike',
              'def-slash',
              'def-thrust',
              'def-magic',
              'def-fire',
              'def-lightning'
            ]}
            item={item}
          />
        </li>
      </div>
      <div className="divider" id="a2">
        <li className="section resist">
          <StatTall
            statArr={['poise', 'res-bleed', 'res-poison', 'res-curse']}
            item={item}
          />
        </li>
        <li className="section additional">
          <StatTall statArr={['weight', 'durability', 'empty']} item={item} />
        </li>
      </div>
    </ArmorWrapper>
  );
};
const border = '1px rgba(91, 49, 10, 0.78) solid';

const ArmorWrapper = styled.div`
  margin: 0 auto;
  list-style: none;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  justify-items: center;
  width: 90%;
  font-size: 120%;
  .indent {
    padding-left: 25px;
    width: inherit;
  }
  .stat-section {
    margin-top: 3px;
  }
  li {
    width: 100%;
    padding-top: 2px;
    padding-bottom: 2px;
  }
  .resist li:first-of-type {
    border-top: none;
  }
  .defense li:first-of-type {
    border-top: none;
  }
  li:last-of-type {
    border-bottom: none;
  }
  .divider {
    padding: 5px;
    width: 90%;
    border: ${border};
  }
  .stat-section {
    margin-bottom: 0;
  }
`;
export default Armor;
