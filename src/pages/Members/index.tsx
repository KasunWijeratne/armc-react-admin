import React from "react";
import {
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import LayoutTopTitle from "../../components/layouts/LayoutTopTitle";
import UserSettings from "./toolbar/UserSettings";
import TopBanner from "./top-banner";
import LoyalityCard from "./LoyalityCard";
import SecondaryAccounts from "./SecondaryAccounts";
import Tags from "./Tags";

const data = {
  name: "Tammy K. Stafford",
  id: "44400025222",
  lastSeen: "Last seen on July 28, 2021 3:16 PM",
  email: "TammyKStafford@dayrep.com",
  phone: "607-695-2028",
  type: "secondary",
  status: "active",
  redeemablePoints: 250,
  expiringPoints: 150,
  tierPoints: 250,
  tier: "silver",
  group: "Senior Citizen",
  loyalityCards: [
    {
      id: "1111258689",
      type: "Instant Card",
    },
    {
      id: "1111258689",
      type: "Instant Card",
    },
  ],
  secondaryAccounts: [
    {
      name: "David Leblanc",
    },
  ],
};

const MembersPage = () => {
  return (
    <LayoutTopTitle title="Members" toolbar={<UserSettings />}>
      <TopBanner data={data} />
      <Grid container>
        <Grid item display="flex" xl={3} lg={3} md={6} xs={12}>
          <Box p={5}>
            <Box mb={2.5}>
              <Typography variant="h2">About Member</Typography>
            </Box>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <LoyalityCard
                  count={data.loyalityCards.length}
                  cards={[data.loyalityCards[0]]}
                />
              </Grid>
              <Grid item md={12}>
                <SecondaryAccounts
                  count={3}
                  accounts={data.secondaryAccounts}
                />
              </Grid>
              <Grid item md={12}>
                <Tags
                  count={3}
                  tags={["Frequent Customer", "Family", "Honor"]}
                />
              </Grid>
            </Grid>
          </Box>
          <Divider orientation="vertical" flexItem />
        </Grid>
      </Grid>
    </LayoutTopTitle>
  );
};

export default MembersPage;
