import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/Headers';
import Filter from './components/Filter';
import Countries from './components/Countries';
import Country from './components/Country';

function App(): JSX.Element {
  return (
    <Router>
      <>
        <Headers />
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </>
    </Router>
  );
}

function Home(): JSX.Element {
  return (
    <>
      <Filter />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </>
  );
}

export default App;
