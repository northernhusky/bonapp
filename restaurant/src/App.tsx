import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Pages/Menu/Menu';
import Cart from './components/Pages/Cart/Cart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;