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
            firebase.addNote(value.trim()).then(() => {
                alert.show('#4BB34B')
            }).catch(() => {
                alert.show('red')
            })
            setValue('')
        } else {
            alert.show('yellow')
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