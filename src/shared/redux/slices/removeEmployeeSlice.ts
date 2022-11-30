import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteEmployeeByIdAPI } from "shared/services/employee";
import { employeeState } from "shared/types/reduxStateTypes";

const initialState: employeeState = {
  loading: false,
  error: "",
  employees: [],
  message: "",
};

export const removeEmployee = createAsyncThunk(
  "remove/employees",
  deleteEmployeeByIdAPI
);

const employeeSlice = createSlice({
  name: "removeEmployees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeEmployee.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeEmployee.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.message = "Employee Removed Successfully";
      })
      .addCase(removeEmployee.rejected, (state, action) => {
        state.loading = false;
        state.employees = [];
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
