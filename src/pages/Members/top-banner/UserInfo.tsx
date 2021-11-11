import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "../../../components/Image/Image";

interface Props {
  image: string;
  name: string;
  id: string;
  lastSeen: string;
}

const UserInfo = ({ image, name, id, lastSeen } : Props) => {
  return (
    <Box display="flex" alignItems="center" width={1} p={5}>
      <Image src={image} alt={name} size="md" />
      <Box ml={2}>
        <Typography variant="h2">{name}</Typography>
        <Typography>{id}</Typography>
        <Typography variant="body2">{lastSeen}</Typography>
      </Box>
    </Box>
  );
};

export default React.memo(UserInfo);