import { employeeDetailsType } from "shared/types/employeeDetailTypes";
import axios from "axios";

const employeeApi = axios.create({
  //baseURL: "http://localhost:9999",
  baseURL: "http://ec2-3-112-24-153.ap-northeast-1.compute.amazonaws.com:9999",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const getAllEmployeesAPI = async () => {
  const response = await employeeApi.get("/employee");
  console.log("getAllEmployees");
  return response.data;
};

export const postEmployeeAPI = async (employee: employeeDetailsType) => {
  return await employeeApi.post("/employee", employee);
};

export const getEmployeeByIdAPI = async (empId: string) => {
  const response = await employeeApi.get(`/employee/${empId}`);
  return response.data;
};

export const deleteEmployeeByIdAPI = async (empId: number) => {
  return await employeeApi.delete(`/employee/${empId}`);
};

export const updateEmployeeAPI = async (employee: employeeDetailsType) => {
  return await employeeApi.patch(`/employee/${employee._id}`, employee);
};

export default employeeApi;
