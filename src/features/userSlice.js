import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./userAPI";

export const incrementAsync = createAsyncThunk(
  "user/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);

    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },

  reducers: {
    login: (state, action) => {
      state.value += action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export const { logout, login } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
