import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TimeBlock from './TimeBlock';


// STYLING //
const styles = makeStyles(theme => ({
    '@global': {
        '*::-webkit-scrollbar': {
            backgroundColor: "rgba(0, 0, 0, 0)",
            width: '0.4em'
        },
        '*::-webkit-scrollbar-track': {
            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,0)',
        }
    },
    root: {
        marginTop: "2rem",
        padding: "0.5rem",
        height: "80vh",
        overflow: "scroll",
        overflowX: "hidden"
    },
    heading: {
        margin: "1rem 0"
    }
}));

const Appointment = () => {
    const classes = styles();
   
    // State
    const [schedule, setSchedule] = useState([]);

    // Lifecycle Hooks
    useEffect(() => {
        renderBlocks();
    }, []);

    // renderBlocks variables
    let min = 0;
    let hour = 0;
    let timeBlocks = [];

    const renderBlocks = () => {
       
        for(let i = 0; i < 48; i++) {

            // Instantiate new object
            let timeBlock = {
                min: min,
                hour: hour
            }

            // Push new object to array
            timeBlocks.push(timeBlock);
            
            // Doing 30 minute increments. Resetting if 30 minutes is hit.
            if(min === 0) {
                min += 30;

            } else if (min === 30) {
                hour ++;
                min = 0
            }

        }
        
        // Update state
        setSchedule(timeBlocks);
    }


    return (
        <>
            <Paper elevation={3} className={classes.root}>
                <Typography variant="body1" align="center" className={classes.heading}>
                    APPOINTMENTS
                </Typography>
                
                <Divider variant="middle" />
                
                {schedule.map(timeBlock => (
                    <TimeBlock hour={timeBlock.hour} min={timeBlock.min} />
                ))}
            </Paper>
        </>
    )
}

export default Appointment;
