import { useEffect } from "react";
import { useState } from "react"

export function DataBinding(){
    const [styleobject,setStyleObject]=useState({border:'',boxshadow:''});
    useEffect(()=>{
    setStyleObject({
        border:'1px solid red',
        boxshadow:'2px 2px 2px red'
    }),[]}
  )
    return(
        <div className="container-fluid">
            <h1>User Login</h1>
            <dl>
              <dt>User name</dt>
              <dd><input type="text" placeholder="user name required" onChange={handleNameChanhe} style={
                StyleObject
              }/></dd>
            </dl>

        </div>
    )
}