import React from "react";
import { useNavigate } from 'react-router-dom';

const NotesItem = ({note, onRemove}) => {
    let navigate = useNavigate()
    let data = ""
    if (note.date) {
        data = (note.date).slice(0,10)
    }
    return (
        <div
            className="note" 
            key={note.id}
        >
            <div 
                className="note__info" 
                onClick={() => navigate(`/${note.id}`)}
            >
                <h3 className="note__title">{note.title}</h3>
                <span className="note__date">{data}</span>
            </div>
            <div 
                className="note__close"
                onClick={() => onRemove(note.id)}
            >
                &times;
            </div>
        </div> 
    )
}

export default NotesItem