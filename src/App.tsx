import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import DrPaulPage from './DrPaulPage';
import Evang from './evanglinepage';
import DGS from './DGSpage';
import Stella from './stellapage';
import Sam from'./samulepage';
import Shilpa from './shilpapage';
import Stellar from './StellaDhpage'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Route for Dr. Paul Dhinakaran's Page */}
        <Route path="/dr-paul" element={<DrPaulPage />} />

        <Route path="/evang" element={<Evang />} />
        <Route path="/DGS" element={<DGS />} />
        <Route path="/Stella" element={<Stella />} />
        <Route path="/Sam" element={<Sam />} />
        <Route path="/Shilpa" element={<Shilpa />} />
        <Route path="/Stellar" element={<Stellar />} />
      </Routes>
    </Router>
  );
};

export default App;
