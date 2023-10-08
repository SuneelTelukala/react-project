import { useEffect} from "react";

export function Login(){
    useEffect(()=>{
        alert(`Login Mounted`);
        return()=>{
            console.log(`Login Unmounted`);
        }
    },[]);
    return(
        <div>
            <h3>Login Component</h3>
        </div>
    )
}