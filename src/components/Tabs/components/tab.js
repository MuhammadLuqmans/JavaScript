import * as React from 'react';
import { Button, Box, Grid } from '@material-ui/core'
import { myStyles } from '../../../theme/TabStyles';

const DataTabs = [
    {
        id: 1,
        text: 'Security',
        Borders: '10px 0px 0px 10px',
        className: true,
    },
    {
        id: 2,
        text: 'Preferences',
        Borders: '0px 0px 0px 0px',
        className: false,
    },
    {
        id: 3,
        text: 'Verify',
        Borders: '0px 0px 0px 0px',
        className: false,
    },
    {
        id: 4,
        text: 'API',
        Borders: '0px 10px 10px 0px',
        className: false,
    },
]



export default function Tabs() {
    const classes = myStyles();
    const [isActive, setActive] = React.useState(DataTabs);



    const toggleCard = (card) => {
        let updatedCards = isActive.map((c, i) => {
            if (c.id === card.id) {
                c.className = true;

            } else if (c.id !== card.id) {
                c.className = false;

            }

            return c;
        });
        setActive(updatedCards)
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Grid item container xs={12} sm={8} md={6} lg={6} className={classes.tabs_wrapper}>
                {DataTabs.map((data) => {
                    return (
                        <Grid key={data.id} onClick={() => {
                            toggleCard(data);
                        }}
                            item xs={3} className={classes.tabs_style}> <Button style={{ color: `${data.className ? 'white' : 'hsl(185deg 38% 51%)'}` }} className={classes.btn_one}>{data.text}</Button>
                            <hr style={{ height: '10px', width: '96%', borderRadius: `${data.Borders}`, backgroundColor: `${data.className ? 'hsl(185deg 38% 51%)' : '#fff'}`, border: 'none' }} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    );
}
