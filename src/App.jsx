import React from 'react'
import Home from './Home.jsx';
import SignUp from './SignUp.jsx';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Premium from './Premium.jsx';
const App = () => {
    return (
        <Router> {/* Routing system starts */}
            <Routes>
                <Route path="/Login" element={<SignUp />} /> {/* Root path shows Login */}
                <Route path="/" element={<Home />} /> {/* /home shows Home */}
                <Route path="/premium" element={<Premium />} />
            </Routes>
        </Router>

    );
}

export default App
