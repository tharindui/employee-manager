import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postEmployeeAPI } from "shared/services/employee";
import { employeeState } from "shared/types/reduxStateTypes";

const initialState: employeeState = {
  loading: false,
  error: "",
  employees: [],
  message: "",
};

export const postEmployees = createAsyncThunk(
  "post/employees",
  postEmployeeAPI
);

const employeeSlice = createSlice({
  name: "postEmployees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(postEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.message = "Employee Added Successfully";
      })
      .addCase(postEmployees.rejected, (state, action) => {
        state.loading = false;
        state.employees = [];
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
