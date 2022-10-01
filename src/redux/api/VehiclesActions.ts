import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { AxiosDataResponse, axiosInstance } from '../../services';
import { SWVehicleDTO } from '../../types/SWVehicleDTO';

const searchAllVehicles = createAsyncThunk('vehicles/searchAllVehicles', async (search: string) => {
  const response: AxiosResponse<AxiosDataResponse<SWVehicleDTO[]>> = await axiosInstance.get(
    `https://swapi.dev/api/vehicles/?search=${search}`,
  );
  return response.data;
});
