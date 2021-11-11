import React from 'react'
import { Button, CardActions } from '@mui/material';
import ExpandDown from '../icons/ExpandDown';

const ExpanderFooter = ({ count } : { count: number}) => {
  return (
    <CardActions
      sx={{
        bgcolor: "background.default",
        position: "relative",
      }}
    >
      <Button
        size="small"
        endIcon={<ExpandDown />}
        sx={{ color: "text.primary" }}
      >
        See {count} more
      </Button>
    </CardActions>
  );
}

export default ExpanderFooter
