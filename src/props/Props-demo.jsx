

import { NavBar } from "./navbar"
export function PropsDemo(){
    return(
        <div className="container-fluid">
            <h1>Properties Demo</h1>
            <NavBar brandname="Super Market" theme="bg-Primary"
            menuitems={['Home','Shop','Accessories','Help']}/>
            <NavBar brandname="Shopper" theme="bg-dark" menuitems
            ={['Home','About','Contact']}/>

        </div>
    )
}