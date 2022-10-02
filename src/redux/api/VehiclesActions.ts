import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { AxiosDataResponse, axiosInstance } from '../../services';
import { SWVehicleDTO } from '../../types/SWVehicleDTO';

export const searchAllVehicles = createAsyncThunk('vehicles/searchAllVehicles', async (search: string) => {
  const response: AxiosResponse<AxiosDataResponse<SWVehicleDTO[]>> = await axiosInstance.get(
    `/vehicles/?search=${search}`,
  );
  return response.data;
});

export const getVehiclesById = createAsyncThunk('vehicles/getVehiclesById', async (id: number | string) => {
  const response: AxiosResponse<SWVehicleDTO> = await axiosInstance.get(`/vehicles/${id}/`);
  return response.data;
});

export const getAllVehiclesNextPage = createAsyncThunk('starships/getAllVehiclesNextPage', async (page: string) => {
  const response: AxiosResponse<AxiosDataResponse<SWVehicleDTO[]>> = await axiosInstance.get(`${page}`);
  return response.data;
});
