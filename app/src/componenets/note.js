import noteStore from "../stores/notesStore"

export default function Note({note}){
const store = noteStore.getState((store) => {
    return{
        deleteNote: store.deleteNote,
        toggleUpdate: store.toggleUpdate,
    }  
});
    return(
        <div key = {note._id}> 
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <button onClick={() => store.deleteNote(note._id)}>Delete</button>
            <button onClick={() => store.toggleUpdate(note)}>Update Note</button>
          </div>
    )
}