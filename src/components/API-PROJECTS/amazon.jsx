import { useState } from "react";
export function Amazon(){
    const [products, setProducts] = useState([{title:'', price:0, ratings:{rate:0, count:0, reviews:0}, features:[], photo:''}]);

    function LoadClick(){
        fetch("products.json")
        .then(response=>{
            return response.json();
        })
        .then(products=> {
            setProducts(products);
        })
        return(
            <div className="container-fluid">
                <button onClick={LoadClick} className="btn btn-primary mt-3">Loaddata</button>
        
            </div>
        )
    }
}