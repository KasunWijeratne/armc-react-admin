import React from 'react';
import { Box } from '@mui/system';
import UserImage from '../../../assets/images/Ellipse 16@2x.png';
import SilverMedal from '../../../assets/images/silver-medal.svg';
import { Grid, Link, Typography, } from '@mui/material';
import UserInfo from './UserInfo';
import OtherInfo from './OtherInfo';
import Envelope from '../../../components/icons/Envelope';
import Phone from '../../../components/icons/Phone';
import AccountTypeControl from './AccountTypeControl';
import AccountStatusControl from './AccountStatusControl';
import Image from '../../../components/Image/Image';
import { grey } from '@mui/material/colors';

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
        <Grid
          item
          display="flex"
          xl={3}
          lg={3}
          md={6}
          xs={12}
          sx={{
            borderWidth: {
              lg: "0 1px 0 0",
              md: "0 1px 1px 0",
              sm: "0 0 1px 0",
              xs: "0 0 1px 0",
            },
            borderStyle: "solid",
            borderColor: grey[300],
          }}
        >
          <UserInfo image={UserImage} name={name} id={id} lastSeen={lastSeen} />
        </Grid>
        <Grid item display="flex" xl={3} lg={3} md={6} xs={12}>
          <Grid container>
            <Grid
              item
              width={1}
              px={5}
              py={2}
              sx={{
                borderWidth: {
                  lg: "0 1px 1px 0",
                  md: "0 0 1px 0",
                  sm: "0 0 1px 0",
                  xs: "0 0 1px 0",
                },
                borderStyle: "solid",
                borderColor: grey[300],
              }}
            >
              <OtherInfo
                subheader="Email"
                list={[
                  {
                    icon: <Envelope />,
                    content: email,
                  },
                ]}
                control={
                  <Link href="#" color="secondary">
                    Edit
                  </Link>
                }
              />
            </Grid>
            <Grid
              item
              width={1}
              px={5}
              py={2}
              sx={{
                borderWidth: {
                  lg: "0 1px 0 0",
                  md: "0 0 1px 0",
                  sm: "0 0 1px 0",
                  xs: "0 0 1px 0",
                },
                borderStyle: "solid",
                borderColor: grey[300],
              }}
            >
              <OtherInfo
                subheader="Contact No"
                list={[
                  {
                    icon: <Phone />,
                    content: phone,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item display="flex" xl={2} lg={2} md={6} xs={12}>
          <Grid container>
            <Grid
              item
              width={1}
              px={5}
              py={2}
              sx={{
                borderWidth: {
                  md: "0 1px 1px 0",
                  sm: "0 0 1px 0",
                  xs: "0 0 1px 0",
                },
                borderStyle: "solid",
                borderColor: grey[300],
              }}
            >
              <OtherInfo
                subheader="Account Type"
                control={<AccountTypeControl />}
                list={[
                  {
                    content: type,
                  },
                ]}
              />
            </Grid>
            <Grid
              item
              width={1}
              px={5}
              py={2}
              sx={{
                borderWidth: {
                  lg: "0 1px 0 0",
                  md: "0 1px 1px 0",
                  sm: "0 0 1px 0",
                  xs: "0 0 1px 0",
                },
                borderStyle: "solid",
                borderColor: grey[300],
              }}
            >
              <OtherInfo
                subheader="Account Status"
                list={[
                  {
                    content: <AccountStatusControl />,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item display="flex" xl={2} lg={2} md={6} xs={12}>
          <Grid container>
            <Grid
              item
              width={1}
              px={5}
              py={2}
              sx={{
                borderWidth: {
                  lg: "0 1px 1px 0",
                  md: "0 0 1px 0",
                  sm: "0 0 1px 0",
                  xs: "0 0 1px 0",
                },
                borderStyle: "solid",
                borderColor: grey[300],
              }}
            >
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
            </Grid>
            <Grid
              item
              width={1}
              px={5}
              py={2}
              sx={{
                borderWidth: {
                  lg: "0 1px 0 0",
                  md: "0 0 1px 0",
                  sm: "0 0 1px 0",
                  xs: "0 0 1px 0",
                },
                borderStyle: "solid",
                borderColor: grey[300],
              }}
            >
              <OtherInfo
                subheader="Tier Points"
                list={[
                  {
                    content: tierPoints,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item display="flex" xl={2} lg={2} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid
              item
              width={1}
              lg={12}
              md={6}
              sm={12}
              px={5}
              py={2}
              sx={{
                borderWidth: {
                  lg: "0 0 1px 0",
                  md: "0 1px 0 0",
                  sm: "0 0 1px 0",
                  xs: "0 0 1px 0",
                },
                borderStyle: "solid",
                borderColor: grey[300],
              }}
            >
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
            </Grid>
            <Grid item px={5} py={2} width={1} lg={12} md={6} sm={12}>
              <OtherInfo
                subheader="Affinity Group"
                list={[
                  {
                    content: group,
                  },
                ]}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TopBanner
