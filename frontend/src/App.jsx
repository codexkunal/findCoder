import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from "../src/pages/LandingPages";
import LandingPage from "../src/pages/LandingPages";
import LangflowChat from './LangflowChat';
// import ChartComponent from './chart/LineChart';
import AnalyticsPage from './chart/AnalyticsPage';

// import Markdown from 'react-markdown';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LandingPage/>} />
        <Route path="/analytics" element={<LangflowChat/>} />
        <Route path="/graph" element={<AnalyticsPage />}/>
        {/* <Route path="/langflow" element={<LangflowChat/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;