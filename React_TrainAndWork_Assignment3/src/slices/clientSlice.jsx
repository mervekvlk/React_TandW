import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchClients = createAsyncThunk('clients/fetchClients', async () => {
  const response = await fetch('http://localhost:3000/client');
  const data = await response.json();
  return data;
});


const initialState = {
  clients: [],
  status: 'idle',
  error: null,
};


export const clientSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      
      .addCase(fetchClients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.clients = action.payload;
      })
      
  },
});


export default clientSlice.reducer;
