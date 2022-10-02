import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SWPeopleDTO } from '../../types/SWPeopleDTO';
import { getAllPeopleNextPage, getPeopleById, searchAllPeople } from '../api/PeopleAction';
import { AxiosDataResponse } from '../../services';

interface PeopleState {
  people: SWPeopleDTO[];
  person: string[];
  next: string | null;
  previous: string | null;
}

const initialState: PeopleState = {
  people: [],
  person: [],
  next: null,
  previous: null,
};

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    addPeople: (state: PeopleState, action: PayloadAction<string>) => {
      state.person.push(action.payload);
    },
  },
  extraReducers: (build) => {
    build
      .addCase(searchAllPeople.fulfilled, (state: PeopleState, action: PayloadAction<SWPeopleDTO[]>) => {
        state.people = action.payload;
      })
      .addCase(getPeopleById.fulfilled, (state: PeopleState, action) => {
        state.people.push(action.payload);
      })
      .addCase(
        getAllPeopleNextPage.fulfilled,
        (state: PeopleState, action: PayloadAction<AxiosDataResponse<SWPeopleDTO[]>>) => {
          state.people = action.payload.results;
          state.next = action.payload.next;
          state.previous = action.payload.previous;
        },
      );
  },
});

export const people = peopleSlice.reducer;
