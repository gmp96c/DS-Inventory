import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import data from './data/info.json';
import styled from 'styled-components';
import Display from './components/display/Display';
import Description from './components/description/Description';
import Stats from './components/stats/Stats.js';
const App = () => {
  const [category, setCategory] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedCategory, setSelectedCategory] = useState({});
  const [showStats, setStats] = useState(false);
  useEffect(() => {
    setCategory(data.consumables);
  }, [data]);
  useEffect(() => {
    setSelectedItem(category[0]);
  }, [category]);

  if (
    category == data.weapons ||
    category == data.armor ||
    category == data.magic ||
    category == data.ammo
  ) {
    if (!showStats) {
      setStats(true);
    }
  } else if (showStats) {
    setStats(false);
  }
  return (
    <MainWrapper stats={showStats}>
      <Display
        category={category}
        selected={selectedItem}
        setCat={setCategory}
        setSel={setSelectedItem}
        data={data}
      />
      <Description item={selectedItem} category={category} />
      {showStats ? <Stats item={selectedItem} category={category} /> : ''}
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: grid;
  height: calc(100vh - 200px);
  background-image: url('https://i.imgur.com/iZAzP6X.jpg');
  background-size: cover;
  box-shadow: 0px 0px 11px 4px rgba(232, 139, 0, 0.3);
  box-shadow: inset 0px 0px 11px 10px rgba(0, 0, 0, 0.5);
  grid-template-columns: 1fr 0.5fr;
  grid-template-rows: 1fr auto;
  grid-gap: 25px;
  grid-template-areas: ${props =>
    props.stats
      ? `"grid desc" 
    "grid stats"`
      : `"grid desc" 
    "grid desc"`};
  margin: 0;
  padding: 25px;
  @media screen and (max-width: 413px) {
    padding: 15px;
  }
  overflow: hidden;
  @media screen and (max-width: 1500px), screen and (max-height: 840px) {
    height: calc(100vh - 50px);
  }
  @media (max-width: 1100px) {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-areas: ${props =>
      props.stats
        ? `"desc" 
    "stats"
    "grid"`
        : `"desc"
    "grid"`};
    grid-template-rows: ${props =>
      props.stats ? `auto auto 1fr` : `auto 1fr`};
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
