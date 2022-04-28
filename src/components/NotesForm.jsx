import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import MyAlert from "./UI/alert/MyAlert";
import MyInput from "./UI/input/MyInput";

const NotesForm = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const submitHandler = (e) => {
        e.preventDefault()
        if (value.trim()) {
            firebase.addNote(value.trim())
                .then(() => {alert.show('#30c75b')})
                .then(() => {
                    setTimeout(() => {
                        alert.hide()
                    }, 2000)
                })
            setValue('')
        }
    }

    return (
        <form onSubmit={(e) => submitHandler(e)}>
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