import React from "react";
import NotesItem from "./NotesItem";

const NotesList = ({notes, onRemove}) => (
    <div>
        {notes.map(note =>
            <NotesItem 
                note={note} 
                key={note.id}
                onRemove={onRemove}
            />  
        )}
    </div>
)

export default NotesList