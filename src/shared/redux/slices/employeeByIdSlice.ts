import { getEmployeeByIdAPI } from "./../../services/employee/index";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { employeeDetailsType } from "shared/types/employeeDetailTypes";
import { employeeState } from "shared/types/reduxStateTypes";
import { getAllEmployeesAPI } from "shared/services/employee/index";

const initialState: employeeState = {
  loading: false,
  error: "",
  employees: [],
  message: "",
};

export const fetchEmployeeById = createAsyncThunk(
  "get/employee",
  getEmployeeByIdAPI
);

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployeeById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployeeById.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
        state.error = "";
      })
      .addCase(fetchEmployeeById.rejected, (state, action) => {
        state.loading = false;
        state.employees = [];
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
