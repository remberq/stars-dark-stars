import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { AxiosDataResponse, axiosInstance } from '../../services';
import { SWStarshipsDTO } from '../../types/SWStarshipsDTO';

export const getAllStarships = createAsyncThunk('starships/getAllStarships', async (search: string) => {
  const response: AxiosResponse<AxiosDataResponse<SWStarshipsDTO[]>> = await axiosInstance.get(
    `https://swapi.dev/api/starships/?search=${search}`,
  );
  return response.data;
});

export const getAllStarshipsNext = createAsyncThunk('starships/getAllStarshipsNext', async (page: string) => {
  const response: AxiosResponse<AxiosDataResponse<SWStarshipsDTO[]>> = await axiosInstance.get(`${page}`);
  return response.data;
});

export const getStarshipsById = createAsyncThunk('starships/getStarshipsById', async (id: number) => {
  const response: AxiosResponse<SWStarshipsDTO> = await axiosInstance.get(`https://swapi.dev/api/starships/${id}`);
  return response.data;
});
