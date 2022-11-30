import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { employeeDetailsType } from "shared/types/employeeDetailTypes";
import Image from "next/image";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import StyledTableCell from "components/atoms/StyledTableCell";
import { BsFillTrashFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";

type tableProps = {
  employees: employeeDetailsType[];
  deleteCustomer: (empId: number) => void;
};
export default function TableView({ employees, deleteCustomer }: tableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Image</StyledTableCell>

            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Phone</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees?.map((row) => (
            <TableRow key={row._id}>
              <TableCell sx={{ border: 1 }} align="center">
                <Image
                  height={75}
                  alt={row.firstName}
                  src={row.photo}
                  width={75}
                ></Image>
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                <b> {`${row.firstName} `}</b>
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                <b>{`${row.lastName} `}</b>
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                <b>{row.email}</b>
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                <b>{row.number}</b>
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                <b>{row.gender === "M" ? "Male" : "Female"}</b>
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                <Box
                  display={"flex"}
                  justifyContent="center"
                  alignItems={"center"}
                >
                  <Link href={`/employee/edit/${row._id}`} passHref>
                    <Button
                      sx={{ height: 25 }}
                      color="secondary"
                      variant="contained"
                    >
                      Edit{" "}
                    </Button>
                  </Link>

                  <Box>
                    <BsFillTrashFill
                      cursor={"pointer"}
                      size={30}
                      color="red"
                      colorInterpolation="red"
                      onClick={() => deleteCustomer(row._id || 0)}
                    />
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
