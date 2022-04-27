import React from "react";
import './MyButton.scss'

const MyButton = ({children, props}) => {

    return (
        <button className="button" {...props}>
            {children}
        </button>
    )
}

export default MyButton