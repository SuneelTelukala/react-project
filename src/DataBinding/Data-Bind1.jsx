
export function DataBindingA(){
    var Product =[
        {Nmae:"Samsung Tv",Prise:45000.44},
        {Nmae:"Nike casuals",Prise:6700.42}
    ];
    return(
        <div className="container-fluid">
            <table>
                <caption>Product List</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Prise</th>
                    </tr>
                </thead>
                <tbody>
                {
                        Product.map(product=>
                            <tr key={product.Name}>
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>

        </div>
    )
}