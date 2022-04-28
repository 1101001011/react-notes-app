import React, {useContext, useState} from "react";
import MyButton from "./UI/button/MyButton";
import {FirebaseContext} from "../context/firebase/firebaseContext";

const NoteInfo = ({note, paramsID}) => {
    const [newNote, setNewNote] = useState({...note, text: note.text})
    const {updateNote} = useContext(FirebaseContext)
    let data = ""
    if (note.date) {
        data = (note.date).slice(0,10)
    }

    const saveHandler = (e) => {
        e.preventDefault()
        updateNote(paramsID, newNote.text)
    }

    return (
        <div className="note__info">
            <div className="note__info__header">
                <div className="note__info__header-i">
                    <h1>{note.title}</h1>
                    <span>{data}</span>
                </div>
            </div>
            <textarea
                value={newNote.text}
                className="note__info__textarea"
                placeholder="Note info.."
                onChange={(e) => setNewNote({...note, text: e.target.value})}
            />
            <div className="note__info__btn">
                <MyButton
                    onClick={(e) => saveHandler(e)}
                >
                    Save
                </MyButton>
            </div>
        </div>
    )
}

export default NoteInfo