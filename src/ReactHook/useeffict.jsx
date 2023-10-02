import { useState,useEffect } from "react"
export function Login(){
    useEffect(()=>{
        alert('Login Mounted');
        return()=>{
            console.log('Login Unmounted')
        }

    },[]);
    return(
        <div>
            <h1>Login Unmounted</h1>
        </div>
    )
    
    
}
export function Register(){
    useEffect(()=>{
        alert('Register Mounted');
        return()=>{
            console.log('Register Unmounted');
        }
    },[]);
    return(
        <div>
            <h1>Register component</h1>
        </div>
    )

    
}


export function HookDemo(){
    const[Component,setComponent]=useState(<Login/>);
    
    function handleLogin(){
        setComponent(<Login/>);
    }
    function handleRegister(){
        setComponent(<Register/>)
    }
    return(
        <div className="container-fluid">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleRegister}>Register</button>
            <hr/>
            {Component}


        </div>
    )
}