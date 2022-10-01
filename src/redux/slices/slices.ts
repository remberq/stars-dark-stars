import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SWPeopleDTO } from '../../types/SWPeopleDTO';
import { SWFilmDTO } from '../../types/SWFilmDTO';
import { getPeopleById, searchAllPeople } from '../api/PeopleAction';
import { getFilmsById, searchAllFilms } from '../api/FilmActions';

interface PeopleSliceState {
  people: SWPeopleDTO[];
  person: string[];
}

const initialState: PeopleSliceState = {
  people: [],
  person: [],
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPeople: (state: PeopleSliceState, action: PayloadAction<string>) => {
      state.person.push(action.payload);
    },
  },
  extraReducers: (build) => {
    build
      .addCase(searchAllPeople.fulfilled, (state: PeopleSliceState, action: PayloadAction<SWPeopleDTO[]>) => {
        state.people = action.payload;
      })
      .addCase(searchAllPeople.rejected, (state) => {
        console.log('ji');
      })
      .addCase(getPeopleById.fulfilled, (state: PeopleSliceState, action) => {
        state.people.push(action.payload);
      });
  },
});

interface FilmState {
  films: SWFilmDTO[];
}

const filmState: FilmState = {
  films: [],
};

export const filmSlice = createSlice({
  name: 'films',
  initialState: filmState,
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

const reducers = {
  people: peopleSlice.reducer,
  films: filmSlice.reducer,
};

export const { addPeople } = peopleSlice.actions;
export const { people, films } = reducers;
