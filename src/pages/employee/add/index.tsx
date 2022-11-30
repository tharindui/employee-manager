import React from "react";
import EmployeeForm from "components/organisms/forms/employee";
import BaseLayout from "components/layouts/BaseLayout";

function AddEmployee() {
  return <EmployeeForm type="add" />;
}
AddEmployee.layout = BaseLayout;
export default AddEmployee;
