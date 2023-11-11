import noteStore from "../stores/notesStore";
import Note from "./note";


export default function Notes(){
    const store = noteStore();
    return (
        <div className="displayNotes">
        <h3>Notes:</h3>
        { store.notes && store.notes.map((note)=>{
          return(
          <Note note={note} key = {note._id}/>
          );
        })}
      </div>
    )
}