const Note = require("../model/note.js");
const User = require("../model/user.js");

const fetchNotes = async (req,res) => {
    try{
    //find the Notes
    const notes = await Note.find({user : req.user._id});
    //respond with the notes
    res.json({notes});
    }
    catch(err){
        res.sendStatus(400);
    }
};

const fetchNote = async (req,res) => {

    try{
    const noteId =  req.params.id;
    const note = await Note.findOne({ id : noteId, user: req.user._id});

    res.json({note});
    }
    catch(err){
        console.log(err);
        res.sendStatus(400);
    }

};

const createNote = async (req,res) => {

    try{
    const {title, body} = req.body;
    const note = await Note.create({
        title,
        body,
        user: req.user._id,
    });

    res.json({note});
    }
    catch(err){
        console.log(err);
        res.sendStatus(400);
    }
};

const updateNote =  async (req,res) =>{

    try{
    const noteId = req.params.id;
    const {title,body} = req.body;

   const note=  await Note.findOneAndUpdate({_id: noteId, user: req.user._id}, {
        title,
        body,
    });
    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }
    const newNote = await Note.findById(noteId);
    res.json({newNote});
    }
    catch(err){
        console.log(err);
        res.sendStatus(400);
    }
};

const deleteNote = async (req,res) =>{
    try {
        const noteId = req.params.id;
        const note = await Note.findOne({ _id: noteId, user: req.user._id });

        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }

        await Note.deleteOne({ _id: noteId, user: req.user._id });
        res.json({ success: "Record Deleted" });
    } catch (err) {
        console.log(err);
        res.sendStatus(400);
    }
};


module.exports = {
    fetchNotes,
    fetchNote, 
    createNote,
    updateNote,
    deleteNote, 
}