import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SWVehicleDTO } from '../../types/SWVehicleDTO';

interface VehiclesState {
  vehicles: SWVehicleDTO[];
  next: string;
  previous: string;
}

const initialState: VehiclesState = {
  vehicles: [],
  next: '',
  previous: '',
};

const VehiclesSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
});
