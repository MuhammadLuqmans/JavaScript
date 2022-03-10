import React from 'react'
import { Grid  } from '@material-ui/core'
import CardDesign from './CardDesign'
import { myStyles } from '../../../theme/TabStyles'


function SetCard({ Data }) {
    const classes = myStyles()
  return <div>
      <Grid xs={12} item container className={classes.card_wrapper}>
          {Data.map((data)=>(
            <Grid key={data} item xs={12} sm={6} md={4} lg={3}>
            <CardDesign />
        </Grid>
          ))}
      </Grid>
    </div>
}

export default SetCard