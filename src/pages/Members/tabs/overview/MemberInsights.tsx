import React from "react";
import Card from "../../../../components/Card";
import { Box } from "@mui/system";
import ListCompact from "../../../../components/list/ListCompact";
import { Button, Typography } from "@mui/material";
import ShoppingBag from "../../../../components/icons/ShoppingBag";
import HourGlass from "../../../../components/icons/HourGlass";
import ExpandDown from "../../../../components/icons/ExpandDown";
import Calendar from "../../../../components/icons/Calendar";

const MemberInsights = ({ data }: { data: Record<string, string> }) => {
  return (
    <Card
      title="Member Insights"
      action={
        <Button
          size="small"
          startIcon={<Calendar sx={{width: 12}} />}
          endIcon={<ExpandDown />}
          sx={{ color: "text.primary" }}
        >
          7 Days
        </Button>
      }
      borderColor="info.main"
    >
      <Box>
        <ListCompact
          list={[
            {
              icon: <ShoppingBag />,
              content: (
                <Typography color="GrayText">Average Basket Size</Typography>
              ),
              control: (
                <Typography variant="h4">{data.avgBasketSize}</Typography>
              ),
            },
            {
              icon: <HourGlass />,
              content: (
                <Typography color="GrayText">
                  Average Number of Visits
                </Typography>
              ),
              control: <Typography variant="h4">{data.avgVisits}</Typography>,
            },
            {
              icon: <ShoppingBag />,
              content: (
                <Typography color="GrayText">Total Basket Size</Typography>
              ),
              control: (
                <Typography variant="h4">{data.totalBasketSize}</Typography>
              ),
            },
          ]}
        />
      </Box>
    </Card>
  );
};

export default MemberInsights;
