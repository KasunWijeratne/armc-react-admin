import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "../../components/Card";
import ExpanderFooter from "../../components/Card/ExpanderFooter";
import ListCompact from "../../components/list/ListCompact";

interface Props {
  count: number;
  details: {
    title: string;
    text: string;
    icon: JSX.Element;
  }[];
}

const CustomerDetails = ({ count, details }: Props) => {
  return (
    <Card
      title="Customer Details"
      footer={<ExpanderFooter count={count} />}
    >
      <Box>
        <ListCompact
          list={details.map((detail) => ({
            icon: detail.icon,
            content: (
              <>
                <Typography color="GrayText">{detail.title}</Typography>
                <Typography sx={{ wordBreak: "break-word" }}>
                  {detail.text}
                </Typography>
              </>
            ),
          }))}
        />
      </Box>
    </Card>
  );
};

export default CustomerDetails;
