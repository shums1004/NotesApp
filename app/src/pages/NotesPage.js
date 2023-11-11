import { useEffect } from "react";
import noteStore from "../stores/notesStore";
import Notes from "../componenets/notes";
import UpdatNotes from "../componenets/updatNotes";
import CreateNotes from "../componenets/createNotes";


export default function NotesPage() {

    const store = noteStore();

  // useEffect
    useEffect(() => {
    store.fetchNotes();
    }, []);

  return (
    <div>
        <Notes/>
        <UpdatNotes/>
        <CreateNotes/> 
    </div>
  )
}
