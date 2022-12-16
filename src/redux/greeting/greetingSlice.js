/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// initialize state
const initialState = {
  loading: false,
  greeting: 'Hello, World!',
  err: '',
};

// function that generates pending, fulfilled and rejected action types
const fetchGreetings = createAsyncThunk('greeting/fetchGreetings', () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  axios
    .get('http://127.0.0.1:3000/api/v1/messages/greetings/random', {
      method: 'GET',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => response.data.greeting),
// eslint-disable-next-line function-paren-newline
);

const greetings = createSlice({
  name: 'greeting',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGreetings.fulfilled, (state, action) => {
      state.loading = false;
      state.greeting = action.payload;
      state.err = '';
    });
    builder.addCase(fetchGreetings.rejected, (state, action) => {
      state.loading = false;
      state.greeting = '';
      state.err = action.error.message;
    });
  },
});

export default greetings.reducer;
export { fetchGreetings };
