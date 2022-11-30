import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateEmployeeAPI } from "shared/services/employee/index";
import { employeeState } from "shared/types/reduxStateTypes";

const initialState: employeeState = {
  loading: false,
  error: "",
  employees: [],
  message: "",
};

export const updateEmployee = createAsyncThunk(
  "post/employees",
  updateEmployeeAPI
);

const employeeSlice = createSlice({
  name: "updateEmployees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.message = "Employee Updated Successfully";
      })
      .addCase(updateEmployee.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
