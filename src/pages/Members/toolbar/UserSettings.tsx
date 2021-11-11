import React, { useState } from "react";
import { Button, Menu, MenuItem, Theme, useMediaQuery } from "@mui/material";
import UserCogSolid from "../../../components/icons/UserCogSolid";
import ExpandDown from "../../../components/icons/ExpandDown";

const UserSettings = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
    const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        aria-controls="user-settings"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        startIcon={<UserCogSolid />}
        endIcon={<ExpandDown />}
        onClick={handleClick}
      >
        { matches ? '' : 'User Settings' }
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default UserSettings;
