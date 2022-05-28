import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.actions';

const initalState = 0;

export const counterReducer = createReducer(
  initalState,
  on(increment, (state: number) => state + 1),
  on(decrement, (state: number) => state - 1),
  on(reset, (state: number) => state = 0),
);
