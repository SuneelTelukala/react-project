

export function FaceBook(){
    return(
    <div className="container-fluid text-center pt-5">
        <div>
            <h1 className="text-center" style={height="25px"}>FaceBook</h1>
        </div>
        <div>
            <form className="pt-3">
                <h6>Log in to FaceBook</h6>
                <dl>
                    <dd><input type="text" placeholder="Email address or phone number"/></dd>
                    <dd><input type="text" placeholder="Password"/></dd>
                    <dd><input type="bution" value="Login"/></dd>
                </dl>
                <span>Forgotten account? </span>
                <span> Sign up for Facebook</span>
            </form>
        </div>

    </div>
    )
}