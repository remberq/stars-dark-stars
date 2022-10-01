import { configureStore } from '@reduxjs/toolkit';

import { people, films } from '../redux/slices/slices';
import { ships } from '../redux/slices/StarshipsSlice';

export const store = configureStore({
  reducer: {
    people,
    films,
    ships,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
