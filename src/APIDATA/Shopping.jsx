import { useState,useEffect } from "react"
export function Shopping(){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{id:0, title:'', image:'', price:0,
     description:'', category:'', rating:{rate:0, count:0}}]);

     function LoadCategories(){
        fetch("http://fakestoreapi.com/products/categories&quot")
        .then(res=>res.json())
        .then(categories=>{
            categories.unshift("all");
            setCategories(categories);
        })
    }

    useEffect(()=>{
        LoadCategories();
        
    },[]);

    return(
        <div className="container-fluid">
             
             <header className="d-flex justify-content-between p-3 bg-dark text-white">
                <div>
                    <span className="h4">Shooper</span>
                </div>
                <div>
                    <span className="me-3">Home</span>
                    <span className="me-3">Electronics</span>
                    <span className="me-3">Jewelery</span>
                    <span className="me-3">Men's Fashion</span>
                    <span className="me-3">Women's Fashion</span>
                </div>
                <div>
                    <button>
                        <span className="bi bi-cart4"></span>Your cart
                        <span className="badge rounded-circle bg-danger position-absolute top-0 end-0">cartCount</span>
                    </button>

                </div>
             </header>
             <section className="row mt-3">
                <nav className="col-2">
                    <div>
                        <label className="form-lebel fw-bold">Select Category</label>
                        <div>
                            <select onChange={LoadCategories} className="form-select">
                                {
                                 categories.map()
                                }

                            </select>
                        </div>
                    </div>

                </nav>

             </section>



        </div>
    )
}