import {
  Drawer,
  List as MUIList,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import DashboardIcon from "../icons/Dashboard";
import UserGroup from "../icons/UserGroup";
import UserImage from "../../assets/images/download (3)@2x.png";
import Twitter from "../../assets/images/twitter.svg";
import SriLanka from "../../assets/images/coffee-cup.svg";
import { Box, styled } from "@mui/system";
import CoinStack from "../icons/CoinStack";
import Medal from "../icons/Medal";
import CreditCard from "../icons/CreditCard";
import MedalSolid from "../icons/MedalSolid";
import HandHoldingUSD from "../icons/HandHoldingUSD";
import Bell from "../icons/Bell";
import PieChart from "../icons/PieChart";
import ImageTextSelect from "../ImageTextSelect";
import { sidenavPaperStyles } from "./sidenav.style";
import { Context } from "../../context/navContext";

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
  <Box display="flex" flexDirection="column" height="95%">
    <Box display="flex" alignItems="center" px={5} py={5}>
      <Image src={Twitter} alt="Admin Flow" size="sm" />
      <Typography variant="h2" ml={2}>
        Admin Flow
      </Typography>
    </Box>
    <Box px={3} pb={3}>
      <ImageTextSelect
        value={"Sri Lanka"}
        items={[
          {
            text: "Sri Lanka",
            image: SriLanka,
          },
          {
            text: "Australia",
            image: UserImage,
          },
        ]}
      />
    </Box>
    <List sx={{ flex: 1 }}>
      {navItems.map((item, index) => (
        <ListItem button key={`item${index}`}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItem>
      ))}
    </List>
    <Box px={3}>
      <ImageTextSelect
        value={"Carmelo Gardner"}
        items={[
          {
            text: "Carmelo Gardner",
            image: UserImage,
          },
          {
            text: "Carmelo Gardner",
            image: UserImage,
          },
        ]}
      />
    </Box>
  </Box>
);

const Sidenav = ({ window }: Props) => {

  const { open, setOpen } = useContext<any>(Context);
  
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
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
