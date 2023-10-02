import React from "react";
import { useEffect,useState } from "react";
import { DataGrid } from "./data-grid";


export function PropDemo(){
    const[columns,setColumns]=useState([]);
    const[rows,setRows]=useState([]);

    function LoadColums(){
        fetch('http://fakestoreapi.com/products')
        .then(res=>res.json())
            .then(product=>{
                setColumns(Object.keys(product));

            })
         }
    function LoadData(){
        fetch('http://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(products=>{
            products.map(product=>{
                delete product.rating
            })
            setRows(products)
        })

    }


    useEffect(()=>{
        LoadColums();
        LoadData();

     },[])

    return(
        <div className="container-fluid">
            <h1>Fake Store Data</h1>
            <DataGrid caption="FakeStore Data" fields={columns}
            data={rows}/>

        </div>

    )
}

