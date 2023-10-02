

export function DataBinding(){
    var id=1;
    var Name ="Nike Casuals";
    var stock =true;
    var result =10/3;
    var msg ="well come to react";
    var prise =0;
    return(
        <div className="conatiner-fluid">
            <h1>product Details</h1>
            <dl>
                <dt>Product id</dt>
                <dd>{id}</dd>
                <dt>Name</dt>
                <dd>{Name}</dd>
                <dt>Stock</dt>
                <dd>{(stock==true)?"availale":"out of stock"}</dd>
            </dl>
            <p> Division : ${Math.round(result)} </p>
            <p> {msg.toUpperCase().slice(7)} </p>
            <p>Prise={(prise)}</p>


        </div>
    )
}