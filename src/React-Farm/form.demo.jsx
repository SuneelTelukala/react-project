import { useState } from "react"
export function  FormDemo(){

    const [user, setUser] = useState({Name:'',Age:0, Mobile:'', City:''});
    
     function handleNameChange(e){
        setUser({
            Name:e.target.value,
            Age:user.Age,
            Mobile:user.Mobile,
            City:user.City

        })
     }
     function handleAgeChange(e){
        setUser({
            Name:user.Name,
            Age:e.target.value,
            Mobile:user.Mobile,
            City:user.City

        })
     }
     function handleMobileChange(e){
        setUser({
            Name:user.Name,
            Age:user.Age,
            Mobile:e.target.value,
            City:user.City

        })
     }
     function handleMobileChange(e){
        setUser({
            Name:user.Name,
            Age:user.Age,
            Mobile:user.Mobile,
            City:e.target.value

        })
     }


    return(

        <div className="container-fluid">
            <form>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={handleNameChange}/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" onChange={handleAgeChange}/></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={handleMobileChange}/></dd>
                    <dt>City</dt>
                    <dd>
                        <select onChange={handleCityChange}>
                            <option value="-1">Select City</option>
                            <option value="HYD">HYD</option>
                            <option value="AP">AP</option>
                        </select>
                    </dd>
                    <dd className="text-danger">
                        {error.City}
                    </dd>

                </dl>
                <button>Submit</button>
            </form>

        </div>

          )}