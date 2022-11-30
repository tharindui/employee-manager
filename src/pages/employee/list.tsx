import BaseLayout from "components/layouts/BaseLayout";
import EmployeeView from "components/organisms/employeeList";
import { getAllEmployeesAPI } from "shared/services/employee";
import { employeeDetailsType } from "shared/types/employeeDetailTypes";

const List = (employees: employeeDetailsType) => {
  console.log(878787878, employees);
  return <EmployeeView />;
};

export async function getStaticProps() {
  const employees = await getAllEmployeesAPI();

  console.log(999999, employees);
  return {
    props: {
      ...employees,
    },
  };
}
List.layout = BaseLayout;
export default List;
