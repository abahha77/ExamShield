import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function Admin()
{

    let Navigate=useNavigate();

    function navigate()
    {
        Navigate('/Account')
    }

    return(
        <>
        <div className="tabs d-flex justify-content-center align-items-center mt-5">
             <nav class="nav">
                <button className="btn btn-outline-primary" onClick={navigate}>Account</button>
                <Link to="Account" className="nav-link active" aria-current="page">Accout</Link>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link" href="#">Link</a>
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
            </nav>
        </div>
           
        </>
    )
}