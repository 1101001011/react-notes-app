import React, { useReducer } from "react";
import { AlertContext } from "./alertContext";
import { alertReducer } from "./alertReducer";

const AlertState = ({children}) => {
    const [state, dispatch] = useReducer(alertReducer, { visible: false })

    const show = (color) => {
        dispatch({
            type: 'SHOW_ALERT',
            payload: {color}
        })
    }

    const hide = () => dispatch({ type: 'HIDE_ALERT' })

    return (
        <AlertContext.Provider value={{
            show, hide,
            alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState