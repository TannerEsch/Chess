import React, {useRef} from 'react'
import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth' 

export const Auth: React.FC = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    
    //default login
    const signIn = async () => {
    try{
        if(emailRef.current === null || passwordRef.current === null){
            throw new Error('null fields')
        } else {
            await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        }
    }
    catch(error){
        console.error(error)
    }
    }

    //login with google
    const signInWithGoogle = async () => {
        try{
            await signInWithPopup(auth, googleProvider)
        }
        catch(error){
            console.error(error)
        }
        }
        
        //logout
        const logout = async () => {
            try{
                await signOut(auth)
            }
            catch(error){
                console.error(error)
            }
            }

  return (
    <>
            <input type="text" name="email" placeholder="Username" ref={emailRef} />
            <input type="password" name="password" placeholder="Password" ref={passwordRef} />
            <button onClick={signIn}> Login </button>
            <button onClick={signInWithGoogle}>Sign in with google</button>
            <button onClick={logout}>logout</button>
    </>
  )
}