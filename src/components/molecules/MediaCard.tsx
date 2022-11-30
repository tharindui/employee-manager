import React from "react";
import Card from "@mui/material/Card";
import { BsFillTrashFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { employeeDetailsType } from "shared/types/employeeDetailTypes";
import { Box } from "@mui/system";
import Link from "next/link";
type cardProps = {
  onClickDeleteCustomer?: () => void;
};
function MediaCard(props: employeeDetailsType & cardProps) {
  const {
    firstName,
    lastName,
    email,
    photo,
    number,
    gender,
    _id,
    onClickDeleteCustomer,
  } = props;

  return (
    <Card component={Box} minHeight={340} maxHeight={340}>
      <CardMedia
        component="img"
        height="200"
        image={photo}
        alt="green iguana"
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="caption" component="div">
              <b>{`${firstName} ${lastName}`}</b>
            </Typography>
            <Typography variant="caption" component="div">
              <b>{email}</b>
            </Typography>
            <Typography variant="caption" component="div">
              <b>{number}</b>
            </Typography>
            <Typography variant="caption" component="div">
              <b>{gender == "M" ? "Male" : "Female"}</b>
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            display={"flex"}
            alignItems="end"
            justifyContent={"end"}
          >
            <Box>
              <BsFillTrashFill
                cursor={"pointer"}
                size={30}
                color="red"
                colorInterpolation="red"
                onClick={onClickDeleteCustomer}
              />
            </Box>
            <Link href={`/employee/edit/${_id}`} passHref>
              <FaUserEdit
                color="#a2cf6e"
                cursor={"pointer"}
                size={30}
              ></FaUserEdit>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}

export default MediaCard;
