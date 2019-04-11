import React from 'react';
import styled from 'styled-components';
import StatRow from './StatRow';
const Ammo = ({ item }) => {
  console.log();
  return (
    <AmmoWrapper>
      <StatRow
        statArr={[
          ['atk-physical', item['atk-physical']],
          ['atk-magic', item['atk-magic']],
          ['atk-fire', item['atk-fire']],
          ['atk-lightning', item['atk-lightning']],
          ['critical', item['critical']]
        ]}
      />
      Attack Type: {item['Attack Type']}
    </AmmoWrapper>
  );
};

const AmmoWrapper = styled.div`
  display: grid;
`;
export default Ammo;
