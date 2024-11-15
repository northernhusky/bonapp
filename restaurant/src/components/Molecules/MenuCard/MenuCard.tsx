import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/Cart/cartSlice';
import { MenuItem } from '../../../types/types';
import { Button, Card } from 'antd';
import MenuDetails from '../../Organisms/MenuDetails/MenuDetails';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
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
        <Card
          key={item.id}
          hoverable
          style={{ width: 240, margin: '10px', display: 'inline-block' }}
          cover={<img alt={item.title} src={item.img} />}
          onClick={handleCardClick}
        >
          <Card.Meta title={item.title} description={`Price: $${item.price}`} />
          <Button
            type="primary"
            style={{ marginTop: 10 }}
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          >
            Add to Cart
          </Button>
        </Card>
      </div>

      <MenuDetails
        item={item}
        isVisible={isModalVisible}
        onClose={handleModalClose}
        onAddToCart={handleAddToCart}
      />
    </>
  );
};

export default MenuCard;