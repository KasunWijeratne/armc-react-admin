import {
  Button,
  Drawer,
  List as MUIList,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React, { useState } from "react";
import DashboardIcon from "../icons/Dashboard";
import UserGroup from "../icons/UserGroup";
import Image from "../Image";
import UserImage from "../../assets/images/download (3)@2x.png";
import { Box, styled } from "@mui/system";
import CoinStack from "../icons/CoinStack";
import Medal from "../icons/Medal";
import CreditCard from "../icons/CreditCard";
import MedalSolid from "../icons/MedalSolid";
import HandHoldingUSD from "../icons/HandHoldingUSD";
import Bell from "../icons/Bell";
import PieChart from "../icons/PieChart";

export const sidenavWidth = 290;

const navItems = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Members",
    icon: <UserGroup />,
  },
  {
    title: "Points",
    icon: <CoinStack />,
  },
  {
    title: "Rewards",
    icon: <Medal />,
  },
  {
    title: "Cards",
    icon: <CreditCard />,
  },
  {
    title: "Tiers",
    icon: <MedalSolid />,
  },
  {
    title: "Transactions",
    icon: <HandHoldingUSD />,
  },
  {
    title: "Notifications",
    icon: <Bell />,
  },
  {
    title: "Analytics",
    icon: <PieChart />,
  },
];

interface Props {
  window?: () => Window;
}

const List = styled(MUIList)(({ theme }) => ({
  "& .MuiListItem-root": {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  "& .MuiListItemIcon-root": {
    minWidth: 30,
  },
  "& .MuiListItemText-root": {
    fontSize: 20,
  },
}));

const drawer = (
  <Box>
    <Toolbar />
    <List>
      {navItems.map((item, index) => (
        <ListItem button key={`item${index}`}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
    <List>
      <ListItem>
        <ListItemIcon>
          <Image src={UserImage} alt="User" size="xs" round />
        </ListItemIcon>
        <ListItemText primary={"Carmelo Gardner"} />
      </ListItem>
    </List>
  </Box>
);

const sidenavPaperStyles = {
  "& .MuiDrawer-paper": {
    bgcolor: "background.default",
    border: 'none',
    width: sidenavWidth,
  },
};

const Sidenav = ({ window }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          p: 2,
          ...sidenavPaperStyles,
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          p: 2,
          ...sidenavPaperStyles,
        }}
        open
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Sidenav;
