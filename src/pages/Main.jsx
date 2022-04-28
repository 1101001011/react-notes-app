import { useContext, useEffect} from "react"
import NotesForm from "../components/NotesForm"
import NotesList from "../components/NotesList"
import MyLoader from "../components/UI/loader/MyLoader"
import { FirebaseContext } from "../context/firebase/firebaseContext"

const Main = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)
    useEffect(() => {
        fetchNotes()
    }, [])

    return (
        <div>
            <h1 className="App__title">My Notes.</h1>
            <NotesForm/>
            {loading
                ? <MyLoader/>
                : <NotesList 
                    notes={notes}
                    onRemove={removeNote}
                />
            }
        </div>
    )
}

export default Main