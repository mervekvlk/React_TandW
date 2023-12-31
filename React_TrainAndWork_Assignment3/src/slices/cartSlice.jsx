import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    
    addToCart: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          
          state.items.push({ ...action.payload, quantity: 1 });
        }

        state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        
      },
    
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);

      state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    
  },
});


export const { addToCart, removeFromCart } = cartSlice.actions;


export default cartSlice.reducer;
