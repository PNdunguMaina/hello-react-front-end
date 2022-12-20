import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// API url
const baseApi = '/api/v1/messages/greetings/random';

// initialize state
const initialState = ['Hello, World!'];

// handle asynchronous logic
export const fetchGreetings = createAsyncThunk(
  'greetings/fetchGreetings',
  async () => {
    try {
      const response = await axios.get(baseApi, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.greeting;
    } catch (err) {
      return err.message;
    }
  },
);

// create action, action types and reducer
export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  extraReducers: {
    [fetchGreetings.fulfilled]: (state, action) => action.payload,
  },
});

export default greetingsSlice.reducer;
