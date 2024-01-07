import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('http://localhost:3000/products');
  const data = await response.json();
  return data;
});

export const fetchProductsByCategory = createAsyncThunk('products/fetchProductsByCategory', async (categoryId) => {
  const response = await fetch(`http://localhost:3000/products?category_id=${categoryId}`);
  const data = await response.json();
  return data;
});

export const fetchProductsBySubcategory = createAsyncThunk('products/fetchProductsBySubcategory', async (subcategoryId) => {
  const response = await fetch(`http://localhost:3000/products?subcategory_id=${subcategoryId}`); // Query parametresini düzeltin
  const data = await response.json();
  return data;
});

const initialState = {
  products: [],
  status: 'idle', 
  error: null,
};


export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProductsBySubcategory.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      });
  },
});


export default productSlice.reducer;
