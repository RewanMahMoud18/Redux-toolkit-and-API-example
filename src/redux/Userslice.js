import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const addUser = createAsyncThunk("users/add", async (user) => {
  const res = await axios.post("http://localhost:5000/api/users", user);
  return res.data;
});
export const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: {
      name: "",
      email: "",
    },

    loading: null,
    error: false,
  },

  reducers: {
    // addUser: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    // },
    // startUser: (state) => {
    //   state.loading = true;
    // },
    // successUser: (state, action) => {
    //   state.userData = action.payload;
    //   state.loading = false;
    // },
    // errorUser: (state) => {
    //   state.loading = false;
    //   state.error = true;
    // },
  },
  extraReducers: {
    [addUser.pending]: (state) => {
      state.loading = true;
    },
    [addUser.fulfilled]: (state, action) => {
      state.userData = action.payload;
      state.loading = false;
    },
    [addUser.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});
export const {} = userSlice.actions;
export const userReducer = userSlice.reducer;
