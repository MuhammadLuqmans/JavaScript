import React from 'react'
import { Grid  ,Box ,Divider } from '@material-ui/core'
import Heading from './components/Heading';
import SetCard from './components/SetCards'
import { myStyles } from '../../theme/TabStyles';

function Cards() {
    const classes = myStyles()
    const mapData = [1,2,3];
    const map2Data = [1,2,3,4]
  return <div>
      <Box className={classes.card_container}>
      <Grid xs={12} item className={classes.main_grid}>
      <Heading title='Account Authentication & 2FA' subTitle='Once enabled, logging in and important actions will requires will require your 2FA In order to proceed' />
      <SetCard Data={mapData} />
      </Grid>
      </Box>
      <Divider />
      <Box className={classes.card_container}>
      <Grid xs={12} item className={classes.main_grid}>
      <Heading title='Advanced Security' subTitle='This section will allow you to customize spacific security action' />
      <SetCard Data={map2Data} />
      </Grid>
      </Box>
      <Divider />
    </div>
}

export default Cards