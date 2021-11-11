import { palatte } from "../colors";

declare module "@mui/material/Select" {
  interface SelectPropsVariantOverrides {
    borderless: true;
  }
}

export const MuiSelect = {
  styleOverrides: {
    root: {
      color: palatte.bgPrimary,
      boxShadow: "none",
      fontSize: 14,
      textTransform: "none",
    },
  },
};