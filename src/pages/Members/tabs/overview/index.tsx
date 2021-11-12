import React from 'react'
import { Grid } from '@mui/material';
import { TabPanel } from '..';
import ClaimReward from './ClaimReward';
import RedeemReward from './RedeemReward';
import CollectPoints from './CollectPoint';
import PerformanceMatrices from './PerformanceMatrices';
import MemberInsights from './MemberInsights';
import UnlockedRewards from './UnlockedRewards';

const OverviewTab = ({ data, value } : { data: any, value: number }) => {
  return (
    <TabPanel value={value} index={0}>
      <Grid container spacing={3}>
        <Grid item lg={8} xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={12} xs={12}>
              <ClaimReward count={3} data={data.overview.claimRewards} />
            </Grid>
            <Grid item lg={12} xs={12}>
              <RedeemReward count={3} data={data.overview.redeemRewards} />
            </Grid>
            <Grid item lg={12} xs={12}>
              <CollectPoints count={3} data={data.overview.collectPoints} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={12} xs={12}>
              <PerformanceMatrices data={data.overview.performanceMatrices} />
            </Grid>
            <Grid item lg={12} xs={12}>
              <MemberInsights data={data.overview.memberInsight} />
            </Grid>
            <Grid item lg={12} xs={12}>
              <UnlockedRewards data={data.overview.unlockedRewards} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </TabPanel>
  );
}

export default React.memo(OverviewTab);
