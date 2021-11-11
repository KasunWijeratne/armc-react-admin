import React from "react";
import { Box, Paper } from "@mui/material";
import Sidenav, { sidenavWidth } from "./components/Sidenav";
import MembersPage from "./pages/Members";

function App() {
  return (
    <Box sx={{ display: "flex", height: "100%", bgcolor: ".pa" }}>
      <Box
        component="nav"
        sx={{
          width: {
            sm: sidenavWidth,
          },
          flexShrink: {
            sm: 0,
          },
          p: {
            sm: 2,
            xs: 0,
          },
        }}
        aria-label="main navigation"
      >
        <Sidenav />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: {
            sm: `calc(100% - ${sidenavWidth}px)`,
            xs: `100%`,
          },
          pl: {
            sm: 1,
            xs: 0,
          },
        }}
      >
        <Paper
          elevation={5}
          sx={{
            height: "100%",
            borderTopLeftRadius: {
              sm: 25,
              xs: 0,
            },
            borderBottomLeftRadius: {
              sm: 25,
              xs: 0,
            },
          }}
        >
          <MembersPage />
        </Paper>
      </Box>
    </Box>
  );
}

export default App;
