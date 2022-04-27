import React from "react";

const NoteInfo = ({note}) => {

    return (
        <div>
            <h1>{note.title}</h1>
            <span>{(note.date)}</span>
            <textarea></textarea>
        </div>
    )
}

export default NoteInfo