import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({notes}) => {

    return (
        <div>
            {notes.map(note =>
                <NotesItem note={note} key={note.id}/>  
            )}
        </div>
    )
}

export default NotesList