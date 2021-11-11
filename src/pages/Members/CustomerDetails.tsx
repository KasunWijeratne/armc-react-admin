import { Button, CardActions, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Card from "../../components/Card";
import ExpandDown from "../../components/icons/ExpandDown";
import LaptopSolid from "../../components/icons/LaptopSolid";
import MobileSolid from "../../components/icons/MobileSolid";
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
