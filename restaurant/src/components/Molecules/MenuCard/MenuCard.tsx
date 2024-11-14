import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../features/Cart/cartSlice';
import { MenuItem } from '../../../types/types';
import { Button, Card } from 'antd';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="menu-card">
      <Card
        key={item.id}
        hoverable
        style={{ width: 240, margin: '10px', display: 'inline-block' }}
        cover={<img alt={item.title} src={item.img} />}
      >
        <Card.Meta title={item.title} description={`Price: $${item.price}`} />
         <Button type="primary" style={{ marginTop: 10 }} onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default MenuCard;