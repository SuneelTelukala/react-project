import { useState,useEffect } from "react"
function ViewComponent(Props){
    return(
        <label>{Props.UserName}</label>
    )
}
function EditComponent(Props){
    return(
    <input type="text" value={Props.UserName}/>
    )
}


export function RenderDemo(){
    const[UserName,setUsername]=useState("John");
    <div className="container-fluid">
        <h1>User Details</h1>
        <table>
            <tbody>
                <tr>
                    <td>Your Name</td>
                </tr>
            </tbody>
        </table>


    </div>
}