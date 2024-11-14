import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, increaseQuantity } from '../../../features/Cart/cartSlice';
import { CartItem } from '../../../types/types';
import { Button, InputNumber, Card } from 'antd';

interface CartItemProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <Card 
      hoverable 
      style={{ marginBottom: 20, padding: '15px' }}
      cover={<img alt={item.title} src={item.img} />}
    >
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <InputNumber 
          value={item.quantity} 
          min={1} 
          style={{ width: '60px' }} 
          onChange={(value) => {
            if (value! < item.quantity) {
              dispatch(decreaseQuantity(item.id));
            } else {
              dispatch(increaseQuantity(item.id));
            }
          }} 
        />
      </div>
      <Button onClick={handleRemoveFromCart}>
        Remove
      </Button>
    </Card>
  );
};

export default CartItemCard;