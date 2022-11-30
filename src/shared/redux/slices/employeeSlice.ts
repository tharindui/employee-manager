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

export const fetchEmployees = createAsyncThunk<employeeDetailsType[]>(
  "get/employees",
  getAllEmployeesAPI
);

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
        state.error = "";
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.employees = [];
        state.error = action.error.message;
      });
  },
});

export default employeeSlice.reducer;
