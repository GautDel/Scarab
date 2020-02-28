import { useState, useEffect, useContext } from 'react';
import { TimeContext } from "../../context/TimeContext";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CreateIcon from '@material-ui/icons/Create';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TimeBlock from './TimeBlock';

// STYLING //
const styles = makeStyles({
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
        padding: "0.5rem",
        marginBottom: "2rem"
    },
    headerBox: {
        padding: "1.3rem 0"
    },
    box: {
        height: "55vh",
        overflow: "scroll",
        overflowX: "hidden",
        scrollBehavior: "smooth",
    },
});

const Appointment = () => {
    const classes = styles();
    const { h, m } = useContext(TimeContext);

    // State
    const [schedule, setSchedule] = useState([]);

    // Lifecycle Hooks
    useEffect(() => {
        renderBlocks();
    }, [h, m]);


    // renderBlocks variables
    let min = 0;
    let hour = 0;
    let timeBlocks = [];

    const renderBlocks = () => {
       
        for(let i = 0; i < 48; i++) {

            // Instantiate new object
            let timeBlock = {
                id: i,
                min: min,
                hour: hour,
                current: false
            }

            // Doing 30 minute increments. Resetting if 30 minutes is hit.
            if(min === 0) {
                min += 30;

            } else if (min === 30) {
                hour ++;
                min = 0
            }

            // Set "current" value to use for auto-focus
            for(let block of timeBlocks) {
                if (block.hour === h) {
                    if (block.min === 30 && m >= 30) {
                        block.current = true;
                    } else if(block.min === 0 && m < 30) {
                        block.current = true;
                    } else {
                        block.current = false;
                    }
                } else {
                    block.current = false;
                }
            }

            // Push new object to array
            timeBlocks.push(timeBlock);
        }
        
        // Update state
        setSchedule(timeBlocks);
    }


    return (
        <>
            <Paper elevation={3} className={classes.root}>
                <form action="" position="relative">
                    <Box className={classes.headerBox}>
                        <Grid container display="row" justify="space-between" alignItems="center">
                            <Grid item xs={6} sm={3} md={5} lg={5}>
                                <Typography variant="body1" align="center" className={classes.heading}>
                                    APPOINTMENTS
                                </Typography>
                            </Grid>
                            <Grid item xs={4} sm={2} md={4} lg={3}>
                                <Button
                                    
                                    variant="contained"
                                    color="primary"
                                    startIcon={<CreateIcon />}
                                > Add</Button>

                            </Grid>
                        </Grid>
                    </Box>

                    <Divider variant="middle" />
                
                    <Box className={classes.box}>
                        {schedule.map(timeBlock => (
                            <TimeBlock 
                                hour={timeBlock.hour} 
                                min={timeBlock.min} 
                                key={timeBlock.id}
                                current={timeBlock.current}
                            />
                        ))}
                    </Box>
                </form>
            </Paper>
        </>
    )
}

export default Appointment;
