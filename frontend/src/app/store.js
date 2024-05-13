import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import exerciseReducer from '../features/exercises/exerciseSlice'
import exerciseTypeReducer from '../features/exerciseTypes/exerciseTypeSlice'
import routineReducer from '../features/routines/routineSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    exercises: exerciseReducer,
    exerciseTypes: exerciseTypeReducer,
    routines: routineReducer
  },
});
