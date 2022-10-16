import React, { createContext, useEffect, useState } from 'react';
import{getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider,  signInWithPopup,  signInWithRedirect, getRedirectResult, signOut } from "firebase/auth";
import app from '../component/firebaise';

//1 প্রথমে কি কনটেস্ট ডিক্লেয়ার করেছি
export const AuthContext=createContext()
const auth=getAuth(app)
//3 index.js ভিতরে গিয়ে App conponent  আছে সেটাকে <UseContext> ,<App /> </UseContext> পেটের ভিতর বসিয়ে দিয়েছে যাতে করে যেকোনো জায়গা থেকে যেতে পারে


const UseContext = ({children}) => {
    const googleProvider=new GoogleAuthProvider()
    // const user ={displayName:'sampod nath'}
    const [user,setUser]=useState({displayName:'sampod nath'})
    const [error,setError]=useState('')

    const createUser=(gmail,password)=>{
        return createUserWithEmailAndPassword(auth,gmail,password)
    }

    const loginUser=(gmail,password)=>{
        return signInWithEmailAndPassword(auth,gmail,password)
    }
    const logOut =()=>{
        return signOut(auth).then()
    }

    const singInWithGoogle=(email,password)=>{
        return signInWithPopup(auth,googleProvider)
    }

    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    
    
    const authInfo={user,setUser,createUser,loginUser,logOut,singInWithGoogle} //{user: {displayName:'sampod nath'}}//{user:uesr}
    return (
        // 2 তারপর সেটাকে Provider করেছি
        <AuthContext.Provider value={authInfo}>
            {/* 5 অ্যাপস নামে কম্পোনেন্ট  টা  এর চাইল্ড হিসেবে বিবেচিত হওয়ায় ,এখান থেকে children  তাকে প্রোভাইডারের ভিতর দিয়ে দিয়েছে */}
            {children} 
        </AuthContext.Provider>
    );
};

export default UseContext;