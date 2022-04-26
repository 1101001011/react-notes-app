import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import MyAlert from "./UI/alert/MyAlert";
import MyInput from "./UI/input/MyInput";

const NotesForm = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)

    const sumbitHandler = (e) => {
        e.preventDefault()
        alert.show('#4BB34B')
    }

    return (
        <form onSubmit={(e) => sumbitHandler(e)}>
            <div className="notes__form">
                <MyInput
                    value={value}
                    type='text'
                    placeholder='Your note..'
                    onChange={(e) => setValue(e.target.value)}    
                />
                <MyAlert/>
            </div>
        </form>
        
        
    )
}

export default NotesForm