import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
  toolbar?: JSX.Element;
}

const LayoutTopTitle = ({ title, toolbar, children } : Props) => {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" sx={{ height: 120, p: 5 }}>
        <Typography variant="h1">{title}</Typography>
        {
          toolbar && toolbar
        }
      </Box>
      <Box sx={{
        overflow: 'scroll',
      }}>{children}</Box>
    </Box>
  );
}

export default LayoutTopTitle
