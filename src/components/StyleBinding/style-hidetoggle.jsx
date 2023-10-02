import { useEffect,useState } from "react"
export function HideToggle(){
    const[styleobj,setstyleobj]=useState({display:'none'});
    function handlePreviewChange(e){
        if(e.target.checked){
            setstyleobj({
                display:'block'
            })
        }else{
            setstyleobj({
                display:'none'
            })
        }
    }
    return(
        <div className="container-fluid">
            <h1>Product Details</h1>
            <dl>
            <dd>Realme c55</dd>
            <dt>preview<span className="form-switch"><input type="cheakbox" onChange={handlePreviewChange}
            className="form-check-input"/></span></dt>
            <dd style={styleobj}>
                <img src="realme.jpg"/>
            </dd>
            </dl>

        </div>

    )
}