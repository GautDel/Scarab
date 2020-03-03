import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Form from './Form';
import Paper from '@material-ui/core/Paper';
import Todo from './Todo';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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
        marginBottom: "2rem",
        padding: "0.5rem"
    },
    headerBox: {
        padding: "1.3rem 0"
    },
    box: {
        minHeight: "30vh",
        overflow: "scroll",
        overflowX: "hidden",
        scrollBehavior: "smooth",
    },
});

const Todos = () => {
 const classes = styles();

    return (
        <>
            <Paper elevation={3} className={classes.root}>
                <Box className={classes.headerBox}>
                    <Typography variant="body1" align="center">
                        TO DO LIST
                    </Typography>

                </Box>
                
                <Divider variant="middle" />

                <Box className={classes.box}>
                    <Todo />
                </Box>

                <Form />                
            </Paper>
        </>
    )
}

export default Todos;
