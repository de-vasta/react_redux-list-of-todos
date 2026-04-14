import { createSlice } from '@reduxjs/toolkit';
import { Status } from '../types/Status';

interface FilterState {
  query: string;
  status: Status;
}

const initialState: FilterState = {
  query: '',
  status: 'all',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {},
});
