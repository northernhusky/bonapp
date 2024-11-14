import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenuItems, selectMenuItems, selectMenuStatus, selectMenuError } from '../../../features/menu/menuSlice';
import { AppDispatch } from '../../../redux/store';
import { Link } from 'react-router-dom';
import { Button, Spin, Alert, Row, Col } from 'antd';
import MenuCard from '../../Molecules/MenuCard/MenuCard';
import { MenuItem } from '../../../types/types';

const MenuPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const menuItems = useSelector(selectMenuItems);
  const status = useSelector(selectMenuStatus);
  const error = useSelector(selectMenuError);

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  if (status === 'loading') {
    return (
      <div style={{ textAlign: 'center', marginTop: 50 }}>
        <Spin size="large" />
      </div>
    );
  }

  if (status === 'failed' && error) {
    return (
      <div style={{ marginTop: 50 }}>
        <Alert message="Error" description={`Error while loading menu: ${error}`} type="error" showIcon />
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/cart">
        <Button type="primary" style={{ marginBottom: '20px' }}>
          Open Cart
        </Button>
      </Link>
      <Row gutter={16}>
        {menuItems.map((item: MenuItem) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <MenuCard item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MenuPage;