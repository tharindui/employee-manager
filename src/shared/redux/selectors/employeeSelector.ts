import { useAppSelector } from "shared/hooks/hooks";
export const useEmployees = () => {
  const employees = useAppSelector((state: any) => state.employees);
  return employees;
};

export const useEmployee = () => {
  const employee = useAppSelector((state: any) => state.employee);
  return employee;
};

export const useUpdateEmployee = () => {
  const employees = useAppSelector((state: any) => state.updateEmployees);
  return employees;
};

export const useDeleteEmployee = () => {
  const employees = useAppSelector((state: any) => state.deleteEmployees);
  return employees;
};

export const usePostEmployee = () => {
  const employees = useAppSelector((state: any) => state.postEmployees);
  return employees;
};
