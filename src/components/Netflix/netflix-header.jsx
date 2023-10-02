
import './netflix-header.css';
export function NetflixHeader(){
    return(
        <header className="de-flex mt-4 justify-content-between">
            <div>
                <span className="brand">NETFLIX</span>
            </div>
            <div>
                <div className="input-group">
                    <span className=" bi bi-globe input-group-text"></span>
                    <select className="form-select">
                        <option>Language</option>
                    </select>
                    <button className="btn btn-danger">singn in</button>
                </div>
            </div>
        </header>
    )
}