import React from 'react';
import { Modal, Row, Col, Typography, Button } from 'antd';
import { CartItem } from '../../../types/types';

const { Title, Text } = Typography;

const CheckoutModal: React.FC<{
  visible: boolean;
  cartItems: CartItem[];
  onClose: () => void;
}> = ({ visible, cartItems, onClose }) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      width={600}
    >
      <div>
        <Title level={1}>Checkout</Title>
        <Row gutter={16}>
          {cartItems.map((item) => (
            <Col key={item.id} xs={24} sm={12} md={8} lg={6} span={24}>
              <div style={{ marginBottom: '10px' }}>
                <img
                  alt={item.title}
                  src={item.img}
                  style={{ width: '100%', marginBottom: '20px' }}
                />
                <strong>{item.title}</strong>
                <div>Price: ${item.price.toFixed(2)}</div>
                <div>Quantity: {item.quantity}</div>
                <div>Total: ${(item.quantity * item.price).toFixed(2)}</div>
              </div>
            </Col>
          ))}
        </Row>

        <div style={{ marginTop: '20px', fontSize: '18px', marginBottom: '-20px' }}>
          <Text strong>Total Price:</Text>
        </div>
        <Title level={3}>${totalPrice.toFixed(2)}</Title>

        <Row justify="end">
          <Col>
            <Button
              type="primary"
              onClick={() => console.log("Success!")}
            >
              Checkout
            </Button>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default CheckoutModal;