import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    todo: {
        margin: "0.5rem 0"
    },
});

const Todo = () => {
    const classes = styles();

    return (
        <>
            <Box border={1} borderColor="grey.400" borderRadius={4} className={classes.todo}>
                <Grid container display="row"  justify="space-between" alignItems="center" >
                    <Grid item>
                        <Checkbox
                            value="completed"
                            color="primary"
                        />
                    </Grid>

                    <Grid item >
                        <Typography variant="body1" align="center">
                            Logo Design
                        </Typography>
                    </Grid>

                    <Grid item>
                        <IconButton aria-label="delete">
                            <ClearIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>

            <Box border={1} borderColor="grey.400" borderRadius={4} className={classes.todo}>
                <Grid container display="row"  justify="space-between" alignItems="center" >
                    <Grid item>
                        <Checkbox
                            value="completed"
                            color="primary"
                        />
                    </Grid>

                    <Grid item >
                        <Typography variant="body1" align="center">
                            User login system
                        </Typography>
                    </Grid>

                    <Grid item>
                        <IconButton aria-label="delete">
                            <ClearIcon />
                        </IconButton>
                    </Grid>
                </Grid>
             </Box>

            <Box border={1} borderColor="grey.400" borderRadius={4} className={classes.todo}>
                <Grid container display="row"  justify="space-between" alignItems="center" >
                    <Grid item>
                        <Checkbox
                            value="completed"
                            color="primary"
                        />
                    </Grid>

                    <Grid item >
                        <Typography variant="body1" align="center">
                            Make Backend
                        </Typography>
                    </Grid>

                    <Grid item>
                        <IconButton aria-label="delete">
                            <ClearIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
            
            <Box border={1} borderRadius={4} borderColor="grey.400" className={classes.todo}>
                <Grid container display="row"  justify="space-between" alignItems="center" >
                    <Grid item>
                        <Checkbox
                            value="completed"
                            color="primary"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="body1" align="center" overflow="scroll">
                            Make "Tomorrow" section
                        </Typography>
                    </Grid>

                    <Grid item>
                        <IconButton aria-label="delete">
                            <ClearIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
} 

export default Todo;
