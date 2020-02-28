
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    paper: {
        padding: "1rem",
        marginBottom: "3rem",
        fontStyle: "oblique"
    },
    citation: {
        marginLeft: "1rem",
        fontWeight: "bold"
    }
});


const Quote = () => {
    const classes = styles();

    return (
        <>
            <Paper variant="outlined" className={classes.paper}>
                <Typography variant="body1" align="center" >
                    "The critical ingredient is getting off your butt and doing something. 
                    It’s as simple as that." 
                    <Typography className={classes.citation} component="span" variant="body1">
                        Nolan Bushnell
                    </Typography>
                </Typography>
            </Paper>
        </>
    )
}

export default Quote;
