import EmployeeForm from "components/organisms/forms/employee";
import React from "react";
import BaseLayout from "../../../components/layouts/BaseLayout";

interface Props {}

function Employee(props: Props) {
  const {} = props;

  return (
    <div style={{ paddingTop: 100 }}>
      <EmployeeForm type="update" />
    </div>
  );
}

Employee.layout = BaseLayout;
export default Employee;
