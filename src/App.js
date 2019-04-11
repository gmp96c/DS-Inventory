import React, { Component, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import data from './data/info.json';
import styled from 'styled-components';
import Display from './components/display/Display';
import Description from './components/description/Description';
import Stats from './components/stats/Stats.js';
const App = () => {
  const [category, setCategory] = useState([]);
  const [selected, setSelected] = useState({});
  const [showStats, setStats] = useState(false);
  useEffect(() => {
    setCategory(data.consumables);
  }, [data]);
  useEffect(() => {
    setSelected(category[0]);
  }, [category]);

  if (
    category == data.weapons ||
    category == data.armor ||
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
        selected={selected}
        setCat={setCategory}
        setSel={setSelected}
        data={data}
      />
      <Description item={selected} category={category} />
      {showStats ? <Stats item={selected} category={category} /> : ''}
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: grid;
  max-height: 100vh;
  background: black;
  grid-template-columns: 1.5fr 2fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: ${props =>
    props.stats
      ? `"grid desc" 
    "grid stats"`
      : `"grid desc" 
    "grid desc"`};
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

ReactDOM.render(<App />, document.getElementById('root'));
