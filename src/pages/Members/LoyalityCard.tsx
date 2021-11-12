import React from 'react'
import { IconButton, Typography } from '@mui/material';
import MoreVert from '../../components/icons/MoreVert';
import { Box } from '@mui/system';
import ListCompact from '../../components/list/ListCompact';
import IDCard from '../../components/icons/IdCard';
import CardBg from "../../assets/images/card.buttons–10@2x.png";
import Card from "../../components/Card";
import StatusSelector from '../../components/StatusSelector';
import ExpanderFooter from '../../components/Card/ExpanderFooter';

interface Props {
  count: number;
  cards: {
    id: string;
    type: string;
  }[];
}

const LoyalityCard = ({
  count,
  cards,
}: Props) => {
  return (
    <Card
      title="Loyality Card"
      action={
        <IconButton sx={{ color: "background.paper" }}>
          <MoreVert />
        </IconButton>
      }
      footer={<ExpanderFooter count={count} />}
      color="#fff"
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>
        {cards.map((card, i) => (
          <ListCompact
            key={`item${i}`}
            list={[
              {
                icon: <IDCard sx={{ width: 20, height: 15 }} />,
                content: (
                  <>
                    <Typography>{card.id}</Typography>
                    <Typography sx={{ fontSize: 12 }}>{card.type}</Typography>
                  </>
                ),
              },
            ]}
          />
        ))}
        <Box display="flex" justifyContent="flex-end">
          <StatusSelector value="active" handleChange={() => {}} />
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 160,
          zIndex: 0,
        }}
      >
        <img src={CardBg} alt={""} width="100%" />
      </Box>
    </Card>
  );
}

export default LoyalityCard
