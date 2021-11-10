import { palatte } from "../colors";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    round: true;
  }
}

export const MuiButton = {
  styleOverrides: {
    root: {
      color: palatte.bgPrimary,
      boxShadow: "none",
      fontSize: 14,
    },
  },
};