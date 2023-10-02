export function EventBindingg(){
    return(
        <div className="container-fluid">
            <h3>Event Binding</h3>
            <div onClick={()=>{alert("Div Clicked")}} className="bg-dark text-white p-3">
                <p>Parent Element</p>
                <button onClick={(e)=>{alert("Button Clicked"); e.stopPropagation()}}>Child Element</button>
            </div>
        </div>
    )
}