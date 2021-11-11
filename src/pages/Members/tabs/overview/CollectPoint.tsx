import React from "react";
import { Typography } from "@mui/material";
import ListCompact from "../../../../components/list/ListCompact";
import CardLoose from "../../../../components/Card/CardLoose";
import Calendar from "../../../../components/icons/Calendar";
import CoinStackCircle from "../../../../components/icons/CoinStackCircle";

interface Props {
  count: number;
  data: {
    collected: number;
    total: number;
    totalTier: number;
  };
}

const CollectPoints = ({ count, data }: Props) => {
  return (
    <CardLoose
      titleText="Collect Points"
      titleIcon={<CoinStackCircle />}
      actionIcon={<Calendar />}
      actionText="2020-10-07 2.52 pm"
    >
      <ListCompact
        list={[
          {
            content: (
              <>
                <Typography color="GrayText">Collected Points</Typography>
              </>
            ),
            control: <Typography color="GrayText">{data.collected}</Typography>,
          },
          {
            content: (
              <>
                <Typography color="GrayText">Total Points</Typography>
              </>
            ),
            control: <Typography color="GrayText">{data.total}</Typography>,
          },
          {
            content: (
              <>
                <Typography color="GrayText">Total Tier Points</Typography>
              </>
            ),
            control: <Typography color="GrayText">{data.totalTier}</Typography>,
          },
        ]}
      />
    </CardLoose>
  );
};

export default CollectPoints;
