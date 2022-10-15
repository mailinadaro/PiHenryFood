import React from "react";
import {Link} from "react-router-dom";


export default function Landing() {
    return (
        <div>
            <h1>Bienvenidxs</h1>
            <Link to="/home"><button>Sign Up</button></Link>    
        </div>
    )
}

