import {
  BaseTextFieldProps,
  Box,
  Grid,
  InputLabel,
  TextField,
  TextFieldProps,
} from "@mui/material";

type InputProps = {
  label: string;
};

function MaterialTextField({
  label,
  ...rest
}: InputProps & TextFieldProps & BaseTextFieldProps) {
  return (
    <Grid container component={Box} my={1} spacing={1}>
      <Grid justifyItems={"center"} alignItems="center" display="flex" item xs>
        <InputLabel id={label}>{label}</InputLabel>
      </Grid>
      <Grid item>
        <TextField
          sx={{ minWidth: 225 }}
          {...rest}
          fullWidth
          variant="filled"
        />
      </Grid>
    </Grid>
  );
}

export default MaterialTextField;
