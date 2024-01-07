import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
  const response = await fetch('http://localhost:3000/categories');
  const data = await response.json();
  return data;
});

export const fetchSubcategories = createAsyncThunk('subcategories/fetchSubcategories', async () => {
    const response = await fetch('http://localhost:3000/subcategories');
    const data = await response.json();
    return data;
  });
  


const initialState = {
  categories: [],
  subcategories: [],
  status: 'idle',
  error: null,
};


export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchSubcategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubcategories.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.subcategories = action.payload;
      })
      .addCase(fetchSubcategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default categorySlice.reducer;
