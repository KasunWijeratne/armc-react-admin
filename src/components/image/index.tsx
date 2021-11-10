import React from "react";
import { Box } from "@mui/system";

interface Props {
  src: string;
  alt: string;
  size?: 'xs' | 'md' | 'lg';
  round?: boolean;
}

const setSize = (size: string) => {
  if(size === 'xs') {
    return 24;
  } else if (size === 'md') {
    return 75;
  }
  return 100;
}

const Image = ({ src, alt, round, size = 'lg', ...rest }: Props) => {
  return (
    <Box
      sx={{
        borderRadius: round ? "100%" : 0,
        width: setSize(size),
        height: setSize(size),
        position: 'relative',
        overflow: 'hidden',
        '& img': {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: '100%',
          margin: 'auto',
        }
      }}
    >
      <img src={src} alt={alt} />
    </Box>
  );
};

export default Image;
