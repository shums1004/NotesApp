import React from 'react'
import autStore from '../stores/autStore.js';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const store = autStore();

    const Navigate = useNavigate();
    const handleLogin =  async (e)=>{
      e.preventDefault();
      await store.login();
      Navigate("/");


    }
  return (
        <form onSubmit={handleLogin}>
            <input onChange={store.updateLoginForm} value ={store.loginForm.email} type="email" name ="email"/>
            <input onChange={store.updateLoginForm} value={store.loginForm.password} type="password" name="password"/>
            <button type="submit"> LogIn</button>
        </form>
  )
}
 