import { createTheme } from "@mui/material/styles";
import { palatte } from "./colors";
import { MuiButton, MuiCard, MuiChip } from "./overrides";
import { typography } from "./typography";

const { primary, secondary, error, warning, info, bgPrimary, bgSecondary } = palatte;

export const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: error,
    },
    warning: {
      main: warning,
    },
    info: {
      main: info,
    },
    background: {
      default: bgSecondary,
      paper: bgPrimary,
    },
  },
  components: {
    MuiButton: {
      ...MuiButton as any,
      variants: [
        {
          props: { variant: "round", color: "primary" },
          style: {
            borderRadius: 19,
            background: palatte.primary,
            "&:hover": {
              background: palatte.primary,
            },
          },
        },
      ],
    },
    MuiCard: {
      ...MuiCard,
    },
    MuiChip: {
      ...MuiChip,
    }
  },
  typography,
});
