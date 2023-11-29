// Load ENV variables
// Import Dependencies
require("dotenv").config();
const express = require('express');
const connectToDB = require("./config/connectToDB.js");
const notesController = require("./controller/noteController.js");
const cors = require('cors');
const userController = require("./controller/userController.js");
const cookieParser = require("cookie-parser");
const requireAuth  = require("./middleware/requireAuth.js");

const app = express();
app.use(express.json());
const port = process.env.PORT;
connectToDB();
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(cookieParser());

//Routing

//User
app.post("/signup", userController.signUp);
app.post("/login", userController.logIn);
app.get("/logout", userController.logOut);
app.get("/checkAuth",requireAuth, userController.checkAuth)

//Notes
app.get("/notes",requireAuth, notesController.fetchNotes);
app.get("/notes/:id",requireAuth, notesController.fetchNote);
app.post("/notes",requireAuth, notesController.createNote);
app.put("/notes/:id",requireAuth,notesController.updateNote);
app.delete("/notes/:id",requireAuth, notesController.deleteNote);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});