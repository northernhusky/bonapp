import React from 'react';
import { Modal, Typography } from 'antd';
import { CartItem } from '../../../types/types';

const { Title, Paragraph } = Typography;

interface CartItemDetailsProps {
  item: CartItem;
  isVisible: boolean;
  onClose: () => void;
}

const CartItemDetails: React.FC<CartItemDetailsProps> = ({
  item,
  isVisible,
  onClose,
}) => {
  return (
    <Modal
      title={`Details for ${item.title}`}
      visible={isVisible}
      onCancel={onClose}
      footer={null}
    >
      <img
        alt={item.title}
        src={item.img}
        style={{ width: '100%', marginBottom: '20px' }}
      />
      <Title level={4}>Description</Title>
      <Paragraph>{item.description}</Paragraph>
      <Title level={4}>Category</Title>
      <Paragraph>{item.category}</Paragraph>
      <Title level={4}>Toppings</Title>
      <Paragraph>{item.toppings.join(', ')}</Paragraph>
      <Title level={4}>Price</Title>
      <Paragraph>${item.price}</Paragraph>
      <Title level={4}>Total</Title>
      <Paragraph>${item.quantity * item.price}</Paragraph>
      <Title level={4}>Quantity</Title>
      <Paragraph>{item.quantity}</Paragraph>
    </Modal>
  );
};

export default CartItemDetails;