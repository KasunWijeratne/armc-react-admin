import React from 'react'
import { Chip, Link } from '@mui/material';
import Card from "../../components/Card";
import { Box } from '@mui/system';
import ExpanderFooter from '../../components/Card/ExpanderFooter';

interface Props {
  count: number;
  tags: Array<string>;
}

const Tags = ({
  count,
  tags,
}: Props) => {
  return (
    <Card title="Tags" footer={<ExpanderFooter count={count} />}>
      <Box>
        {tags.map((tag, i) => (
          <Chip
            key={`item${i}`}
            label={tag}
            variant="outlined"
            sx={{ mr: 1 }}
          />
        ))}
        <Link href="#" color="secondary" fontSize={14}>
          Add
        </Link>
      </Box>
    </Card>
  );
}

export default Tags
