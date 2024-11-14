import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/cart/cartSlice';
import { MenuItem } from '../../../types/types';
import { Link } from 'react-router-dom';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="menu-card">
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Price: ${item.price}</p>
      <button onClick={handleAddToCart}>Add to cart</button>
      <Link to="/cart">Перейти в корзину</Link>
    </div>
  );
};

export default MenuCard;