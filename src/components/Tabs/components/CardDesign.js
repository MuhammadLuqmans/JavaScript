import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@material-ui/core'
import { myStyles } from '../../../theme/TabStyles';

export default function CardDesign() {
    const classes = myStyles()

    return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        image="./static/img/icon2.png"
        alt="green iguana"
        className={classes.media}
      />
      <Box className={classes.card_content}>
        <Typography gutterBottom component="div" className={classes.card_title}>
          SC/Google Authenticator
        </Typography>
        <Typography variant="body2" className={classes.card_discription}>
          Google account Authentication and settings 
        </Typography>
        <Button size="small" className={classes.more_btn}>Read more</Button>
      </Box>
      <CardActions>
        <Button size="small" className={classes.enable_btn}>Enable</Button>
      </CardActions>
    </Card>
  );
}
