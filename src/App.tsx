import React from "react";
import { Box } from "@mui/material";
import Sidenav, { sidenavWidth } from "./components/sidenav";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="nav"
        sx={{ width: { sm: sidenavWidth }, flexShrink: { sm: 0 } }}
        aria-label="main navigation"
      >
        <Sidenav />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${sidenavWidth}px)` },
        }}
      ></Box>
    </Box>
  );
}

export default App;
