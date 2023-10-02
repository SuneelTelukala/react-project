export function NavBar(Props){
    return(
        <div className={`${Props.theme}  text-white mt-3 mb-2 p-3 d-flex justify-content-between`}>
            <div>
                <span className="h3">{Props.brandname}</span>
            </div>
            <div>
                {
                    Props.menuitems.map((item)=>
                    <span className="me-3">{item}</span>

                    )
                }
            </div>
            <div>
                <span className="bi bi-search"></span>
                <span className="bi bi-person"></span>
                <span className="bi bi-cart3"></span>

            </div>

        </div>

    )
}