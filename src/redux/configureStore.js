import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import greetingReducer from './greeting/greetingSlice';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

const store = configureStore({
    reducer: rootReducer
})

export default store;
