import React, { useEffect } from 'react'
import autStore from '../stores/autStore'

export default function LogoutPage() {
    const store = autStore();

    useEffect(()=>{
        store.logout();
    }, []);


  return (
    <div>You are now Logged Out</div>
  )
}
