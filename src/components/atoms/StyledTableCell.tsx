import { TableCell, TableCellBaseProps } from "@mui/material";
import React from "react";

type StyledTableCellProps = {
  children: React.ReactNode;
};

function StyledTableCell({
  children,
  ...rest
}: StyledTableCellProps & TableCellBaseProps) {
  return (
    <TableCell
      {...rest}
      sx={{ border: 1, background: "#a2cf6e", borderBlockColor: "#a2cf6e" }}
      align="left"
    >
      {children}
    </TableCell>
  );
}

export default StyledTableCell;
