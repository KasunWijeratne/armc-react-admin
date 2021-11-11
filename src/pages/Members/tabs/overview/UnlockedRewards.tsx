import React from "react";
import Card from "../../../../components/Card";
import { Box } from "@mui/system";
import ListCompact from "../../../../components/list/ListCompact";
import { Typography } from "@mui/material";
import CoffeeCup from "../../../../assets/images/coffee-cup.svg";

function rewardImage(reward: string) {
  let image = null;

  switch (reward) {
    case "Coffee Mug":
      image = <img src={CoffeeCup} alt={reward} />;
      break;
    default:
      image = <img src={CoffeeCup} alt={reward} />;
  }

  return React.cloneElement(image, {style:{ width: 18, top: -3, position: 'relative' }});
}

const UnlockedRewards = ({ data }: { data: Record<string, string|number>[] }) => {
  return (
    <Card title="Performance Matrices" borderColor="info.main">
      <Box>
        <ListCompact
          list={data.map((item) => ({
            icon: rewardImage(item.name as string),
            content: <Typography color="GrayText">{item.name}</Typography>,
            control: <Typography>{item.points} Points</Typography>,
          }))}
        />
      </Box>
    </Card>
  );
};

export default UnlockedRewards;
