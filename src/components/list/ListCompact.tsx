import React, { ReactElement } from 'react'
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Box } from '@mui/system';

interface Props {
  list: {
    content: string | number | JSX.Element;
    icon?: ReactElement;
    control?: JSX.Element;
  }[];
  control?: JSX.Element;
  subheader?: string;
}

const ListCompact = ({
  subheader,
  list,
  control,
} : Props) => {
  return (
    <List
      subheader={
        subheader ? (
          <ListSubheader
            component="div"
            sx={{
              p: 0,
              mb: 1,
              lineHeight: 1,
              bgcolor: "transparent",
              typography: "body2",
            }}
          >
            <Box display="flex" justifyContent="space-between">
              {subheader}
              {control || null}
            </Box>
          </ListSubheader>
        ) : null
      }
      sx={{
        p: 0,
      }}
    >
      {list.map((item) => (
        <ListItem
          sx={{
            p: 0,
            lineHeight: 1,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box display="flex" alignItems="center">
            {item.icon && (
              <ListItemIcon
                sx={{
                  minWidth: 30,
                }}
              >
                {item.icon}
              </ListItemIcon>
            )}
            <ListItemText sx={{ m: 0 }} primary={item.content} />
          </Box>
          {item.control && item.control}
        </ListItem>
      ))}
    </List>
  );
}

export default ListCompact
