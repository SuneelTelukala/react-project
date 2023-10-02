import { useState,useEffect } from "react"
export  function StyleBinding(){
    const[StyleObject,SetstyleObject]= useState({border:"boxShadow;"})

    useEffect(()=>{
        SetstyleObject({
            border: '1px solid red',
            boxShadow: '2px 2px 2px red'
        })
    },[]);
     function handleNameChange(e){
          if(e.target.value==""){
            SetstyleObject({

                border:'border 1px solid red',
                boxShadow:'2px 2px 2px red'
            })
          }
          else{
                SetstyleObject({
                    border: '1px solid red',
            boxShadow: '2px 2px 2px green'

                })
          }

     }



    return(

        <div className="container-fluid">
            <h3>User Login</h3>
            <dl>
                <dt>username</dt>
                <dd><input type="text" placeholder="Name required" style={StyleObject} onChange={handleNameChange} /></dd>
            </dl>

        </div>



    )
}