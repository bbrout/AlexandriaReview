import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthorDashboard from './pages/AuthorDashboard';
import ReviewerDashboard from './pages/ReviewerDashboard';
import ReaderPortal from './pages/ReaderPortal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/author" element={<AuthorDashboard />} />
        <Route path="/reviewer" element={<ReviewerDashboard />} />
        <Route path="/library" element={<ReaderPortal />} />
      </Routes>
    </Router>
  );
}

export default App;
