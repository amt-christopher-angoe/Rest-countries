import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Headers from './components/Headers'
import Filter from './components/Filter';
import Countries from './components/Countries'



function App() {
  return (
    <>
      <Headers />
      <Filter />
      <Countries />
    </>
  );
}

export default App;
