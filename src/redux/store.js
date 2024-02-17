import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetings/greetingSllice';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;
