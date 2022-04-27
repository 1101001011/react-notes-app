import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import NoteInfo from "../components/NoteInfo";
import MyLoader from "../components/UI/loader/MyLoader";
import { FirebaseContext } from "../context/firebase/firebaseContext";

const NotePage = () => {
    const {loading, note, fetchNote} = useContext(FirebaseContext)
    const params = useParams()

    useEffect(() => {
        fetchNote(params.id)
    }, [])

    return (
        <div>
            {loading
                ? <MyLoader/>
                : <NoteInfo note={note}/>
            }
        </div>
    )
}

export default NotePage