import React from 'react'
import { auth } from '../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth' 

export const Auth = () => {
  return (
    <>
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <button></button>
    </>
  )
}