import React from 'react';
import styled from 'styled-components';
import StatTall from './StatTall';
import StatFlat from './StatFlat';
import Single from './Single';

const Weapon = ({ item }) => {
  return (
    <WeaponWrapper>
      <ul className="container">
        <Single type="Attack Type:" value={item['atk-type']} />{' '}
        <Single type="Weapon Type:" value={item['weapon-type']} />
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
            <br />
          </StatFlat>
        </li>
        <li className="section last aux">
          <StatFlat
            vertical={true}
            title="Aux Effects"
            statArr={['aux-bleed', 'aux-poison', 'aux-divine', 'aux-occult']}
            item={item}
          />
        </li>
        <li className="section last addition">
          <ul className="additional">
            <li>
              <span>
                <img
                  className="icon"
                  src="https://i.stack.imgur.com/vzXKP.png"
                />{' '}
                <span className="label-additional">Durability</span>
              </span>{' '}
              <span>{item.durability}</span>
            </li>
            <li>
              <span>
                <img className="icon" src="https://i.imgur.com/wQHfFRv.png" />{' '}
                <span className="label-additional">Weight</span>
              </span>{' '}
              <span>{item.weight}</span>
            </li>
          </ul>
        </li>
      </ul>
    </WeaponWrapper>
  );
};
const border = '1px rgba(91, 49, 10, 0.78) solid';
const WeaponWrapper = styled.div`
width: 100%;
  .icon {
    margin-right: 5px;
    margin-bottom: 4px;
  }
  .additional {
    padding: 0;
    flex-direction: column;
    list-style: none;
    li {
      width: 100;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    li > * {
      display: flex;
      align-items: center;
    }
  }
  .additional li:last-of-type{
    border-bottom:${border};
  }
  .addition {
    grid-area: additional;
    border: ${border};
    border-top: none;
  }
  .container {
    grid-auto-rows: 0;
    grid-auto-columns: 0;
    padding: 15px;
    font-size: 120%;
    padding-bottom: 0;
    margin-bottom: 0;
    list-style-type: none;
    display: grid;
    justify-content: center;
    align-content: center;
    align-items: end;
    justify-items: center;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 32px 192px 64px 74px;
    grid-template-areas:
      'attack-type weapon-type' 'atk reduction' 'bonus req'
      'aux additional';
    .req {
      grid-area: req;
      border: ${border};
      border-top: none;
      border-bottom: none;
    }
    .bonus {
      border-left: ${border};
      border-right: ${border};
      grid-area: bonus;
    }
    .aux {
      grid-area: aux;
      border: ${border};
      border-top: none;
    }
    .reduction {
      border: ${border};
      border-bottom: none;
      grid-area: reduction;
    }
    .atk {
      border: ${border};
      border-bottom: none;
      grid-area: atk;
    }
  }
  .section {
    padding-top: 8px;
    padding: 5px;
    width: 95%;

  }
  }
`;
export default Weapon;
