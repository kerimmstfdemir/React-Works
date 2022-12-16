import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //! auth/setUser
    setUser: (state, action) => {
        state.user = action.payload
    },
    //! auth/clearUser
    clearUser: (state) => {
        state.user = null
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;