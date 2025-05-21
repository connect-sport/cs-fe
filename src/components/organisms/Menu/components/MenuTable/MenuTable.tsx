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
import { useMenu } from "@/hooks/menu/useMenu";
import { MenuDto } from "@/dtos/menu.dto";

const MenuTable: FC = () => {
  const { menus, onRefetchMenus } = useMenu();
  const { openModal, closeModal } = useModal();
  const { showError, showInfo } = useSnackbar();

  const onEditMenu = (menu: MenuDto) => {
    openModal(MODAL_KEYS.CREATE_OR_UPDATE_MENU, {
      menu,
      onSuccess() {
        showInfo("Update menu success");
        closeModal();
        onRefetchMenus();
      },
      onError(err) {
        showError(err);
      },
      onClose() {
        closeModal();
      },
    });
  };

  const onDeleteMenu = (menu: MenuDto) => {
    openModal(MODAL_KEYS.DELETE_MENU, {
      data: {
        id: menu._id,
        name: menu.name,
      },
      onSuccess() {
        showInfo("Delete menu success");
        closeModal();
        onRefetchMenus();
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
          {(menus || []).map((menu: MenuDto, index: number) => (
            <TableRow
              key={menu._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {index}
              </TableCell>
              <TableCell align="right">{menu.name}</TableCell>
              <TableCell align="right">{menu.alias}</TableCell>
              <TableCell align="right">
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() => onEditMenu(menu)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  size="small"
                  onClick={() => onDeleteMenu(menu)}
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

export { MenuTable };
