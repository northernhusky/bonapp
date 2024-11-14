import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { MenuItem, MenuState } from '../../types/types';

const initialState: MenuState = {
  items: [],
  status: 'idle',
};

const API_URL = 'https://ymagyn-76ef3-default-rtdb.europe-west1.firebasedatabase.app/products.json';

export const fetchMenuItems = createAsyncThunk('menu/fetchMenuItems', async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Error loading data');
  }
  const data = await response.json();
  return data as MenuItem[];
});

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMenuItems.fulfilled, (state, action: PayloadAction<MenuItem[]>) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchMenuItems.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectMenuItems = (state: RootState) => state.menu.items;
export default menuSlice.reducer;