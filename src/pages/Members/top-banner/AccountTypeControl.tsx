import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVert from "../../../components/icons/MoreVert";

const AccountTypeControl = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        color="secondary"
        sx={{ position: "absolute", top: -10, right: 0 }}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Convert to Primary</MenuItem>
      </Menu>
    </>
  );
};

export default AccountTypeControl;
