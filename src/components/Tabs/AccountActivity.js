import React from 'react'
import { Grid , Typography ,Box  } from '@material-ui/core'
import Heading from './components/Heading';
import DataGridPro from './components/DataGrid';
import { myStyles } from '../../theme/TabStyles'

function AccountActivity() {
    const classes = myStyles()
  return <div>
      <Box className={classes.card_container}>
      <Grid xs={12} item className={classes.main_grid}>
      <Heading title='Account Authentication & 2FA' subTitle='Once enabled, logging in and important actions will requires will require your 2FA In order to proceed' />
      <Typography className={classes.card_grid_content}>Susploious Activity? <span style={{ color:'hsl(185deg 38% 51%)' }}> Disable Account</span></Typography>
      <DataGridPro />
      </Grid>
      </Box>
    </div>
}

export default AccountActivity