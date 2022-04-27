import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";
import MyAlert from "./UI/alert/MyAlert";
import MyInput from "./UI/input/MyInput";

const NotesForm = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)

    const sumbitHandler = (e) => {
        e.preventDefault()
        if (value.trim()) {
            firebase.addNote(value.trim())
                .then(() => {alert.show('#30c75b')})
                .then(() => {
                    setTimeout(() => {
                        alert.hide()
                    }, 2000)
                })
                .catch(() => {alert.show('#fc4c4c')})
            setValue('')
        } else {
            new Promise((r) => {
                setTimeout(() => {
                    alert.show('#fc4c4c')
                    r()
                }, 200)
            }).then(() => {
                setTimeout(() => {
                    alert.hide()
                }, 2000)
            })
        }
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