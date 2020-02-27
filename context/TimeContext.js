import React, { createContext, useState } from 'react';

export const TimeContext = createContext();


export const TimeProvider = (props) => {
    const [clock, setClock] = useState('');
    const [day, setDay] = useState('');
    const [h, setH] = useState();
    const [m, setM] = useState();
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];        

    // Function to format single digit to double digit numbers. ie: 1 => 01
    const format = (n) => {
        return n < 10 ? `0${n}` : n;
    }
    
    // Format date and time + set state
    const getTime = () => {
        const date = new Date();
        setH(date.getHours());
        setM(date.getMinutes());
        setClock(`${format(date.getHours())}:${format(date.getMinutes())}`)
        setDay(`${weekDays[date.getDay()]} ${date.getDate()}, ${months[date.getMonth()]}`)
    }
    
    return (
        <TimeContext.Provider value={{ clock, day, getTime, h, m }}>
            {props.children}
        </TimeContext.Provider>
    )
}
