import React from "react";
import  './PageError.css';
import { Link } from "react-router-dom";
import  PageErrorImg from '../../assets/img/error.jpg';



export default function PageError({location}) {
    return (
        <div>
            <div className="error__container">
                <img className="error__img" src={PageErrorImg} alt="Page Error" />
                <h2 className="error__secondTitle">Ooops, the page you are looking for does not exist</h2>
                <h3 className="error__details">The requested URL <code>{location.pathname}</code> was not found on this server.</h3>
                <Link to="/home" className="error__link"><button className="error__button">Go to Home</button></Link>
            </div> 

        </div>
    );
}


