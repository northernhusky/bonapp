import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, decreaseQuantity, increaseQuantity } from '../../../features/Cart/cartSlice';
import { CartItem } from '../../../types/types';
import { Button, InputNumber, Card } from 'antd';
import CartItemDetails from '../../Organisms/CartItemDetails/CartItemDetails';

interface CartItemProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

  const handleCardClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card
        hoverable
        style={{ marginBottom: 20, padding: '15px' }}
        cover={<img alt={item.title} src={item.img} />}
        onClick={handleCardClick}
      >
        <h3>{item.title}</h3>
        <p>Price: ${item.price}</p>
        <div
          style={{ marginBottom: '10px' }}
          onClick={(e) => e.stopPropagation()}
        >
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
        <Button
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveFromCart();
          }}
        >
          Remove
        </Button>
      </Card>

      <CartItemDetails
        item={item}
        isVisible={isModalVisible}
        onClose={handleModalClose}
      />
    </>
  );
};

export default CartItemCard;