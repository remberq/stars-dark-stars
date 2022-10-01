import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { AxiosDataResponse, axiosInstance } from '../../services';
import { SWFilmDTO } from '../../types/SWFilmDTO';

export const getFilmsById = createAsyncThunk('films/getFilmsById', async (id: number) => {
  const response: AxiosResponse<SWFilmDTO> = await axiosInstance.get(`https://swapi.dev/api/films/${id}`);
  return response.data;
});

export const searchAllFilms = createAsyncThunk('films/getFilmsByName', async (name: string) => {
  const response: AxiosResponse<AxiosDataResponse<SWFilmDTO[]>> = await axiosInstance.get(
    `https://swapi.dev/api/films/?search=${name}`,
  );
  return response.data.results;
});
