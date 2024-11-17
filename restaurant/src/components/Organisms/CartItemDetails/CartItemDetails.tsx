import React from 'react';
import { Modal, Typography, InputNumber } from 'antd';
import { useDispatch } from 'react-redux';
import { CartItem } from '../../../types/types';
import { decreaseQuantity, increaseQuantity } from '../../../features/cart/cartSlice';

const { Title, Paragraph } = Typography;

const CartItemDetails: React.FC<{
  item: CartItem;
  isVisible: boolean;
  onClose: () => void;
}> = ({ item, isVisible, onClose }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (value: number | null) => {
    if (value && value > 0) {
      const delta = value - item.quantity;
      if (delta > 0) {
        dispatch(increaseQuantity(item.id));
      } else {
        dispatch(decreaseQuantity(item.id));
      }
    }
  };

  return (
    <Modal
      title={`Details for ${item.title}`}
      open={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <img
        alt={item.title}
        src={item.img}
        style={{ width: '100%', marginBottom: '20px' }}
      />
      <Title level={5}>Description</Title>
      <Paragraph>{item.description}</Paragraph>
      <Title level={5}>Category</Title>
      <Paragraph>{item.category}</Paragraph>
      <Title level={5}>Toppings</Title>
      <Paragraph>{item.toppings.join(', ')}</Paragraph>
      <Title level={4}>Price</Title>
      <Paragraph>${item.price.toFixed(2)}</Paragraph>
      <Title level={4}>Total</Title>
      <Paragraph>${(item.quantity * item.price).toFixed(2)}</Paragraph>
      <Title level={4}>Quantity</Title>
      <InputNumber
        value={item.quantity}
        min={1}
        style={{ width: '13%' }}
        onChange={handleQuantityChange}
      />
    </Modal>
  );
};

export default CartItemDetails;