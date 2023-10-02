import { useReducer } from "react"
let initialState={count:0};
function reducer(state,action){
    switch(action.type){
        case "join":
            return {count:state.count+1};
            case "exit":
                return{count:state.count-1};
    }
}
    
   
export function ReducerDemo(){
    const[state,dispatch]=useReducer(reducer,initialState);
    function handleJoinClick(){
        dispatch({type:'join'});
        console.log(state);
    }
    function handleExictClick(){
        dispatch({type:'exit'});
    }

      return(
        <div className="container-fluid">
            <h1>Nareshit-youtube</h1>
            <div>
            <bution onClick={handleJoinClick} className="btn btn-primary"><span className="bi bi-youtube"></span>join</bution>
            <button onClick={handleExictClick} className="btn btn-danger ms-2">Exit</button>
             
            </div>
         <a href="https://www.youtube.com/watch?v=UgjtxhV08Ao&list=RDaJQcn34K_S8&index=12">frame</a>
           <div>
            <div>
                 Live Viewers:{state.count}
            </div>
           </div>

        </div>
      )



}