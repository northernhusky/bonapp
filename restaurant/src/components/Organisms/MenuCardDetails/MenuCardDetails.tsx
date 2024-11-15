import React from 'react';
import { Button, Modal, Typography } from 'antd';
import { MenuItem } from '../../../types/types';

const { Title, Paragraph } = Typography;

const MenuCardDetails: React.FC<{
  item: MenuItem;
  isVisible: boolean;
  onClose: () => void;
  addToCart: () => void;
}> = ({ item, isVisible, onClose, addToCart }) => {
  return (
    <Modal
      title={item.title}
      open={isVisible}
      onCancel={onClose}
      footer={[
        <Button
          key="add-to-cart"
          type="primary"
          onClick={() => {
            addToCart();
            onClose();
          }}
        >
          Add to Cart
        </Button>,
        <Button key="close" onClick={onClose}>
          Close
        </Button>,
      ]}
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
      <Title level={5}>Price</Title>
      <Paragraph>${item.price.toFixed(2)}</Paragraph>
      <Title level={5}>Rating</Title>
      <Paragraph>{item.rating}</Paragraph>
      <Title level={5}>Toppings</Title>
      <Paragraph>{item.toppings.join(', ')}</Paragraph>
    </Modal>
  );
};

export default MenuCardDetails;