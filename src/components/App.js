import React from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
};

export default App;
