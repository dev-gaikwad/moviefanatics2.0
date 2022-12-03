import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Discover from './pages/Discover';
import WatchList from './pages/WatchList';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Discover />} />
        <Route exact path='/watchlist' element={<WatchList />} />
        <Route exact path='/profile' element={<Profile />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
