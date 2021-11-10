import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import ExpandDown from "../../../components/icons/ExpandDown";

const AccountStatusControl = () => {
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
      <Button
        variant="round"
        color="primary"
        aria-controls="user-settings"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        endIcon={<ExpandDown />}
        onClick={handleClick}
      >
        Active
      </Button>
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

export default AccountStatusControl;
