import noteStore from "../stores/notesStore"

export default function CreateNotes() {

    const store = noteStore.getState((store) => {
        return {
            updateForm: store.updateForm,
            updateCreateForm: store.updateCreateForm,
            createForm: store.createForm,
        }
    })

  if(store.updateForm._id){
    return (<div></div>)
  }
    return (
        <div className="createForm">
            <form onSubmit={store.createNote}>
            <input onChange={store.updateCreateForm} value = {store.createForm.title} name="title"/>
            <textarea onChange={store.updateCreateForm} value = {store.createForm.body} name="body"/> 
            <button type = "submit">Create Note</button>
            </form>
      </div>
  )
}
