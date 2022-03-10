import React from 'react'
import Account from '../components/Tabs/Card';
import { Box } from '@material-ui/core';
import Setting from '../components/Tabs/Setting'
import AccountActivity from '../components/Tabs/AccountActivity';
import { myStyles } from '../theme/TabStyles';

function Tabs() {

    const classes = myStyles();

  return (
      <div className={classes.body_wrapper}>
    <Box className={classes.Tabs_wrapper}>
    <Setting />
    <Account />
    <AccountActivity />
    </Box>
    </div>
  )
}

export default Tabs