import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  fetchMenuItems, 
  selectMenuItems, 
  selectMenuStatus, 
  selectMenuError } from '../../../features/menu/menuSlice';
import MenuCard from '../../Molecules/MenuCard/MenuCard';
import { AppDispatch } from '../../../redux/store';

const MenuPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const menuItems = useSelector(selectMenuItems);
  const status = useSelector(selectMenuStatus);
  const error = useSelector(selectMenuError);

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed' && error) {
    return (
      <div>
        <p className="error">Error while loading menu: {error}</p>
      </div>
    );
  }

  return (
    <div>
      {menuItems.map((item) => (
        <MenuCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MenuPage;