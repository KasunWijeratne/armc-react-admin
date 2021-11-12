import React from "react";
import { IconButton, Link, Typography } from "@mui/material";
import MoreVert from "../../components/icons/MoreVert";
import { Box } from "@mui/system";
import ListCompact from "../../components/list/ListCompact";
import Card from "../../components/Card";
import UserSolid from "../../components/icons/UserSolid";
import ExpanderFooter from "../../components/Card/ExpanderFooter";

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
      footer={<ExpanderFooter count={count} />}
    >
      <Box>
        {accounts.map((account, i) => (
          <ListCompact
            key={`item${i}`}
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
