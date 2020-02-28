import React, {createContext} from 'react'


export const ModeContext = createContext();


export const ModeProvider = (props) => {
    
    return (
    <ModeContext.Provider value={{}}>
        {props.children}
    </ModeContext.Provider>
    )
}
