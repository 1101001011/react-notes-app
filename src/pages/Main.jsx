import { useState } from "react"
import NotesForm from "../components/NotesForm"
import NotesList from "../components/NotesList"
import MyInput from "../components/UI/input/MyInput"

const Main = () => {
    const [notes, setNotes] = useState([
        { id: 1, title: 'Passwords' },
        { id: 2, title: 'Emails' },
        { id: 3, title: 'Nicknames' },
    ])

    return (
        <div>
            <h1 className="App__title">My Notes.</h1>
            <NotesForm/>
            <NotesList notes={notes}/>
        </div>
    )
}

export default Main