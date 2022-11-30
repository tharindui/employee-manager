import { useAppDispatch } from "shared/hooks/hooks";
import { fetchEmployees } from "shared/redux/slices/employeeSlice";

export const FetchEmployees = (): void => {
  const dispatch = useAppDispatch();

  dispatch(fetchEmployees());
};
