import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles({
    button: {
        marginLeft: "0.5rem"
    },
    form: {
        padding: "0 0.5rem 0.5rem 0"
    }
})


const Form = () => {
    const classes = styles();

    return (
        <>
            <form className={classes.form}>
                <Grid container display="row" justify="space-around" alignItems="center">
                    <Grid item xs={9} sm={10} md={9} lg={10}> 
                        <TextField 
                            label="I Need To..." 
                            variant="outlined"  
                            fullWidth={true}
                        />
                    </Grid>

                    <Grid item xs={2} sm={1} md={2} lg={1}>
                         <Fab size="small" 
                            color="primary" 
                            aria-label="add" 
                            className={classes.button}
                        >
                             <AddIcon />
                        </Fab>
                    </Grid>
                </Grid>
           </form>
        </>
    )
}

export default Form;
