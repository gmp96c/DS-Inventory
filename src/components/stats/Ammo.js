import React from 'react';
import styled from 'styled-components';
import StatTall from './StatTall';
const Ammo = ({ item }) => {
  console.log();
  return (
    <AmmoWrapper>
      Attack Type: {item['Attack Type']}
      <StatTall
        statArr={[
          'atk-physical',
          'atk-magic',
          'atk-fire',
          'atk-lightning',
          'critical'
        ]}
        vertical={false}
        item={item}
      />
    </AmmoWrapper>
  );
};
const border = '1px rgba(91, 49, 10, 0.78) solid';

const AmmoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 120%;

  div {
    width: 50%;
    ul {
      border-left: ${border};

      li {
        border-right: ${border};
        padding: 5px;
      }
    }
  }
`;
export default Ammo;
