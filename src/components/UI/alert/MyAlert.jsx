import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../../../context/alert/alertContext";
import './MyAlert.scss'

const MyAlert = () => {
    const {alert} = useContext(AlertContext)

    return (
        <CSSTransition
            in={alert.visible}
        >
            <div className="alert" style={{ backgroundColor: alert.color }}></div>
        </CSSTransition>
        
    )
}

export default MyAlert