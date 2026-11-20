import { configureStore } from '@reduxjs/toolkit';
import goalReducer from './reducers/goalSlice';

export const store = configureStore({
    reducer: {
        goal: goalReducer
    },
});