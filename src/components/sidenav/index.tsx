import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  Toolbar,
} from "@mui/material";
import React from "react";
import DashboardIcon from "../icons/Dashboard";
import UserGroup from "../icons/UserGroup";
import Image from "../image";
import UserImage from "../../assets/images/download (3)@2x.png";
import { Box } from "@mui/system";

export const sidenavWidth = 265;

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
    icon: <DashboardIcon />,
  },
  {
    title: "Rewards",
    icon: <DashboardIcon />,
  },
  {
    title: "Cards",
    icon: <DashboardIcon />,
  },
  {
    title: "Tiers",
    icon: <DashboardIcon />,
  },
  {
    title: "Transactions",
    icon: <DashboardIcon />,
  },
  {
    title: "Notifications",
    icon: <DashboardIcon />,
  },
  {
    title: "Analytics",
    icon: <DashboardIcon />,
  },
];

interface Props {
  window?: () => Window;
  theme: Theme;
}

const drawer = (
  <div>
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
  </div>
);

const Sidenav = ({ window, theme }: Props) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        padding: theme.spacing(2),
      }}
    >
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
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidenavWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: sidenavWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidenav;
