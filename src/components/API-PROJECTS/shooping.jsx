import { useState,useEffect } from "react"
export function Shooping(){
    const [categories, setCategories] = useState([]);



    function LoadCategories(){
        fetch("https://fakestoreapi.com/products/categories")
        .then(res=>res.json())
        .then(categories=>{
        
            setCategories(categories);
        })
    }
    useEffect(()=>{
        LoadCategories();
        
    },[]);



    return(

        <div className="container-fluid">
            <header className="d-flex justify-content-between bg-dark p-3 text-white">
                 <div>
                    <span className="h4">Shopper</span>
                 </div>
                 <div>
                    <span className="me-3">Home</span>
                    <span className="me-3">Electronic</span>
                    <span className="me-3">Jewelary</span>
                    <span className="me-3">Mens fashon</span>
                    <span className="me-3">Women fashon</span>
                 </div>
                 <div>
                    <button className="btn btn-light position-relative">
                        <span className="bi bi-cart4"></span>Yourcart
                        <span className="badge rounded-circle bg-danger position-absolute top-0 end-0">cartCount</span>
                    </button>
                 </div>
            </header>
           <section className="row mt-3">
            <nav className="col-2">
                <div>
                <label className="form-label fw-bold">Select Category</label>
                <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select className="row mt-3">
                                {
                                    categories.map(category=>
                                        <option key={category} value={category}>{category.toUpperCase()}</option>
                                        )
                                }
                            </select>
                        </div>
                </div>

            </nav>

           </section>
        </div>
    )
}