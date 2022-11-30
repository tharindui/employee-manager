import EmployeeForm from "components/organisms/forms/employee";
import React from "react";
import { fetchEmployeeById } from "shared/redux/slices/employeeByIdSlice";
import { wrapper } from "shared/redux/store";
import BaseLayout from "../../../components/layouts/BaseLayout";

function Employee() {
  return (
    <div style={{ paddingTop: 100 }}>
      <EmployeeForm type="update" />
    </div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(fetchEmployeeById(context.params?.empId as string));
  }
);

Employee.layout = BaseLayout;
export default Employee;
