import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/Cart/cartSlice';
import { MenuItem } from '../../../types/types';
import { Button, Card, Row, Col } from 'antd';
import MenuCardDetails from '../../Organisms/MenuCardDetails/MenuCardDetails';

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  const handleCardClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="menu-card">
        <Row justify="center" style={{ marginBottom: '16px' }}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Card
              key={item.id}
              hoverable
              style={{
                width: '100%',
                margin: '0 auto',
              }}
              cover={<img alt={item.title} src={item.img} />}
              onClick={handleCardClick}
            >
            <Card.Meta title={item.title} description={`Price: $${item.price.toFixed(2)}`} />
              <Button
                type="primary"
                style={{ marginTop: 10, width: '100%' }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart();
                }}
              >
                Add to Cart
              </Button>
            </Card>
          </Col>
        </Row>
      </div>

      <MenuCardDetails
        item={item}
        isVisible={isModalVisible}
        onClose={handleModalClose}
        addToCart={handleAddToCart}
      />
    </>
  );
};

export default MenuCard;