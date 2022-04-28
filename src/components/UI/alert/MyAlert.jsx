import React, { useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { AlertContext } from "../../../context/alert/alertContext";
import "./MyAlert.scss"
import {FirebaseContext} from "../../../context/firebase/firebaseContext";

const MyAlert = () => {
    const {alert} = useContext(AlertContext)
    const {error} = useContext(FirebaseContext)

    return (
        <CSSTransition
            in={alert.visible}
            timeout={200}
            classNames="alert"
            mountOnEnter
            unmountOnExit
        >
            {error
                ? <div className="alert__error">{error}</div>
                : <div
                    className="alert"
                    style={{backgroundColor: alert.color}}
                  >
                    <img
                        className="alert__icon"
                        src="https://img.icons8.com/glyph-neue/64/000000/checkmark.png"
                        alt=""/>
                  </div>
            }
        </CSSTransition>
    )
}

export default MyAlert