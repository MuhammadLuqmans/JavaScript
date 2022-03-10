import { Typography , Box, Divider } from '@mui/material';
import React from 'react';
import Tabs from './components/tab';
import { myStyles } from '../../theme/TabStyles';

const Setting = () => {
    const classes = myStyles();
    return(
        <Box className={classes.Setting_wrapper}>
        <Typography variant='h5'  className={classes.page_title}>Settings</Typography>
        <Box className={classes.tabs}> <Tabs /></Box>
        <Divider className={classes.Dividers} />
        </Box>
    )
}

export default Setting;