import TextField from '@material-ui/core/TextField';

const TimeBlock = ({hour, min}) => {
   
    // Function to format single digit to double digit numbers. ie: 1 => 01
    const format = (n) => {
        return n < 10 ? `0${n}` : n;
    }

    return (
        <TextField 
            label={`${format(hour)}:${format(min)}`} 
            variant="outlined" 
            fullWidth={true} 
            size="small" 
            margin="normal"
        />
    )
}

export default TimeBlock;
