import React, { createContext, useState } from 'react';
export const ModeContext = createContext();

export const ModeProvider = props => {
    const [isDark, setIsDark] = useState(false);

    const toggleDark = () => {
        setIsDark(!isDark);
    }

    return (
        <ModeContext.Provider value={{isDark, toggleDark}}>
            {props.children}
        </ModeContext.Provider>
    )
}
