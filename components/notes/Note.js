import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const styles = makeStyles({
    headerBox: {
        padding: "1.3rem 0"
    },
    input: {
        padding: "2rem 1rem 1rem"
    },
    paper: {
        marginBottom: "3rem"
    }
})

const Note = () => {
    const classes = styles();

    return (
        <>
            <Paper elevation={3} className={classes.paper}>
                <Box className={classes.headerBox}>
                    <Typography align="center" >NOTES</Typography>
                </Box>

                    <Divider variant="middle"/>

                <TextField
                    className={classes.input}
                    fullWidth={true}
                    multiline
                    rows="10"
                    variant="outlined"
                />
            </Paper>
        </>
    )
};

export default Note;
