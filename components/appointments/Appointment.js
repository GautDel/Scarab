import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TimeBlock from './TimeBlock';



const styles = makeStyles({
    root: {
        marginTop: "2rem",
        padding: "0.5rem"
    },
    heading: {
        margin: "1rem 0"
    }
})

const Appointment = () => {
    const classes = styles();

    return (
        <>
            <Paper elevation={3} className={classes.root}>
                <Typography variant="body1" align="center" className={classes.heading}>
                    APPOINTMENTS
                </Typography>
                
                <Divider variant="middle" />

                <TimeBlock />
            </Paper>
        </>
    )
}

export default Appointment;
