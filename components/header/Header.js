import { useState, useEffect, useContext } from 'react';
import {TimeContext} from '../../context/TimeContext';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Time from './Time';
import Day from './Date';
import Mode from './Mode';

// STYLING //
const style = makeStyles({
    root: {
        paddingTop: "1rem"
    }
});


const Header = () => {
    const {clock, day, getTime} = useContext(TimeContext);
    const classes = style();

    useEffect(() => { 
        const tick = setInterval(() => {
            getTime(); 
        }, 1000)


    }, [day, clock])

    
    return (
        <Grid container className={classes.root} direction="row" justify="space-around" alignItems="center">
            <Grid item xs={2}>
                <Box>
                    <Time clock={clock} />
                </Box>
            </Grid>

            <Grid item xs={8}> 
                <Box>    
                    <Day day={day} />
                </Box>
            </Grid>

            <Grid item xs={2}>
                <Box>
                    <Mode />
                </Box>
            </Grid>
        </Grid>
    )
}

export default Header;
