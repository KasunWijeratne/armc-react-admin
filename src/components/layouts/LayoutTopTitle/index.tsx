import React, { useContext } from 'react';
import { IconButton, Theme, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import { Context as navContext } from '../../../context/navContext';
import Hamburger from '../../icons/Hamburger';

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
  toolbar?: JSX.Element;
}

const LayoutTopTitle = ({ title, toolbar, children } : Props) => {
  const { setOpen } = useContext<any>(navContext);
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{ height: 120, p: 5 }}
      >
        <Box display="flex" alignItems="center">
          {matches && (
            <IconButton
              color="secondary"
              sx={{ mr: 2 }}
              onClick={() => setOpen(true)}
            >
              <Hamburger />
            </IconButton>
          )}
          <Typography variant="h1">{title}</Typography>
        </Box>
        {toolbar && toolbar}
      </Box>
      <Box
        sx={{
          overflow: "scroll",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default LayoutTopTitle
