import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LayoutTopTitle from "../../components/layouts/LayoutTopTitle";
import UserSettings from "./toolbar/UserSettings";
import TopBanner from "./top-banner";
import LoyalityCard from "./LoyalityCard";
import SecondaryAccounts from "./SecondaryAccounts";
import Tags from "./Tags";
import CustomerPortal from "./CustomerPortal";
import Location from "../../components/icons/Location";
import Gender from "../../components/icons/Gender";
import Map from "../../components/icons/Map";
import Calendar from "../../components/icons/Calendar";
import Cake from "../../components/icons/Cake";
import Flight from "../../components/icons/Flight";
import CustomerDetails from "./CustomerDetails";
import MembersTabs from "./tabs";

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
  tags: ["Frequent Customer", "Family", "Honor"],
  customerPortals: [
    {
      title: "Web Portal",
      email: "TammyKStafford@dayrep.com",
    },
    {
      title: "Mobile App",
      email: "-",
    },
  ],
  customerDetails: [
    {
      title: "Address",
      text: "TammyKStafford@dayrep.com",
      icon: <Location />,
    },
    {
      title: "Gender",
      text: "Female",
      icon: <Gender />,
    },
    {
      title: "Location",
      text: "Cameron",
      icon: <Map />,
    },
    {
      title: "Created on",
      text: "July 28, 2021 3:16 PM",
      icon: <Calendar />,
    },
    {
      title: "Date of Birth",
      text: "February 07, 1996",
      icon: <Cake />,
    },
    {
      title: "Caribbean Airline Number",
      text: "4521023654",
      icon: <Flight />,
    },
  ],
  tabData: {
    overview: {
      claimRewards: {
        name: "Water Resistant Bag",
        points: 10,
        code: "VZ125",
      },
      redeemRewards: {
        name: "Water Resistant Bag",
        points: 10,
        code: "VZ125",
      },
      collectPoints: {
        collected: 10,
        total: 160,
        totalTier: 250,
      },
      performanceMatrices: {
        lifetimeValue: "$153.86",
        riskOfChum: "11.09%",
      },
      memberInsight: {
        avgBasketSize: "$153.86",
        avgVisits: "11.09%",
        totalBasketSize: "11.09%",
      },
      unlockedRewards: [
        {
          name: "Coffee Mug",
          points: 50,
        },
        {
          name: "Coffee Mug",
          points: 50,
        },
        {
          name: "Coffee Mug",
          points: 50,
        },
      ],
    },
  },
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
                <Tags count={3} tags={data.tags} />
              </Grid>
              <Grid item md={12}>
                <CustomerPortal count={3} portals={data.customerPortals} />
              </Grid>
              <Grid item md={12}>
                <CustomerDetails count={3} details={data.customerDetails} />
              </Grid>
            </Grid>
          </Box>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item xl={9} lg={9} sm={12} xs={12}>
          <Box p={5}>
            <Box mt={-1}>
              <MembersTabs data={data.tabData} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </LayoutTopTitle>
  );
};

export default MembersPage;
