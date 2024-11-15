import { useDispatch, useSelector } from 'react-redux';
import { clearCart, selectCartItems } from '../../../features/Cart/cartSlice';
import CartItemCard from '../../Molecules/CartItemCard/CartItemCard';
import { Link } from 'react-router-dom';
import { Button, Row, Col, Empty, Typography } from 'antd';

const { Title, Text } = Typography;

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title level={1}>Cart</Title>
      {cartItems.length === 0 ? (
        <div>
          <Empty description="Cart is empty" />
          <Link to="/">
            <Button type="primary" style={{ marginTop: '20px' }}>
              Return to Menu
            </Button>
          </Link>
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

          <div style={{ marginTop: '20px', fontSize: '18px' }}>
            <Text strong>Total Price: ${totalPrice.toFixed(2)}</Text>
          </div>

          <div style={{ marginTop: '20px' }}>
            <Button type="default" onClick={handleClearCart} style={{ marginRight: '10px' }}>
              Clear Cart
            </Button>
            <Link to="/">
              <Button type="primary">Return to Menu</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;