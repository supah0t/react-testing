import React, { Suspense } from 'react';
import { Link, Routes, BrowserRouter as Router, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const ReduxTest = React.lazy(() => import('./ReduxTest'));
const Counter = React.lazy(() => import('../features/counter/Counter'));
const ApiFetch = React.lazy(() => import('../features/apiFetch/ApiFetch'));

import './App.css';

const App = () => {
  return (
      <Router basename="/">
        <div className="bar">
          <nav className="menu"><Link to="/">
            Home
          </Link></nav>
          <nav className="menu"><Link to="/counter">
            Counter
          </Link></nav>
          <nav className="menu"><Link to="/redux">
            Redux
          </Link></nav>
          <nav className="menu"><Link to="/apitesting">
            Rtk
          </Link></nav>
        </div>

        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/redux" element={<ReduxTest />} />
            <Route path="/apitesting" element={<ApiFetch/>} />
          </Routes>
        
        </Suspense>
      </Router>
  );
};

export default App;
