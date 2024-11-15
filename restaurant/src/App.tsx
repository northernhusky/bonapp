import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Pages/Menu/Menu';
import CartPage from './components/Pages/Cart/CartPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;