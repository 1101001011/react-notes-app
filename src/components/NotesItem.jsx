import React from "react";

const NotesItem = ({note, onRemove}) => (
    <div
        className="note" 
        key={note.id}
    >
        <div className="note__info">
            <h3 className="note__title">{note.title}</h3>
            <span className="note__date">{note.date}</span>
        </div>
        <div 
            className="note__close"
            onClick={() => onRemove(note.id)}
        >
            &times;
        </div>
    </div>  
)

export default NotesItem