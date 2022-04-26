import React from "react";

const NotesItem = ({note}) => {

    return (
        <div
            className="note" 
            key={note.id}
        >
            <div className="note__info">
                <h3 className="note__title">{note.title}</h3>
                <span className="note__date">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="note__close">
                &times;
            </div>
        </div>  
    )
}

export default NotesItem