import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './components/Pages/MenuPage/MenuPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
      </Routes>
    </Router>
  );
};

export default App;