import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SWVehicleDTO } from '../../types/SWVehicleDTO';
import { getAllVehiclesNextPage, getVehiclesById, searchAllVehicles } from '../api/VehiclesActions';
import { AxiosDataResponse } from '../../services';

interface VehiclesState {
  vehicles: SWVehicleDTO[];
  next: string | null;
  previous: string | null;
}

const initialState: VehiclesState = {
  vehicles: [],
  next: null,
  previous: null,
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(
        searchAllVehicles.fulfilled,
        (state: VehiclesState, action: PayloadAction<AxiosDataResponse<SWVehicleDTO[]>>) => {
          state.vehicles = action.payload.results;
          state.next = action.payload.next;
          state.previous = action.payload.previous;
        },
      )
      .addCase(getVehiclesById.fulfilled, (state: VehiclesState, action: PayloadAction<SWVehicleDTO>) => {
        state.vehicles.push(action.payload);
      })
      .addCase(
        getAllVehiclesNextPage.fulfilled,
        (state: VehiclesState, action: PayloadAction<AxiosDataResponse<SWVehicleDTO[]>>) => {
          state.vehicles = action.payload.results;
          state.next = action.payload.next;
          state.previous = action.payload.previous;
        },
      );
  },
});

export const vehicles = vehiclesSlice.reducer;
