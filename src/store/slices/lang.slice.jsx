import { createSlice } from '@reduxjs/toolkit';

export const langSlice = createSlice({
    name: 'lang',
    initialState: 'english',
    reducers: {
      setLang: (state, action) => {return action.payload}
    }
})

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
