import React from 'react';
import styled from 'styled-components';
import StatRow from './StatFlat';
const Ammo = ({ item }) => {
  console.log();
  return (
    <AmmoWrapper>
      {/* <StatRow
        statArr={[
          'atk-physical',
          'atk-magic',
          'atk-fire',
          'atk-lightning',
          'critical'
        ]}
        item={item}
      /> */}
      Attack Type: {item['Attack Type']}
    </AmmoWrapper>
  );
};

const AmmoWrapper = styled.div`
  display: grid;
`;
export default Ammo;
