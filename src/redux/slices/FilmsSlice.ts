import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SWFilmDTO } from '../../types/SWFilmDTO';
import { getFilmsById, searchAllFilms } from '../api/FilmActions';

interface FilmState {
  films: SWFilmDTO[];
}

const initialState: FilmState = {
  films: [],
};

export const filmSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(getFilmsById.fulfilled, (state: FilmState, { payload }: PayloadAction<SWFilmDTO>) => {
        state.films.push(payload);
      })
      .addCase(searchAllFilms.fulfilled, (state: FilmState, { payload }: PayloadAction<SWFilmDTO[]>) => {
        state.films = payload;
      });
  },
});

export const films = filmSlice.reducer;
