import {configureStore, createSlice} from "@reduxjs/toolkit";


export const apartmentSlice = createSlice({
  name: "apartments",
  initialState: {},
  reducers: {

  }
});

export const store = configureStore({
  reducer:{
    apartments: apartmentSlice.reducer
  }
});