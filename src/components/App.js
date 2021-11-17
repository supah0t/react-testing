import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Test from './Test';

const App = () => {
  return (
    <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
    </Router>
  );
};

export default App;
