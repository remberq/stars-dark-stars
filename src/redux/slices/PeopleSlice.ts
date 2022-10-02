import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SWPeopleDTO } from '../../types/SWPeopleDTO';
import { getAllPeopleNextPage, getPeopleById, searchAllPeople } from '../api/PeopleAction';
import { AxiosDataResponse } from '../../services';
import { getId } from '../../components/side-preview/idMatcher';

interface PeopleState {
  people: SWPeopleDTO[];
  person: string[];
  next: string | null;
  previous: string | null;
  load: boolean;
}

const initialState: PeopleState = {
  people: [],
  person: [],
  next: null,
  previous: null,
  load: true,
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
        state.people = action.payload.map((item) => {
          const id = getId(item.url);
          return { ...item, id };
        });
        state.load = false;
      })
      .addCase(searchAllPeople.pending, (state: PeopleState) => {
        state.load = true;
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
