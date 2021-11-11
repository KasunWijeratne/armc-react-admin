import { createStyles, Theme } from "@mui/material";
import { SIDENAV_WIDTH } from "../../config/constants";

export const useStyle = createStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export const sidenavPaperStyles = {
  "& .MuiDrawer-paper": {
    bgcolor: "background.default",
    border: "none",
    width: SIDENAV_WIDTH,
  },
};