import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/Headers';
import Countries from './components/Countries';
import CountryDetails from './components/Country';

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
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<CountryDetails />} />
      </Routes>
    </>
  );
}

export default App;
