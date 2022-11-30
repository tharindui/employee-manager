import BaseLayout from "components/layouts/BaseLayout";
import EmployeeView from "components/organisms/employeeList";
import { fetchEmployees } from "shared/redux/slices/employeeSlice";
import { wrapper } from "shared/redux/store";
import { employeeDetailsType } from "shared/types/employeeDetailTypes";

const List = () => {
  return <EmployeeView />;
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(fetchEmployees());
  }
);

List.layout = BaseLayout;
export default List;
