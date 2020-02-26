import Typography from '@material-ui/core/Typography';


const Date = ({day}) => {

    return (
        <>
            <Typography variant="h6" align="center">
                {day}
            </Typography>
        </>
    )
}

export default Date;
