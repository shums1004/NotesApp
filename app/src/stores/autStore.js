import { create } from 'zustand'
import axios from "axios";

const autStore = create((set) => ({
  
    loggedin: null,

    loginForm:{
        email: '',
        password: '',
    },

    updateLoginForm :  (e) =>{
        const {name, value } = e.target;

        set((state)=>{
            return{
                loginForm:{
                    ...state.loginForm,
                    [name]: value
                }
            }
        })
    },

    login : async () =>{
       try{
        const {loginForm} = autStore.getState();

       const res= await axios.post('/login', loginForm);

        set({
            loggedin:true,
            loginForm:{
                email:"",
                password:"",
            }
        })
    }
    catch(err){
        console.log(err);
    }
    },

    checkAuth : async ()=>{
        try{
        await axios.get("/checkAuth");
        set({
            loggedin:true,
        })
    }catch(err){
        set({
            loggedin:false,
        })
    }
    },

    signupForm:{ 
        email:'',
        password:'',
    },

    updateSignupForm: (e)=> {
        const {name, value} = e.target;

        set((state) =>{
            return{
                signupForm:{
                ...state.signupForm,
                [name]:value
            }
            }
        })
    },

    signup: async ()=>{
        try{
        const {signupForm} = autStore.getState();
        const res= await axios.post('/signup', signupForm)
        console.log(res);
        set({
            signupForm:{
                email:"",
                password:"",
            }
        })
        }
        catch(err){
            console.log(err);
        }
    },

    logout: async() =>{

        await axios.get("/logout");
        set({
            loggedin:false, 
        })
    }

}));

export default autStore;  