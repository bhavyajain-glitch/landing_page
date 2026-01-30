import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CoinsPage from './pages/CoinsPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/coins" element={<CoinsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
