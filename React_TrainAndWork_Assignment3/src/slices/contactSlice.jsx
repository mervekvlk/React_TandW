import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchcontacts = createAsyncThunk('contacts/fetchcontacts', async () => {
  const response = await fetch('http://localhost:3000/contact');
  const data = await response.json();
  return data;
});


const initialState = {
  contacts: [],
  status: 'idle',
  error: null,
};


export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchcontacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchcontacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.contacts = action.payload;
      })
      .addCase(fetchcontacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default contactSlice.reducer;
