import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.activeaccount || initialState;

export const selectActiveaccount = createSelector(
  [selectSlice],
  state => state,
);
