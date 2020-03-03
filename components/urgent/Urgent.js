import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    headerBox: {
        padding: "1.3rem 0"
    },
    input: {
        padding: "2rem 1rem 1rem"
    },
    paper: {
        marginBottom: "3rem",
    },
})

const Urgent = () => {
    const classes = styles();

    return (
        <>
            <Paper elevation={3} className={classes.paper}>
                <form action="">
                    <Box className={classes.headerBox}>
                        <Grid container display="row" justify="space-between" alignItems="center">
                            <Grid item xs={5} sm={3} md={4} lg={3}>
                                <Typography align="center" >URGENT</Typography>
                            </Grid>

                            <Grid item xs={3} sm={2} md={3} lg={2}>
                                <Fab size="small" 
                                    color="primary" 
                                    aria-label="add" 
                                    className={classes.margin}
                                >
                                    <AddIcon />
                                </Fab>
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider variant="middle"/>

                    <TextField
                        className={classes.input}
                        fullWidth={true}
                        multiline
                        rows="7"
                        variant="outlined"
                    />
                </form>
            </Paper>
        </>
    )
};

export default Urgent;
