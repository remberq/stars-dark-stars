import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { AxiosDataResponse, axiosInstance } from '../../services';
import { SWPeopleDTO } from '../../types/SWPeopleDTO';

export const searchAllPeople = createAsyncThunk('people/getPeopleByName', async (name: string) => {
  const response: AxiosResponse<AxiosDataResponse<SWPeopleDTO[]>> = await axiosInstance.get(`/people/?search=${name}`);
  return response.data.results;
});

export const getPeopleById = createAsyncThunk('people/getPeopleById', async (id: number) => {
  const response: AxiosResponse<SWPeopleDTO> = await axiosInstance.get(`/people/${id}/`);
  return response.data;
});
