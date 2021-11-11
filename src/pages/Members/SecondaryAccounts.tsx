import React from "react";
import { Button, CardActions, IconButton, Link, Typography } from "@mui/material";
import MoreVert from "../../components/icons/MoreVert";
import ExpandDown from "../../components/icons/ExpandDown";
import { Box } from "@mui/system";
import ListCompact from "../../components/list/ListCompact";
import Card from "../../components/Card";
import UserSolid from "../../components/icons/UserSolid";

interface Props {
  count: number;
  accounts: {
    name: string;
  }[];
}

const SecondaryAccounts = ({ count, accounts }: Props) => {
  return (
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
        {accounts.map((account) => (
          <ListCompact
            list={[
              {
                icon: <UserSolid />,
                content: <Typography>{account.name}</Typography>,
                control: (
                  <Link href="#" color="secondary" fontSize={14}>
                    Remove
                  </Link>
                ),
              },
            ]}
          />
        ))}
      </Box>
    </Card>
  );
};

export default SecondaryAccounts;
