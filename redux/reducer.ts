import { createReducer } from '@reduxjs/toolkit';
import { setTheme } from './actions';

const initialState = {
  theme: 'dark',
};

const themeReducer = createReducer(initialState, {
  [setTheme]: (state, action) => {
    state.theme = action.payload;
  },
});

export default themeReducer;