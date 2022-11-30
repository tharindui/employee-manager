import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "shared/hooks/hooks";
import { useEmployees } from "shared/redux/selectors/employeeSelector";
import { fetchEmployees } from "shared/redux/slices/employeeSlice";
import { removeEmployee } from "shared/redux/slices/removeEmployeeSlice";
import { useButtonStyles } from "styles/materialCSS/ButtonStyle";
import GridView from "./GridView";
import TableView from "./TableView";
import { BsFillGrid3X3GapFill, BsList } from "react-icons/bs";
interface Props {}

function EmployeeView(props: Props) {
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const buttonStyle = useButtonStyles();
  const { employees, error, loading } = useEmployees();

  const deleteCustomer = async (empId: number) => {
    await dispatch(removeEmployee(empId));
    await dispatch(fetchEmployees());
  };

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleViewChange = () => {
    setIsGridView(!isGridView);
  };

  if (loading) {
    return <Box>Loading...</Box>;
  }

  if (!loading && error) {
    return (
      <Box>
        <Typography variant="h4">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box display={"flex"} pb={3} alignItems="center" justifyContent="right">
        <Link href={`/employee/add`} passHref>
          <Button className={buttonStyle.ovalButton} variant="contained">
            Add employee
          </Button>
        </Link>
        {isGridView ? (
          <BsFillGrid3X3GapFill
            display={!loading && employees?.length == 0 ? "none" : "flex"}
            size={30}
            onClick={handleViewChange}
          />
        ) : (
          <BsList onClick={handleViewChange} size={30} />
        )}
      </Box>
      {!loading && employees?.length > 0 ? (
        <Box>
          {isGridView ? (
            <GridView deleteCustomer={deleteCustomer} items={employees} />
          ) : (
            <TableView deleteCustomer={deleteCustomer} employees={employees} />
          )}
        </Box>
      ) : (
        <Box mt={3} textAlign="center">
          <Typography variant="h4">Empty</Typography>{" "}
        </Box>
      )}
    </Box>
  );
}

export default EmployeeView;
