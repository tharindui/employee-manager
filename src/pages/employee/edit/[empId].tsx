import EmployeeForm from "components/organisms/forms/employee";
import { GetServerSideProps } from "next";
import React from "react";
import { fetchEmployeeById } from "shared/redux/slices/employeeByIdSlice";
import { wrapper } from "shared/redux/store";
import BaseLayout from "../../../components/layouts/BaseLayout";

function Employee() {
  return <EmployeeForm type="update" />;
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(fetchEmployeeById(params?.empId as string));
      return {
        props: {},
      };
    }
);

Employee.layout = BaseLayout;
export default Employee;
