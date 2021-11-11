import { Button, CardActions, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import Card from "../../components/Card";
import ExpandDown from '../../components/icons/ExpandDown';
import LaptopSolid from '../../components/icons/LaptopSolid';
import MobileSolid from '../../components/icons/MobileSolid';
import ListCompact from '../../components/list/ListCompact';

interface Props {
  count: number;
  portals: {
    title: string;
    email: string;
  }[];
}

const CustomerPortal = ({
  count,
  portals,
}: Props) => {
  return (
    <Card
      title="Customer Portals"
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
        <ListCompact
          list={[
            {
              icon: <LaptopSolid />,
              content: (
                <>
                  <Typography color="GrayText">{portals[0].title}</Typography>
                  <Typography sx={{wordBreak: 'break-word'}}>{portals[0].email}</Typography>
                </>
              ),
              control: (
                <Link href="#" color="secondary" fontSize={14}>
                  Reset Password
                </Link>
              ),
            },
            {
              icon: <MobileSolid />,
              content: (
                <>
                  <Typography color="GrayText">{portals[1].title}</Typography>
                  <Typography>{portals[1].email}</Typography>
                </>
              ),
            },
          ]}
        />
      </Box>
    </Card>
  );
}

export default CustomerPortal
