import React from "react";
import MyButton from "./UI/button/MyButton";

const NoteInfo = ({note}) => {
    let data = ""
    if (note.date) {
        data = (note.date).slice(0,10)
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
                className="note__info__textarea"
                placeholder="Note info.."/>
            <div className="note__info__btn">
                <MyButton>Save</MyButton>
            </div>
        </div>
    )
}

export default NoteInfo