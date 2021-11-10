import React from 'react'
import { MenuItem, Select } from '@mui/material';

interface Props {
  value?: string;
  handleChange: () => void;
}

const StatusSelector = ({
  value,
  handleChange,
}: Props) => {
  return (
    <Select
      value={value}
      onChange={handleChange}
      color="secondary"
      sx={{
        bgcolor: 'primary.main',
        borderRadius: 19,
        height: 35,
        color: '#fff'
      }}
    >
      <MenuItem value="active">Active</MenuItem>
      <MenuItem value="inactive">Inactive</MenuItem>
    </Select>
  );
}

export default StatusSelector
