import { useState } from "react"




export function Flipcart(){
    const[product,setproduct]=useState({title:'',prise:0,ratings:{rate:0,count:0,reviews:0},features:[],photo:''});
    function LoadClick(){
        fetch("product.json")
        .then(response=>{
            return response.json();

     })
     .then(product=>{
        setproduct(product);

     })
    }
    return(
        <div className="container-fluid">
            <button onClick={LoadClick} className="btn btn-primary mt-3">LoadData</button>
            <div className="col-3">
             <img src={product.photo} width="250"/>
            </div>
            <div className="col-7">
                <p className="text-primary h1">{product.title}</p>
                <div>
                    <span className="bg-success text-white p-2 rounded">{product.ratings.rate}<span className="bi bi-star-fill"></span></span>
                    <span className="ms-3">
                    <b>{product.ratings.count} Ratings & {product.ratings.reviews} Reviews</b>
                    </span>

                </div>
                <ul className="mt-4">
                        {
                            product.features.map(feature=>
                                <li key={feature}>{feature}</li>
                                )
                        }
                    </ul>
                    <div className="col-2">
                    <p className="h3">&#8377; {product.price} </p>

                    </div>

            </div>

        </div>
    )
}