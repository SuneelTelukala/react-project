import { useState } from "react"


export function DataBinding(){
    const[categories]=useState(["all","Electronics","Footwear"])
    return(
              <div className="container-fluid">
                <ol>
                    {
                        categories.map(category=>
                            <li key={category}>{category}</li>
                          
                            )
                    }

                </ol>

              </div>



    )
}