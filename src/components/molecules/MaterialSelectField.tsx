import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { SelectInputProps } from "@mui/material/Select/SelectInput";

type MaterialSelectFieldProps = { value: string; text: string };

type InputProps = {
  label: string;
  value: string;
  helperText: string;
  items: Array<MaterialSelectFieldProps>;
};

function MaterialSelectField({
  label,
  value,
  items,
  helperText,
  error,
  ...rest
}: InputProps & SelectProps) {
  return (
    <Grid container component={Box} my={1} spacing={1}>
      <Grid justifyItems={"center"} alignItems="center" display="flex" item xs>
        <InputLabel id={label}>{label}</InputLabel>
      </Grid>
      <Grid item>
        <FormControl error={error} variant="filled" sx={{ minWidth: 225 }}>
          <Select fullWidth value={value} {...rest}>
            {items.map((item: MaterialSelectFieldProps) => (
              <MenuItem key={item.value} value={item.value}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
          <Box color={"red"}>{helperText}</Box>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default MaterialSelectField;
