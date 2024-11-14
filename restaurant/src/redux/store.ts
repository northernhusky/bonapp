import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../features/Menu/menuSlice';
import cartReducer from '../features/Cart/cartSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
