import React from 'react'
import { Button, CardActions, Chip, Link } from '@mui/material';
import Card from "../../components/Card";
import ExpandDown from '../../components/icons/ExpandDown';
import { Box } from '@mui/system';

interface Props {
  count: number;
  tags: Array<string>;
}

const Tags = ({
  count,
  tags,
}: Props) => {
  return (
    <Card
      title="Tags"
      footer={
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
      }
    >
      <Box>
        {tags.map((tag) => (
          <Chip label={tag} variant="outlined" sx={{ mr: 1 }} />
        ))}
        <Link href="#" color="secondary" fontSize={14}>Add</Link>
      </Box>
    </Card>
  );
}

export default Tags
