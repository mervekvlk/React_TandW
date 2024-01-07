import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  const response = await fetch('http://localhost:3000/blog_posts');
  const data = await response.json();
  return data;
});


const initialState = {
  blogs: [],
  status: 'idle',
  error: null,
};


export const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default blogSlice.reducer;
