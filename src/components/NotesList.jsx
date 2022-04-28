import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NotesItem from "./NotesItem";

const NotesList = ({notes, onRemove}) => {
    if (!notes) {
        return <p style={{color: '#ccc', textAlign: 'center'}}>No Notes</p>
    }

    return (
        <div>
            <TransitionGroup>
                {notes.map(note =>
                    <CSSTransition
                        key={note.id}
                        timeout={500}
                        classNames='note'
                    >
                        <NotesItem note={note} onRemove={onRemove}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    )
}

export default NotesList