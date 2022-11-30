import { employeeDetailsType } from "shared/types/employeeDetailTypes";

export type employeeState = {
  loading: boolean;
  error?: string;
  employees: employeeDetailsType[];
  message: string;
};
