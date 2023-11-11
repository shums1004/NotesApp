import noteStore from "../stores/notesStore"

export default function UpdatNotes() {

   const store = noteStore.getState((store) => {
     return{  
        updateForm: store.updateForm,
        updateNote: store.updateNote,
        handleUpdateForm: store.handleUpdateForm
    }
    });

if(!store.updateForm._id){
    return <></>
}

  return (
     <div className="updateForm"> 
    <form onSubmit={store.updateNote}>
      <input onChange={store.handleUpdateForm} value={store.updateForm.title} name="title"/>
      <textarea onChange={store.handleUpdateForm} value={store.updateForm.body} name ="body"/>
      <button type="submit">Update</button> 
    </form>
  </div>
  )
}
