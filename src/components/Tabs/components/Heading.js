import React from 'react'
import { Typography } from '@material-ui/core'
import { myStyles } from '../../../theme/TabStyles'

function Heading({title , subTitle}) {
    const classes = myStyles()
  return <div>
      <Typography className={classes.card_grid_title}>{title}</Typography>
      <Typography className={classes.card_grid_content}>{subTitle}</Typography>
    </div>
}

export default Heading