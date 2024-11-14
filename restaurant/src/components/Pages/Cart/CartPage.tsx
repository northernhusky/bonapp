import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../../features/cart/cartSlice';
import { selectCartItems } from '../../../features/cart/cartSlice';
import CartItemCard from '../../Molecules/CartItemCard/CartItemCard';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
          <button onClick={handleClearCart}>Clear cart</button>
          <Link to="/">Return to menu page</Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;