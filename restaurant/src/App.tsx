import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuPage from './components/Pages/MenuPage/MenuPage';
import CartPage from './components/Pages/Cart/CartPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;