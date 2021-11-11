import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '.';
import ListCompact from '../list/ListCompact';
import IDCard from '../icons/IdCard';
import { Button, CardActions, IconButton, Typography } from '@mui/material';
import MoreVert from '../icons/MoreVert';
import ExpandDown from '../icons/ExpandDown';

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card
    title="Secondary Accounts"
    action={
      <IconButton>
        <MoreVert />
      </IconButton>
    }
    footer={
      <CardActions
        sx={{
          bgcolor: "#f4f4f4",
          position: "relative",
        }}
      >
        <Button
          size="small"
          endIcon={<ExpandDown />}
          sx={{ color: "text.primary" }}
        >
          See 3 more
        </Button>
      </CardActions>
    }
  >
    <ListCompact
      list={[
        {
          icon: <IDCard sx={{ width: 20, height: 15 }} />,
          content: (
            <>
              <Typography>List title</Typography>
              <Typography sx={{ fontSize: 12 }}>List value</Typography>
            </>
          ),
        },
      ]}
    />
  </Card>
);

export const Primary = Template.bind({});
