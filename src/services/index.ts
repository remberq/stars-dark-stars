import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

export const BASE_URL = 'https://swapi.dev/api';

export interface AxiosDataResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T;
}

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
  const { headers } = config;
  if (headers) {
    headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  return config;
});
