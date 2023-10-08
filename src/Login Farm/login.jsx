
export function Login(){
    return(
        <div className="container-fluid">

            <label>Enter A </label>
            <input type="text" id="textnum1" value="0"/><br/>
            <label>Enter B</label>
            <input type="text" id="textnum2"   value="0"/><br/><br/>

            <input type="button" value="Add"/>
            <input type="button" value="Reset"/>

        </div>
    )
}