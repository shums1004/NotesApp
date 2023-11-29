const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function signUp (req, res){

    try{    
    // get the email and the password
    const {email, password} = req.body;

    console.log(email);

    const hashedPassword = bcrypt.hashSync(password, 8);
    // Create a user

    await User.create({email, password: hashedPassword});

    //respond
    res.sendStatus(200);
    }
    catch(err){
        console.log(err);
    }
};

async function logIn(req, res){

    try{
    // Get email and password from req
    const {email, password} = req.body;

    // find the email in the database
    const user = await User.findOne({ email });
    
    if(!user){
        return res.sendStatus(401);
    }
    // compare the password  
    const passwordMatch = bcrypt.compareSync(password, user.password);

    if(!passwordMatch){
        return res.sendStatus(401); 
    }

    // create a JWT token

    const exp = Date.now() + 1000 * 60* 10;
    var token = jwt.sign({ sub: user._id, exp}, process.env.SECRET);
    // send the jwt token
    res.cookie("Authorization", token, {
        expires: new Date(exp),
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
    });

    res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.sendStatus(401);
    }
};



function logOut(req, res){
    try{
    res.clearCookie("Authorization");
    res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.sendStatus(401);
    }
};

function checkAuth(req, res){
    try{
    console.log(req.user);
    res.sendStatus(200);
    }
    catch(err){
        console.log(err);
        res.sendStatus(401);
    }
}

module.exports= {
    signUp,
    logIn,
    logOut,
    checkAuth,
};
