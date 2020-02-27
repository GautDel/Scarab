import TextField from '@material-ui/core/TextField';

const TimeBlock = ({hour, min, current}) => {
   
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
            inputRef={current ? input => input && input.focus() : null}
        />
    )
}

export default TimeBlock;
