import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipeApp from './pages/RecipeApp';
import IndieHackers from './pages/use-cases/IndieHackers';
import Solopreneur from './pages/use-cases/Solopreneur';
import VibeCoder from './pages/use-cases/VibeCoder';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-app" element={<RecipeApp />} />
        <Route path="/use-cases/indie-hackers" element={<IndieHackers />} />
        <Route path="/use-cases/solopreneur" element={<Solopreneur />} />
        <Route path="/use-cases/vibe-coder" element={<VibeCoder />} />
      </Routes>
    </Router>
  );
}

export default App;
