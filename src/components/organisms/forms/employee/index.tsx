import { useFormik } from "formik";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Alert, Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import MaterialSelectField from "components/molecules/MaterialSelectField";
import MaterialTextField from "components/molecules/MaterialTextField";
import { useAppDispatch } from "shared/hooks/hooks";
import {
  useEmployee,
  usePostEmployee,
  useUpdateEmployee,
} from "shared/redux/selectors/employeeSelector";
import { fetchEmployeeById } from "shared/redux/slices/employeeByIdSlice";
import { postEmployees } from "shared/redux/slices/postEmployeeSlice";
import { updateEmployee } from "shared/redux/slices/updateEmployeeSlice";
import { employeeDetailsType } from "shared/types/employeeDetailTypes";
import { employeeSchema } from "shared/validationSchema/employeeSchema";
import Link from "next/link";

const useEmployeeForm = (type: string) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { empId } = router.query;
  useEffect(() => {
    async function fetchData() {
      if (empId && type === "update") {
        await dispatch(fetchEmployeeById(empId as string));
      }
    }
    fetchData();
  }, [dispatch, empId, type]);

  const { employees, loading } = useEmployee();
  console.log(employees);
  const formik = useFormik({
    enableReinitialize: true,

    initialValues: {
      firstName: (type === "update" && employees?.firstName) || "",
      lastName: (type === "update" && employees?.lastName) || "",
      email: (type === "update" && employees?.email) || "",
      number: (type === "update" && employees?.number) || "",
      gender: (type === "update" && employees?.gender) || "M",
      photo: (type === "update" && employees?.photo) || "",
    } as employeeDetailsType,

    validationSchema: employeeSchema,
    async onSubmit(values, { resetForm }) {
      if (type === "update") {
        await dispatch(updateEmployee({ ...values, _id: employees._id }));
        await dispatch(fetchEmployeeById(empId as string));
        resetForm();
      } else {
        await dispatch(postEmployees(values));
        resetForm();
      }

      try {
      } catch (error: any) {}
    },
  });

  return { formik };
};

type EmployeeForm = { type: string };

const EmployeeForm = ({ type }: EmployeeForm) => {
  const { formik } = useEmployeeForm(type);
  const { loading, error, message } = usePostEmployee();
  const {
    loading: updating,
    error: errorOnUpdate,
    message: updateMessage,
  } = useUpdateEmployee();
  return (
    <Box display={"flex"} justifyContent="center" alignItems="center">
      <Box width={500}>
        <Box marginBottom={2} display={"block"} textAlign="right">
          <Link href={"/employee/list"} passHref>
            <Button variant="contained">List View</Button>
          </Link>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <Card px={5} py={5} component={Box} borderRadius="100%">
            <MaterialTextField
              value={formik.values.firstName || ""}
              onChange={formik.handleChange}
              error={Boolean(
                formik.touched.firstName && formik.errors.firstName
              )}
              helperText={
                formik.touched.firstName && formik.errors.firstName
                  ? formik.errors.email
                  : ""
              }
              name="firstName"
              label="First Name"
            />
            <MaterialTextField
              value={formik.values.lastName || ""}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              helperText={
                formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : ""
              }
              name="lastName"
              label="Last Name"
            />
            <MaterialTextField
              value={formik.values.email || ""}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.email && formik.errors.email)}
              helperText={
                formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : ""
              }
              name="email"
              label="Email"
            />
            <MaterialTextField
              value={formik.values.number || ""}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.number && formik.errors.number)}
              helperText={
                formik.touched.number && formik.errors.number
                  ? formik.errors.number
                  : ""
              }
              name="number"
              label="Phone"
            />
            <MaterialTextField
              value={formik.values.photo || ""}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.photo && formik.errors.photo)}
              helperText={
                formik.touched.photo && formik.errors.photo
                  ? formik.errors.photo
                  : ""
              }
              name="photo"
              label="Image URL"
            />
            <MaterialSelectField
              items={[
                { text: "Male", value: "M" },
                { text: "Female", value: "F" },
              ]}
              labelId="gender"
              defaultValue="M"
              value={formik.values.gender}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.gender && formik.errors.gender)}
              helperText={
                formik.touched.gender && formik.errors.gender
                  ? formik.errors.gender
                  : ""
              }
              name="gender"
              label="Gender"
            />
            <Box display="flex" mb={1} justifyContent={"right"}>
              <Button
                sx={{ minWidth: 180, marginTop: 1, padding: 1 }}
                variant="outlined"
                disabled={formik.isSubmitting}
                type="submit"
              >
                {type == "add" ? "Add" : "Save"}
              </Button>
            </Box>
            {type === "add" && message && (
              <Alert severity="success">{message}</Alert>
            )}

            {type === "add" && error && <Alert severity="error">{error}</Alert>}

            {type === "update" && updateMessage && (
              <Alert severity="success">{updateMessage}</Alert>
            )}

            {type === "update" && errorOnUpdate && (
              <Alert severity="error">{errorOnUpdate}</Alert>
            )}
          </Card>
        </form>
      </Box>
    </Box>
  );
};

export default EmployeeForm;
