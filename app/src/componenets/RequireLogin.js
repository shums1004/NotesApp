import React from 'react'
import autStore from '../stores/autStore'


export default function RequireLogin(props) {

    const store = autStore();

    if(store.loggedin){
        return <div>
        <h2>You are Already Logged In</h2> 
       </div>
    }

  return (
    <div>{props.children}</div>
  )
}
