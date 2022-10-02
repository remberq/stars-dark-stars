import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SWStarshipsDTO } from '../../types/SWStarshipsDTO';
import { getAllStarships, getAllStarshipsNextPage, getStarshipsById } from '../api/StarshipsActions';
import { AxiosDataResponse } from '../../services';

interface ShipsState {
  ships: SWStarshipsDTO[];
  next: string | null;
  previous: string | null;
}

const initialState: ShipsState = {
  ships: [],
  next: null,
  previous: null,
};

const starshipsSlice = createSlice({
  name: 'starships',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(
        getAllStarships.fulfilled,
        (state: ShipsState, action: PayloadAction<AxiosDataResponse<SWStarshipsDTO[]>>) => {
          state.ships = action.payload.results;
          state.next = action.payload.next;
        },
      )
      .addCase(
        getAllStarshipsNextPage.fulfilled,
        (state: ShipsState, action: PayloadAction<AxiosDataResponse<SWStarshipsDTO[]>>) => {
          state.ships = action.payload.results;
          state.next = action.payload.next;
          state.previous = action.payload.previous;
        },
      )
      .addCase(getStarshipsById.fulfilled, (state: ShipsState, action: PayloadAction<SWStarshipsDTO>) => {
        state.ships.push(action.payload);
      });
  },
});

export const ships = starshipsSlice.reducer;
