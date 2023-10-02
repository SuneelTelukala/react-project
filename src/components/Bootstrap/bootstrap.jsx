
export function Bootstrap(){
    return(
        <div className="container-fluid">
            <form className="text-center mt-4  text-align-center">
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input type="number"/></dd>
                </dl>
                <button>submit</button>
            </form>

        </div>
    )
}