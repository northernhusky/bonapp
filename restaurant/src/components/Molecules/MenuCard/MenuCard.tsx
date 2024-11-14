import React from 'react';
import { MenuItem } from '../../../types/types';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="menu-card">
      <img src={item.img} alt={item.title} className="menu-card-image" />
      <h2 className="menu-card-title">{item.title}</h2>
      <p className="menu-card-description">{item.description}</p>
      <p className="menu-card-price">Price: ${item.price}</p>
      <p className="menu-card-rating">Rating: {item.rating}</p>
    </div>
  );
};

export default MenuCard;