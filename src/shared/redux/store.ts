import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../redux/slices/employeeSlice";
import employeesDeleteReducer from "../redux/slices/removeEmployeeSlice";
import employeesPostReducer from "../redux/slices/postEmployeeSlice";
import employeesUpdateReducer from "../redux/slices/updateEmployeeSlice";
import employeeReducer from "../redux/slices/employeeByIdSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    employees: employeesReducer,
    deleteEmployees: employeesDeleteReducer,
    postEmployees: employeesPostReducer,
    updateEmployees: employeesUpdateReducer,
  },
  //middleware: [],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
