import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectCartItems } from '../../../features/cart/cartSlice';
import CartItemCard from '../../Molecules/CartItemCard/CartItemCard';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Empty, Typography } from 'antd';
import { useState } from 'react';
import CheckoutModal from '../../Organisms/CheckoutModal/CheckoutModal';

const { Title, Text } = Typography;

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleProceedToCheckout = () => {
    setIsCheckoutVisible(true);
  };

  const handleCheckoutClose = () => {
    setIsCheckoutVisible(false);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Row justify="space-between" align="middle" style={{ marginBottom: '20px' }}>
        <Col>
          <Title level={1}>Cart</Title>
        </Col>
        <Col>
          <Link to="/" style={{ marginRight: '10px' }}>
            <Button type="default">Return to Menu</Button>
          </Link>
        </Col>
      </Row>
      
      {cartItems.length === 0 ? (
        <div>
          <Empty description="Cart is empty" />
        </div>
      ) : (
        <div>
          <Row gutter={16}>
            {cartItems.map((item) => (
              <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                <CartItemCard item={item} />
              </Col>
            ))}
          </Row>

          <Row justify="end" align="middle" style={{ marginTop: '20px' }}>
            <Col style={{ marginTop: '20px'}}>
              <Text strong style={{ marginRight: '10px' }}>
                Total Price:
              </Text>
            </Col>
            <Col>
              <Title level={2}>${totalPrice.toFixed(2)}</Title>
            </Col>
          </Row>

          <Row justify="end" align="middle" style={{ marginTop: '20px' }}>
            <Col>
              <Button type="default" onClick={handleClearCart} style={{ marginRight: '10px' }}>
                Clear Cart
              </Button>
            </Col>
            <Col>
              <Button
                type="primary"
                style={{ marginLeft: '10px' }}
                onClick={handleProceedToCheckout}
              >
                Proceed to Checkout
              </Button>
            </Col>
          </Row>
        </div>
      )}

      <CheckoutModal
        visible={isCheckoutVisible}
        cartItems={cartItems}
        onClose={handleCheckoutClose}
      />
    </div>
  );
};

export default Cart;