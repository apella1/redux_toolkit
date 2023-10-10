import { configureStore } from "@reduxjs/toolkit";
import { dogsApiSlice } from "../features/dogs/dogs_api_slice";
import counterReducer from "../features/counter/counter_slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dogsApiSlice.reducerPath]: dogsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(dogsApiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
