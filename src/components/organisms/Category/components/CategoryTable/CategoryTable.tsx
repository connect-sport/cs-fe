"use client";

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
import { useModal } from "@/stores/contexts/ModalContext";
import { MODAL_KEYS } from "@/constants/modalContentMap";
import { useSnackbar } from "@/stores/contexts/SnackBarContext";

const CategoryTable: FC = () => {
  const { categories, onRefetchCategories } = useCategory();
  const { openModal, closeModal } = useModal();
  const { showError, showInfo } = useSnackbar();

  const onEditCategory = (category: CategoryDto) => {
    openModal(MODAL_KEYS.CREATE_OR_UPDATE_CATEGORY, {
      category,
      onSuccess() {
        showInfo("Update category success");
        closeModal();
        onRefetchCategories();
      },
      onError(err) {
        showError(err);
      },
      onClose() {
        closeModal();
      },
    });
  };

  const onDeleteCategory = (category: CategoryDto) => {
    openModal(MODAL_KEYS.DELETE_CATEGORY, {
      data: {
        id: category._id,
        name: category.name,
      },
      onSuccess() {
        showInfo("Delete category success");
        closeModal();
        onRefetchCategories();
      },
      onError(err) {
        showError(err);
      },
      onClose() {
        closeModal();
      },
    });
  };

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
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() => onEditCategory(category)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  size="small"
                  onClick={() => onDeleteCategory(category)}
                >
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
