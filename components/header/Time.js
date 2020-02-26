import Typography from '@material-ui/core/Typography';


const Time = ({clock}) => {

    return (
        <>
            <Typography variant="body1" align="center"> 
                {clock}
            </Typography>
        </>
    )
}


export default Time;
