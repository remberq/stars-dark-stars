import { configureStore } from '@reduxjs/toolkit';

import { people } from '../redux/slices/PeopleSlice';
import { films } from '../redux/slices/FilmsSlice';
import { ships } from '../redux/slices/StarshipsSlice';
import { vehicles } from '../redux/slices/VehiclesSlice';
import { planets } from '../redux/slices/PlanetsSlice';

export const store = configureStore({
  reducer: {
    people,
    films,
    ships,
    vehicles,
    planets,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
