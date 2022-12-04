import { Grid } from "@mui/material";
import MediaCard from "components/molecules/MediaCard";
import { employeeDetailsType } from "shared/types/employeeDetailTypes";
type gridViewProps = {
  items: employeeDetailsType[];
  deleteCustomer: (empId: number) => void;
};

function GridView({ items, deleteCustomer }: gridViewProps) {
  return (
    <Grid container spacing={3}>
      {items.map((item: employeeDetailsType) => (
        <Grid key={item._id} item md={3} lg={3} sm={12} xs={12}>
          <MediaCard
            onClickDeleteCustomer={() => deleteCustomer(item._id || 0)}
            {...item}
          ></MediaCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default GridView;
