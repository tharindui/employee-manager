import { employeeDetailsType } from "shared/types/employeeDetailTypes";
import axios from "axios";

const employeeApi = axios.create({
  //baseURL: "http://localhost:9999",
  baseURL: "",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

export const getAllEmployeesAPI = async () => {
  const response = await employeeApi.get("http://52.194.235.87:9999/employee");
  console.log("getAllEmployees");
  return response.data;
};

export const postEmployeeAPI = async (employee: employeeDetailsType) => {
  return await employeeApi.post("http://52.194.235.87:9999/employee", employee);
};

export const getEmployeeByIdAPI = async (empId: string) => {
  const response = await employeeApi.get(
    `http://52.194.235.87:9999/employee/${empId}`
  );
  return response.data;
};

export const deleteEmployeeByIdAPI = async (empId: number) => {
  return await employeeApi.delete(
    `http://52.194.235.87:9999/employee/${empId}`
  );
};

export const updateEmployeeAPI = async (employee: employeeDetailsType) => {
  return await employeeApi.patch(
    `http://52.194.235.87:9999/employee/${employee._id}`,
    employee
  );
};

export default employeeApi;
