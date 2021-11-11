import React from 'react';
import { Box } from '@mui/system';
import UserImage from '../../../assets/images/Ellipse 16@2x.png';
import SilverMedal from '../../../assets/images/silver-medal.svg';
import { Divider, Grid, Link, Typography, } from '@mui/material';
import UserInfo from './UserInfo';
import OtherInfo from './OtherInfo';
import Envelope from '../../../components/icons/Envelope';
import Phone from '../../../components/icons/Phone';
import AccountTypeControl from './AccountTypeControl';
import AccountStatusControl from './AccountStatusControl';
import Image from '../../../components/Image/Image';

interface Props {
  data: {
    name: string;
    id: string;
    lastSeen: string;
    email: string;
    phone: string;
    type: string;
    status: string;
    redeemablePoints: number;
    expiringPoints: number;
    tierPoints: number;
    tier: string;
    group: string;
  };
}

const TopBanner = ({ data } : Props) => {
  const {
    name,
    id,
    lastSeen,
    email,
    phone,
    type,
    redeemablePoints,
    expiringPoints,
    tierPoints,
    tier,
    group,
  } = data;

  return (
    <Box
      sx={{
        bgcolor: "background.default",
      }}
    >
      <Grid container>
        <Grid item display="flex" xl={3} lg={3} md={6} xs={12}>
          <UserInfo image={UserImage} name={name} id={id} lastSeen={lastSeen} />
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item display="flex" xl={3} lg={3} md={6} xs={12}>
          <Box flexDirection="column" width={1}>
            <Box px={5} py={2}>
              <OtherInfo
                subheader="Email"
                list={[
                  {
                    icon: <Envelope sx={{ width: 20, height: 15 }} />,
                    content: email,
                  },
                ]}
                control={
                  <Link href="#" color="secondary">
                    Edit
                  </Link>
                }
              />
            </Box>
            <Divider flexItem />
            <Box px={5} py={2}>
              <OtherInfo
                subheader="Contact No"
                list={[
                  {
                    icon: <Phone sx={{ width: 20, height: 15 }} />,
                    content: phone,
                  },
                ]}
              />
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item display="flex" xl={2} lg={2} md={6} xs={12}>
          <Box flexDirection="column" width={1}>
            <Box px={1} py={2}>
              <OtherInfo
                subheader="Account Type"
                control={<AccountTypeControl />}
                list={[
                  {
                    content: type,
                  },
                ]}
              />
            </Box>
            <Divider flexItem />
            <Box px={1} py={2}>
              <OtherInfo
                subheader="Account Status"
                list={[
                  {
                    content: <AccountStatusControl />,
                  },
                ]}
              />
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item display="flex" xl={2} lg={2} md={6} xs={12}>
          <Box flexDirection="column" width={1}>
            <Box px={1} py={2}>
              <OtherInfo
                subheader="Redeemable Points"
                control={<AccountTypeControl />}
                list={[
                  {
                    content: (
                      <>
                        <Typography>{redeemablePoints}</Typography>
                        <Typography color="error" sx={{ fontSize: 12 }}>
                          {expiringPoints} Points will be expired soon
                        </Typography>
                      </>
                    ),
                  },
                ]}
              />
            </Box>
            <Divider flexItem />
            <Box px={1} py={2}>
              <OtherInfo
                subheader="Tier Points"
                list={[
                  {
                    content: tierPoints,
                  },
                ]}
              />
            </Box>
          </Box>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item display="flex" xl={2} lg={2} md={6} xs={12}>
          <Box flexDirection="column" width={1}>
            <Box px={1} py={2}>
              <OtherInfo
                subheader="Tier"
                list={[
                  {
                    content: (
                      <>
                        {tier === "silver" ? (
                          <Box display="flex">
                            <Image src={SilverMedal} alt={""} size="xs" />
                            {tier}
                          </Box>
                        ) : null}
                      </>
                    ),
                  },
                ]}
              />
            </Box>
            <Divider flexItem />
            <Box px={1} py={2}>
              <OtherInfo
                subheader="Affinity Group"
                list={[
                  {
                    content: group,
                  },
                ]}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopBanner
