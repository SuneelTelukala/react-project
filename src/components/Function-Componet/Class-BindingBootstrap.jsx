import { useState } from "react"
export function StyleBindingB(){
    const [colorTheme, setColorTheme] = useState('light-theme');
    const [buttonTheme, setButtonTheme]= useState('btn btn-dark w-100');

    function handleThemeChange(e){
        if(e.target.checked) {
            setColorTheme('dark-theme');
            setButtonTheme('btn btn-light w-100');
        } else {
            setColorTheme('light-theme');
            setButtonTheme('btn btn-dark w-100');
        }
    }

    return(
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
                <form className={colorTheme}>
                    <div className="form-switch">
                        <input type="cheakbox" onChange={handleThemeChange} className="form-cheak-input"/>Darktheme
                    </div>
                    <h1>UserLogin</h1>
                    <dl>
                        <dt>username</dt>
                        <dd><input type="text" className="form-control"/></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control"/></dd>
                    </dl>
                    <button className={buttonTheme}>Login</button>
                    
                </form>
            </div>

        </div>
    )
}