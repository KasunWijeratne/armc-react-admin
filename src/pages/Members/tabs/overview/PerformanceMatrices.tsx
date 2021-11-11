import React from "react";
import Card from "../../../../components/Card";
import { Box } from "@mui/system";
import ListCompact from "../../../../components/list/ListCompact";
import Heartbeat from "../../../../components/icons/Heartbeat";
import { Typography } from "@mui/material";
import Running from "../../../../components/icons/Running";

const PerformanceMatrices = ({ data }: { data: Record<string, string> }) => {
  return (
    <Card title="Performance Matrices" borderColor="info.main">
      <Box>
        <ListCompact
          list={[
            {
              icon: <Heartbeat />,
              content: (
                <Typography color="GrayText">
                  Customer Lifetime Value
                </Typography>
              ),
              control: (
                <Typography variant="h4">{data.lifetimeValue}</Typography>
              ),
            },
            {
              icon: <Running sx={{ width: 20, height: 15 }} />,
              content: <Typography color="GrayText">Risk of Churn</Typography>,
              control: <Typography variant="h4">{data.riskOfChum}</Typography>,
            },
          ]}
        />
      </Box>
    </Card>
  );
};

export default PerformanceMatrices;
