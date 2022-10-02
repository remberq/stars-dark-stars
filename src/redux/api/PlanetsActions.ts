import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { AxiosDataResponse, axiosInstance } from '../../services';
import { SWPlanetsDTO } from '../../types/SWPlanetsDTO';

export const searchAllPlanets = createAsyncThunk('planets/searchAllPlanets', async (search: string) => {
  const response: AxiosResponse<AxiosDataResponse<SWPlanetsDTO[]>> = await axiosInstance.get(
    `/planets/?search=${search}`,
  );
  return response.data;
});

export const getAllPlanetsNextPage = createAsyncThunk('starships/getAllPlanetsNextPage', async (page: string) => {
  const response: AxiosResponse<AxiosDataResponse<SWPlanetsDTO[]>> = await axiosInstance.get(`${page}`);
  return response.data;
});
