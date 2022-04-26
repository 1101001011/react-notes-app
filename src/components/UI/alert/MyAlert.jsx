import React, { useContext } from "react";
import { AlertContext } from "../../../context/alert/alertContext";
import './MyAlert.scss'

const MyAlert = () => {
    const {alert, hide} = useContext(AlertContext)
    console.log(alert.visible);
    if (!alert.visible) return null

    return (
        <div className="alert" style={{ backgroundColor: alert.color }}>
        </div>
    )
}

export default MyAlert