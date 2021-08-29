import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

export const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => ({
      ...state, count: state.count + action.payload,
    }),
    decrement: (state, action: PayloadAction<number>) => ({
      ...state, count: state.count - action.payload,
    }),
  },
});

export const { increment, decrement } = slice.actions;
