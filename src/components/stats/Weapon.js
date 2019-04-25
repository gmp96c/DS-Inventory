import React from 'react';
import styled from 'styled-components';
import StatTall from './StatTall';
import StatFlat from './StatFlat';

const Weapon = ({ item }) => {
  return (
    <WeaponWrapper>
      <ul className="container">
        <li className="section atk">
          <StatTall
            title="ATK"
            vertical={false}
            statArr={[
              'atk-physical',
              'atk-magic',
              'atk-fire',
              'atk-lightning',
              'critical'
            ]}
            item={item}
          />
        </li>
        <li className="section reduction">
          <StatTall
            title="DmgReduction%"
            statArr={[
              'res-physical',
              'res-magic',
              'res-fire',
              'res-lightning',
              'stability'
            ]}
            item={item}
          />
        </li>
        <li className="section bonus">
          <StatFlat
            title="ParamBonus"
            vertical={true}
            statArr={['str-bonus', 'dex-bonus', 'int-bonus', 'fth-bonus']}
            item={item}
          />
        </li>
        <li className="section req">
          <StatFlat
            vertical={true}
            title="ReqParam"
            statArr={['str-req', 'dex-req', 'int-req', 'fth-req']}
            item={item}
          >
            <ul className="additional">
              <li>
                <span>
                  <img
                    className="icon"
                    src="https://i.stack.imgur.com/vzXKP.png"
                  />{' '}
                  Durability
                </span>{' '}
                <span>{item.durability}</span>
              </li>
              <li>
                <span>
                  <img className="icon" src="https://i.imgur.com/wQHfFRv.png" />{' '}
                  Weight
                </span>{' '}
                <span>{item.weight}</span>
              </li>
            </ul>
          </StatFlat>
        </li>
        <li className="section aux">
          <StatFlat
            vertical={true}
            title="Aux Effects"
            statArr={['aux-bleed', 'aux-poison', 'aux-divine', 'aux-occult']}
            item={item}
          />
        </li>
      </ul>
    </WeaponWrapper>
  );
};

const WeaponWrapper = styled.div`
  .container {
    padding: 15px;
    list-style-type: none;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto auto;
    grid-template-areas: 'atk reduction', 'bonus req', 'aux req';
    .req {
      grid-area: 'req';
      grid-row: span 2;
    }
    .bonus {
      grid-area: 'bonus';
    }
    .aux {
      grid-area: 'aux';
    }
    .reduction {
      grid-area: 'reduction';
    }
    .atk {
      grid-area: 'atk';
    }
  }
  .section {
    width: 80%;
  }
`;
export default Weapon;
