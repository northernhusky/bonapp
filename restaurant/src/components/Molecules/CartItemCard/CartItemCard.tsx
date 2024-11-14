import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../../features/cart/cartSlice';
import { CartItem } from '../../../types/types';

interface CartItemProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={handleRemoveFromCart}>Remove</button>
    </div>
  );
};

export default CartItemCard;