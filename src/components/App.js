import React from 'react';
import { Link, Routes, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import ReduxTest from './ReduxTest';
import Counter from '../features/counter/Counter';
import ApiFetch from '../features/apiFetch/ApiFetch'

import MenuStyle from './App.css';

const App = () => {
  return (
      <Router basename="/">
        <div className={MenuStyle.bar}>
          <nav className={MenuStyle.menu}><Link to="/">Home</Link></nav>
          <nav className={MenuStyle.menu}><Link to="/counter">Counter</Link></nav>
          <nav className={MenuStyle.menu}><Link to="/redux">Redux</Link></nav>
          <nav className={MenuStyle.menu}><Link to="/apitesting">Rtk</Link></nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/redux" element={<ReduxTest />} />
          <Route path="/apitesting" element={<ApiFetch/>} />
        </Routes>
      </Router>
  );
};

export default App;
