import React, { useState } from 'react'
import { Divider, Grid, Tab, Tabs } from '@mui/material';
import PieChart from '../../../components/icons/PieChart';
import { Box } from '@mui/system';
import XML from '../../../components/icons/XML';
import CoinStack from '../../../components/icons/CoinStack';
import Medal from '../../../components/icons/Medal';
import Notes from '../../../components/icons/Notes';
import ClaimReward from './overview/ClaimReward';
import RedeemReward from "./overview/RedeemReward";
import CollectPoints from './overview/CollectPoint';
import PerformanceMatrices from './overview/PerformanceMatrices';
import MemberInsights from './overview/MemberInsights';
import UnlockedRewards from './overview/UnlockedRewards';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box py={4}>
          {children}
        </Box>
      )}
    </div>
  );
}

const MembersTabs = ({ data } : { data: any}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab icon={<PieChart />} iconPosition="start" label="Overview" />
        <Tab icon={<XML />} iconPosition="start" label="Activity Log" />
        <Tab icon={<CoinStack />} iconPosition="start" label="Points" />
        <Tab icon={<Medal />} iconPosition="start" label="Rewards" />
        <Tab icon={<Notes />} iconPosition="start" label="Notes" />
      </Tabs>
      <Divider />
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item lg={8}>
            <Grid container spacing={3}>
              <Grid item width={1}>
                <ClaimReward count={3} data={data.overview.claimRewards} />
              </Grid>
              <Grid item width={1}>
                <RedeemReward count={3} data={data.overview.redeemRewards} />
              </Grid>
              <Grid item width={1}>
                <CollectPoints count={3} data={data.overview.collectPoints} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <Grid container spacing={3}>
              <Grid item width={1}>
                <PerformanceMatrices data={data.overview.performanceMatrices} />
              </Grid>
              <Grid item width={1}>
                <MemberInsights data={data.overview.memberInsight} />
              </Grid>
              <Grid item width={1}>
                <UnlockedRewards data={data.overview.unlockedRewards} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
    </>
  );
}

export default MembersTabs;

