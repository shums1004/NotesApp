import React from 'react'
import autStore from '../stores/autStore'
import {Link} from "react-router-dom";

export default function RequireAuth(props) {

    const store = autStore();

    if(store.loggedin == null){
        store.checkAuth();
    }

    if(!store.loggedin){
        return <div>
           <h2>Please Login</h2> 
           <Link to="/login">Logo In</Link>
            </div>
    }

  return (
    <div>{props.children}</div>
  )
}
