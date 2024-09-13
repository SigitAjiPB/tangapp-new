import { configureStore } from '@reduxjs/toolkit';
import billingReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    billing: billingReducer,
  },
});

export default store;