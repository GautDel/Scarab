import Box from '@material-ui/core/Box';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import React, { useContext } from 'react';
import Switch from '@material-ui/core/Switch';
import { ModeContext }  from "../../context/ModeContext";

const Mode = () => {
    const {toggleDark, isDark} = useContext(ModeContext)
    return (
        <>
            <Box 
                justify="center" 
                align="center" 
                display="flex" 
                alignItems="center"
            >
                <InvertColorsIcon color={isDark ? "primary" : undefined} fontSize="large" />
                <Switch 
                    onChange={() => toggleDark()} 
                    align="center" 
                    edge="end" 
                    color="primary"
                />
            </Box>
        </>
    )
}

export default Mode;
