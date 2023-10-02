export function EventBinding1(){
    return(
        <div className="container-fluid">
            <h3>Event Binding</h3>
            <button onClick={()=> {alert("Hello ! React"); alert("Welcome")}}>Hello</button>
        </div>
    )
}
