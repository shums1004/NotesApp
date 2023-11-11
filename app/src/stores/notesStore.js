import { create } from 'zustand'
import axios from "axios";

const noteStore = create((set) => ({
  
    notes: null, 

    createForm:{
        title: "",
        body: ""
    },

    updateForm:{
        _id:null,
        title:"",
        body:""
    },

    fetchNotes: async ()=>{
        const res = await axios.get("/notes");
        set({ notes : res.data.notes });
    },

    //Create form
    updateCreateForm: (e)=>{
        const {name, value} = e.target;

        set((state) =>{
            return{
                createForm:{
                    ...state.createForm,
                    [name] : value,
                }
            }; 
        })
    },

    //Create Notes
    createNote: async (e)=>{
     e.preventDefault();

    const {createForm, notes} = noteStore.getState();
    // Create Note
    const res = await axios.post("/notes", createForm);
    
    set({
        notes: [...notes ,res.data.note],
        createForm:{
            title:"",
            body:""
        }
    });
    },

    //Delete Notes
    deleteNote: async (_id) => {

        //Delete the Note
        await axios.delete(`/notes/${_id}`)
    
        const {notes} = noteStore.getState();
        //Update State

        //we can also directly call fetchNotes by getting it from getState() and use that to update the list
            // fetchNotes();  

        const newNotes = notes.filter((note) => {
          return note._id !== _id;
         });
    
        set({notes: newNotes});
    },

    // Update 
    handleUpdateForm : (e) => {
    const {value, name} = e.target 

        set((state) =>{
            return{
                updateForm:{
                    ...state.updateForm,
                    [name] : value,},
            };
    })},
    

     toggleUpdate : (note) =>{
        // Get Note details

        set({
            updateForm:{
                title: note.title,
                body: note.body,
                _id: note._id,
            }
        })
        // setUpdateForm({title:note.title, body: note.body, _id: note._id});
    },

    updateNote : async (e) =>{

        e.preventDefault();
        const {updateForm: {title, body, _id}, fetchNotes} = noteStore.getState();
    
        const res = await axios.put(`/notes/${_id}`, {title, body})
    

        // Update State
        fetchNotes();
        // const newNotes = [...notes];
        // const noteIndex = notes.findIndex((note) =>{
        //     return {note._id === _id;}
        // });
        // newNotes[noteIndex] = res.data.note;

        set({
            updateForm : {
                _id:null,
            }
        });
        },

}));

export default noteStore; 