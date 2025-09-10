import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: (() => {
    try {
      const storedUser = localStorage.getItem("mernflix_user");
      if (storedUser && storedUser !== "undefined") {
        return JSON.parse(storedUser);
      } else {
        return null;
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      return null;
    }
  })(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { setUser } = userSlice.actions;
