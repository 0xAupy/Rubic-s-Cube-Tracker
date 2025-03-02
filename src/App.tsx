import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import TimerPage from './pages/TimerPage';
import StatisticsPage from './pages/StatisticsPage';
import CollectionPage from './pages/CollectionPage';
import CommunityPage from './pages/CommunityPage';
import ForumsPage from './pages/ForumsPage';
import CompetitionsPage from './pages/CompetitionsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TimerPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="collection" element={<CollectionPage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="forums" element={<ForumsPage />} />
          <Route path="competitions" element={<CompetitionsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;