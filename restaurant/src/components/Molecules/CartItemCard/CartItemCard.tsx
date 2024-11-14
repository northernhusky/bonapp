import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, increaseQuantity } from '../../../features/cart/cartSlice';
import { CartItem } from '../../../types/types';

interface CartItemProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(item.id));
  };

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <div className="quantity-controls">
        <button onClick={handleDecreaseQuantity} disabled={item.quantity <= 1}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <button onClick={handleRemoveFromCart}>Remove</button>
    </div>
  );
};

export default CartItemCard;