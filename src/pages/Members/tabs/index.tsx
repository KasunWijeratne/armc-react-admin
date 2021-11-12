import React, { Suspense, useState } from 'react'
import { CircularProgress, Divider, Tab, Tabs } from '@mui/material';
import PieChart from '../../../components/icons/PieChart';
import { Box } from '@mui/system';
import XML from '../../../components/icons/XML';
import CoinStack from '../../../components/icons/CoinStack';
import Medal from '../../../components/icons/Medal';
import Notes from '../../../components/icons/Notes';

// Lazyload tab content
const OverviewTab = React.lazy(() => import("./overview"));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const TabPanel = (props: TabPanelProps) => {
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
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab icon={<PieChart />} iconPosition="start" label="Overview" />
        <Tab icon={<XML />} iconPosition="start" label="Activity Log" />
        <Tab icon={<CoinStack />} iconPosition="start" label="Points" />
        <Tab icon={<Medal />} iconPosition="start" label="Rewards" />
        <Tab icon={<Notes />} iconPosition="start" label="Notes" />
      </Tabs>
      <Divider />
      {
        <Suspense fallback={<CircularProgress />}>
          <OverviewTab data={data} value={value} />{" "}
        </Suspense>
      }
    </>
  );
}

export default MembersTabs;

