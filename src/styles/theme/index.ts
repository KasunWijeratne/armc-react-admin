import { createTheme } from "@mui/material/styles";
import { palatte } from "./colors";
import { MuiButton } from "./overrides";
import { typography } from "./typography";

const { primary, secondary, error, warning, info } = palatte;

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
  },
  components: {
    MuiButton: {
      ...MuiButton,
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
  },
  typography,
});
