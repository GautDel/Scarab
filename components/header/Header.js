import { useState, useEffect } from 'react';
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

    // VARIABLES //
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];        
    const classes = style();

    //LIFECYCLE METHODS //
    const [clock, setClock] = useState('');
    const [day, setDay] = useState('');
            
    // Function to format single digit to double digit numbers. ie: 1 => 01
    const format = (n) => {
        return n < 10 ? `0${n}` : n;
    }

    useEffect(() => { 

        // TIME AND DATE //
        const getTime = () => {
            const date = new Date();
            
            setClock(`${format(date.getHours())}:${format(date.getMinutes())}`)
            setDay(`${weekDays[date.getDay()]} ${date.getDate()}, ${months[date.getMonth()]}`)
        }

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
