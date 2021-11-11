import React from "react";
import { Box, Paper } from "@mui/material";
import MembersPage from "./pages/Members";
import { SIDENAV_WIDTH } from "./config/constants";
import Sidenav from "./components/sidenav";

function App() {
  return (
    <Box sx={{ display: "flex", height: "100%" }}>
      <Box
        component="nav"
        sx={{
          width: {
            md: SIDENAV_WIDTH,
          },
          flexShrink: {
            sm: 0,
          },
          p: {
            md: 2,
            sm: 0,
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
            md: `calc(100% - ${SIDENAV_WIDTH}px)`,
            sm: `100%`,
          },
          pl: {
            md: 1,
            sm: 0,
          },
        }}
      >
        <Paper
          elevation={5}
          sx={{
            height: "100%",
            borderTopLeftRadius: {
              md: 25,
              sm: 0,
            },
            borderBottomLeftRadius: {
              md: 25,
              sm: 0,
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
