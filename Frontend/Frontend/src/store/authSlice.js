import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import API from "../services/api";

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userInfo: userInfoFromLocalStorage,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, {rejectWithValue }) => {
    try {
            const response = await API.post("/auth/login", {
              email,
              password
            });
            return response.data;
          } catch (error) {
            return rejectWithValue(error.response.data);
          }
        }
      );

const authSlice = createSlice({
  name: "auth",
  initialState,
  //shorthand syntax for initialState
    reducers: {
        setCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },
        logout: (state) => {
            state.userInfo = null;
            localStorage.removeItem("userInfo");
        }
    },
    extraReducers: (builder) => {
      builder.addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      });
      builder.addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
    }
});

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;
