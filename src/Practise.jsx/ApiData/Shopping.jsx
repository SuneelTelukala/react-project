
import { useState,useEffect } from "react"
export function Shopping(){
    const [categories,setCategories]=useState([]);
    function handleCategoryChange(){
        fetch("http://fakestoreapi.com/products/categories&quot")
        .then(res=>res.json())
        .then(categories=>{
            categories.unshift("all");
            setCategories(categories);

        })
    }
    useEffect(()=>{
        handleCategoryChange();
        
    },[]);

    return(
        <div className="container-fluid">
            <header className="d-flex justify-content-between p-3 bg-dark 
            text-white">
                <div>
                    <span className="h4">Shopper</span>
                </div>
                <div>
                    <span className="me-3">Home</span>
                    <span className="me-3">Electronics</span>
                    <span className="me-3">Jewelary</span>
                    <span className="me-3">Men's Fashion</span>
                    <span className="me-3">women's Fashion</span>
                </div>
                <div>
                    <button>
                        <span className="bi bi-cart4"></span>Yourcart
                        <span className="badge rounded-circle bg-danger
                        position-absolute top-0 end-0">cartCount</span>
                    </button>
                </div>
            </header>
            <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select onChange={handleCategoryChange}
                            className="form-select">
                                {

                                }

                            </select>

                        </div>
                    </div>

                </nav>

            </section>

        </div>
    )
}