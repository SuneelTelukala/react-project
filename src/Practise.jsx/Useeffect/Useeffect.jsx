import { useState,useEffect } from "react"
export function Method(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
        document.title="i clicked"+setCount+"times"

         },[])

    return(
        <div className="container-fluid">
            Count:{count}
            <h1><button onClick={()=>setCount(prev=>prev+1)}>In count</button></h1>

        </div>
    )
}