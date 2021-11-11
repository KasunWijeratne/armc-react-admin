import React from 'react'
import { MenuItem, Select, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from '../Image';

const ImageTextSelect = ({
  items,
  value,
} : { items: Record<string, any>[], value: string; }) => {
  return (
    <Select
      value={value}
      onChange={() => {}}
      sx={{
        bgcolor: "transparent",
        height: 35,
        width: "100%",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
    >
      {items.map((item) => (
        <MenuItem value={item.text}>
          <Box display="flex">
            <Image src={item.image} alt="User" size="xs" round />
            <Typography ml={1}>{item.text}</Typography>
          </Box>
        </MenuItem>
      ))}
    </Select>
  );
}

export default ImageTextSelect
