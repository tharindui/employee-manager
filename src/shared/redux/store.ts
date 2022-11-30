import { combineReducers, configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../redux/slices/employeeSlice";
import employeesDeleteReducer from "../redux/slices/removeEmployeeSlice";
import employeesPostReducer from "../redux/slices/postEmployeeSlice";
import employeesUpdateReducer from "../redux/slices/updateEmployeeSlice";
import employeeReducer from "../redux/slices/employeeByIdSlice";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

const combinedReducer = combineReducers({
  employee: employeeReducer,
  employees: employeesReducer,
  deleteEmployees: employeesDeleteReducer,
  postEmployees: employeesPostReducer,
  updateEmployees: employeesUpdateReducer,
});

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      employees: {
        employees: [...action.payload.employees.employees],
      },

      employee: {
        employees: action.payload.employees.employees,
      },
    };

    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export const store = configureStore({
  reducer: masterReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(() => store);
