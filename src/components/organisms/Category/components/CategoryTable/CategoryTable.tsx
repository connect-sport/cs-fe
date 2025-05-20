import { CategoryDto } from "@/dtos/category.dto";
import { useCategory } from "@/hooks/category/useCategory";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { FC } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const CategoryTable: FC = () => {
  const { categories } = useCategory();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Alias</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(categories || []).map((category: CategoryDto, index: number) => (
            <TableRow
              key={category._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="right">{category.name}</TableCell>
              <TableCell align="right">{category.alias}</TableCell>
              <TableCell align="right">
                <IconButton color="primary" size="small">
                  <EditIcon />
                </IconButton>
                <IconButton color="error" size="small">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { CategoryTable };
