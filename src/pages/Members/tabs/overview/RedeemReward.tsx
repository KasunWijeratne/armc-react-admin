import React from "react";
import { Typography } from "@mui/material";
import ListCompact from "../../../../components/list/ListCompact";
import GiftCircle from "../../../../components/icons/GiftCircle";
import CardLoose from "../../../../components/Card/CardLoose";
import Calendar from "../../../../components/icons/Calendar";

interface Props {
  count: number;
  data: {
    name: string;
    points: number;
    code: string;
  };
}

const RedeemReward = ({ count, data }: Props) => {
  return (
    <CardLoose
      titleText="Redeem Reward"
      titleIcon={<GiftCircle />}
      actionIcon={<Calendar />}
      actionText="2020-10-07 2.52 pm"
    >
      <ListCompact
        list={[
          {
            content: (
              <>
                <Typography color="GrayText">Reward Name</Typography>
              </>
            ),
            control: <Typography color="GrayText">{data.name}</Typography>,
          },
          {
            content: (
              <>
                <Typography color="GrayText">Redeemed Points</Typography>
              </>
            ),
            control: <Typography color="GrayText">{data.points}</Typography>,
          },
          {
            content: (
              <>
                <Typography color="GrayText">Voucher Code</Typography>
              </>
            ),
            control: <Typography color="GrayText">{data.code}</Typography>,
          },
        ]}
      />
    </CardLoose>
  );
};

export default RedeemReward;
