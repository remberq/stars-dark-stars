import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AxiosDataResponse } from '../../services';
import { SWPlanetsDTO } from '../../types/SWPlanetsDTO';
import { getAllPlanetsNextPage, searchAllPlanets } from '../api/PlanetsActions';

interface PlanetsState {
  planets: SWPlanetsDTO[];
  next: string | null;
  previous: string | null;
}

const initialState: PlanetsState = {
  planets: [],
  next: null,
  previous: null,
};

const planetsSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(
        searchAllPlanets.fulfilled,
        (state: PlanetsState, action: PayloadAction<AxiosDataResponse<SWPlanetsDTO[]>>) => {
          state.planets = action.payload.results;
          state.next = action.payload.next;
          state.previous = action.payload.previous;
        },
      )
      .addCase(
        getAllPlanetsNextPage.fulfilled,
        (state: PlanetsState, action: PayloadAction<AxiosDataResponse<SWPlanetsDTO[]>>) => {
          state.planets = action.payload.results;
          state.next = action.payload.next;
          state.previous = action.payload.previous;
        },
      );
  },
});

export const planets = planetsSlice.reducer;
