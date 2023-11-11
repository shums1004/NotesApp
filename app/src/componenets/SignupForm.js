import React from 'react'
import autStore from '../stores/autStore.js'
import { useNavigate } from 'react-router-dom';

export default function SignupForm() {
    const store = autStore();
    const navigate = useNavigate();

    const handleSignup = async (e)=>{
        e.preventDefault();
        console.log("handleSignUp")
        await store.signup();
        navigate("/login");

    }

  return (
    <form onSubmit={handleSignup}>
        <input onChange={store.updateSignupForm} value={store.signupForm.email} type="email" name="email"/>
        <input onChange={store.updateSignupForm} value={store.signupForm.password} type="password" name="password" />
        <button type="submit"> SignUp</button>
    </form>
  )
}
