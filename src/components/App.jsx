import React, { Suspense } from 'react';
import { Link, Routes, BrowserRouter as Router, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const ReduxTest = React.lazy(() => import('./ReduxTest'));
const Counter = React.lazy(() => import('../features/counter/Counter'));
const ApiFetch = React.lazy(() => import('../features/apiFetch/ApiFetch'));
const TodoList = React.lazy(() => import('../features/MobX/MobXDisplay'));
const Chart = React.lazy(() => import('../features/Charts/highchart-test'));

import Signup from '../features/SupabaseChat/components/Signup';
import Profile from '../features/SupabaseChat/components/Profile';

import { AuthProvider } from '../features/SupabaseChat/context/Auth';

import { WsTesting } from '../features/WsTesting/wsTesting';

import { observableTodoStore } from '../features/MobX/MobXStore';

import './App.css';

const App = () => {
    return (
        <>
            <Router basename="/">
                <div className="bar">
                    <div>
                        <nav className="menu">
                            <Link to="/">Home</Link>
                        </nav>
                    </div>
                    <div>
                        <nav className="menu">
                            <Link to="/signup">Signup</Link>
                        </nav>
                    </div>
                    <div>
                        <nav className="menu">
                            <Link to="/counter">Counter</Link>
                        </nav>
                    </div>
                    <div>
                        <nav className="menu">
                            <Link to="/redux">Redux</Link>
                        </nav>
                    </div>
                    <div>
                        <nav className="menu">
                            <Link to="/apitesting">Rtk</Link>
                        </nav>
                    </div>
                    <div>
                        <nav className="menu">
                            <Link to="/mobx">MobX</Link>
                        </nav>
                    </div>
                    <div>
                        <nav className="menu">
                            <Link to="/chart">Chart</Link>
                        </nav>
                    </div>
                    <div>
                        <nav className="menu">
                            <Link to="/wstest">WsTest</Link>
                        </nav>
                    </div>
                </div>

                <Suspense fallback={null}>
                    <AuthProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            {/* <Route path="/" element={<Supabase />} /> */}
                            <Route path="/counter" element={<Counter />} />
                            <Route path="/redux" element={<ReduxTest />} />
                            <Route path="/apitesting" element={<ApiFetch />} />
                            <Route
                                path="/mobx"
                                element={
                                    <TodoList store={observableTodoStore} />
                                }
                            />
                            <Route path="/chart" element={<Chart />} />
                            <Route path="/wstest" element={<WsTesting />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/profile" element={<Profile />} />
                        </Routes>
                    </AuthProvider>
                </Suspense>
            </Router>

            <div id="container"> </div>
        </>
    );
};

export default App;
